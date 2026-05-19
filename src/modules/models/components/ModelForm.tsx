import {FC} from 'react'
import {Form, Formik, useFormikContext} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import NiceModal from '@ebay/nice-modal-react'
import clsx from 'clsx'
import {FaArrowLeft} from 'react-icons/fa6'
import {ImWoman} from 'react-icons/im'
import {HiPlay, HiStop} from 'react-icons/hi2'
import {useMutation} from '@apollo/client'

import {ModelImageNode, ModelNode, ModelVideoNode,} from '@types'

import {Button} from '@components'

import ActivateModelModal from './ActivateModelModal'
import DeactivateModelModal from './DeactivateModelModal'
import UnsavedChangesBar from './UnsavedChangesBar'
import SectionCard from './CreateModelForm/components/SectionCard'
import BasicInfoSection from './CreateModelForm/components/BasicInfoSection'
import PhysicalInfoSection from './CreateModelForm/components/PhysicalInfoSection'
import ServicesSection from './CreateModelForm/components/ServicesSection'
import ModelMediaSection from './CreateModelForm/components/ModelMediaSection'
import editModelMutation from '@/modules/models/mutations/editModelMutation'
import {useToast} from '@/hooks'
import useImageUploader from '@/hooks/useImageUploader'
import {ImageFile} from '@/components/forms/types'
import ModelQuery from "@/modules/models/queries/ModelQuery";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormValues {
  name: string
  description: string
  gender: string
  age: string
  weight: string
  height: string
  metrics: string
  nationality: string
  cityId: string
  eyesColor: string
  hairColor: string
  boobs: boolean
  piercings: boolean
  tattoos: boolean
  smoker: boolean
  party: boolean
  languages: string[]
  services: string[]
  nonVisibleServices: string[]
  attributes: string[]
  images: ImageFile[]
  videos: ImageFile[]
}

// ─── Components ──────────────────────────────────────────────────────────────

const ModelMediaSectionFormik: FC<{model: ModelNode}> = () => {
  const {setFieldValue, values} = useFormikContext<FormValues>()

  return (
    <ModelMediaSection
      images={values.images}
      videos={values.videos}
      onAddImage={(f) => setFieldValue('images', [...values.images, f])}
      onRemoveImage={(id) => setFieldValue('images', values.images.filter((i) => i.id !== id))}
      onAddVideo={(f) => setFieldValue('videos', [...values.videos, f])}
      onRemoveVideo={(id) => setFieldValue('videos', values.videos.filter((v) => v.id !== id))}
    />
  )
}

interface Props {
  model: ModelNode
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const modelImagesToImageFiles = (images: ModelImageNode[]): ImageFile[] =>
  images.map((img) => ({
    id: img.id,
    file: null,
    preview: img.imageUrl ?? '',
  }))

const modelVideosToImageFiles = (videos: ModelVideoNode[]): ImageFile[] =>
  videos.map((vid) => ({
    id: vid.id,
    file: null,
    preview: vid.videoUrl ?? '',
  }))

const validationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  age: Yup.string().required('Campo requerido'),
  gender: Yup.string().required('Campo requerido'),
  hairColor: Yup.string().required('Campo requerido'),
  eyesColor: Yup.string().required('Campo requerido'),
  nationality: Yup.string().required('Campo requerido'),
  cityId: Yup.string().required('Campo requerido'),
  height: Yup.string().required('Campo requerido'),
  weight: Yup.string().required('Campo requerido'),
  metrics: Yup.string().required('Campo requerido'),
})

// ─── ModelForm ────────────────────────────────────────────────────────────────

const ModelForm: FC<Props> = ({model}) => {
  const navigate = useNavigate()
  const toast = useToast()
  const cover = model.images?.[0]?.imageUrl

  const [editModel, {loading}] = useMutation(editModelMutation)
  const {uploadImage, loading: uploading} = useImageUploader()

  const initialValues: FormValues = {
    name: model.name ?? '',
    description: model.description ?? '',
    gender: model.gender ?? '',
    age: model.age != null ? String(model.age) : '',
    weight: model.weight != null ? String(model.weight) : '',
    height: model.height != null ? String(model.height) : '',
    metrics: model.metrics ?? '',
    nationality: model.nationality ?? '',
    cityId: model.city?.id ?? '',
    eyesColor: model.eyesColor ?? '',
    hairColor: model.hairColor ?? '',
    boobs: model.boobs ?? false,
    piercings: model.piercings ?? false,
    tattoos: model.tattoos ?? false,
    smoker: model.smoker ?? false,
    party: model.party ?? false,
    languages: (model.languages?.filter(Boolean) as string[]) ?? [],
    services: (model.services?.filter(Boolean) as string[]) ?? [],
    nonVisibleServices: (model.nonVisibleServices?.filter(Boolean) as string[]) ?? [],
    attributes: (model.attributes?.filter(Boolean) as string[]) ?? [],
    images: model.images ? modelImagesToImageFiles(model.images.filter(Boolean) as ModelImageNode[]) : [],
    videos: model.videos ? modelVideosToImageFiles(model.videos.filter(Boolean) as ModelVideoNode[]) : [],
  }

  const formatDate = (date?: string | null) => date?.split(/[T ]/)[0] ?? '—'

  const handleSubmit = async (values: FormValues) => {
    toast('Subiendo archivos...', 'loading', {id: 'edit-model'})

    // Upload new images
    const imageUrls: string[] = values.images.map((img) => img.preview)
    for (const img of values.images) {
      if (img.file) {
        const result = await uploadImage(img)
        if (result.url) {
          const index = imageUrls.findIndex((url) => url === img.preview)
          if (index !== -1) imageUrls[index] = result.url
        }
      }
    }

    // Upload new videos
    const videoUrls: string[] = values.videos.map((vid) => vid.preview)
    for (const vid of values.videos) {
      if (vid.file) {
        const result = await uploadImage(vid)
        if (result.url) {
          const index = videoUrls.findIndex((url) => url === vid.preview)
          if (index !== -1) videoUrls[index] = result.url
        }
      }
    }

    toast('Guardando modelo...', 'loading', {id: 'edit-model'})

    await editModel({
      variables: {
        input: {
          ...values,
          modelId: model.id,
          age: Number(values.age),
          height: Number(values.height),
          weight: Number(values.weight),
          images: imageUrls,
          videos: videoUrls,
        },
      },
      onCompleted: () => {
        toast('Modelo actualizado con éxito', 'success', {id: 'edit-model'})
      },
      onError: (err) => {
        toast(err.message ?? 'Error al actualizar el modelo', 'error', {
          id: 'edit-model',
        })
      },
      refetchQueries: [ModelQuery]
    })
  }

  const isSubmitting = loading || uploading

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Back */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
      >
        <FaArrowLeft className="text-xs" />
        Modelos
      </button>

      {/* Hero card */}
      <div className="bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="p-6 flex gap-6">
          {/* Photo */}
          <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden">
            {cover ? (
              <img src={cover} alt={model.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center bg-gradient-to-br from-neutral-900 to-neutral-950">
                <ImWoman className="text-3xl text-neutral-700" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 space-y-3">
            <h1 className="text-2xl font-bold text-white truncate">{model.name}</h1>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2">
              <span
                className={clsx(
                  'flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium',
                  model.isActive
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    : 'bg-neutral-900/60 text-neutral-300 border border-white/10',
                )}
              >
                <span
                  className={clsx(
                    'w-1.5 h-1.5 rounded-full',
                    model.isActive ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500',
                  )}
                />
                {model.isActive ? 'Activa' : 'Inactiva'}
              </span>
              
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Button
                color="success"
                disabled={model.isActive}
                onClick={() => NiceModal.show(ActivateModelModal, {node: model})}
              >
                <HiPlay className="text-base" />
                Activar
              </Button>
              <Button
                color="error"
                disabled={!model.isActive}
                onClick={() => NiceModal.show(DeactivateModelModal, {node: model})}
              >
                <HiStop className="text-base" />
                Desactivar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Formik Form */}
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="space-y-6">
          {/* Información básica */}
          <SectionCard title="Información básica">
            <BasicInfoSection />
          </SectionCard>

          {/* Medidas y físico */}
          <SectionCard title="Medidas y físico">
            <PhysicalInfoSection />
          </SectionCard>

          {/* Idiomas y servicios */}
          <SectionCard title="Idiomas y servicios">
            <ServicesSection />
          </SectionCard>

          {/* Fechas */}
          <SectionCard title="Fechas">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-neutral-500 text-xs">Fecha de activación</p>
                <p
                  className={clsx(
                    'font-medium text-sm',
                    model.activationDate ? 'text-white' : 'text-neutral-500',
                  )}
                >
                  {formatDate(model.activationDate)}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-neutral-500 text-xs">Fecha destacada</p>
                <p
                  className={clsx(
                    'font-medium text-sm',
                    model.featuredDate ? 'text-white' : 'text-neutral-500',
                  )}
                >
                  {formatDate(model.featuredDate)}
                </p>
              </div>
            </div>
          </SectionCard>

          {/* Imágenes y videos */}
          <ModelMediaSectionFormik model={model} />

          <div className="flex justify-end pt-2">
            <Button type="submit" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </div>

          <UnsavedChangesBar />
        </Form>
      </Formik>


    </div>
  )
}

export default ModelForm
