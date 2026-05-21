import type {FC} from 'react'
import {Form, Formik, useFormikContext} from 'formik'
import {useNavigate} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import * as Yup from 'yup'

import {
  ModelsModelEyesColorChoices,
  ModelsModelGenderChoices,
  ModelsModelHairColorChoices,
  ModelsModelNationalityChoices,
} from '@types'

import {Button} from '@components'
import useImageUploader from '@/hooks/useImageUploader'
import {useToast} from '@/hooks'
import createModelMutation from '@/modules/models/mutations/createModelMutation'
import ModelsQuery from '@/modules/models/queries/ModelsQuery'

import SectionCard from './components/SectionCard'
import BasicInfoSection from './components/BasicInfoSection'
import PhysicalInfoSection from './components/PhysicalInfoSection'
import ServicesSection from './components/ServicesSection'
import ModelMediaSection from './components/ModelMediaSection'
import UnsavedChangesBar from '@/modules/models/components/UnsavedChangesBar'
import {ImageFile} from "@/components/forms/types";


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

const ModelMediaSectionFormik: FC = () => {
  const {setFieldValue, values} = useFormikContext<FormValues>()

  return (
    <ModelMediaSection
      images={values.images}
      videos={values.videos}
      onAddImage={(files) => setFieldValue('images', [...values.images, ...files])}
      onRemoveImage={(id) => setFieldValue('images', values.images.filter((i) => i.id !== id))}
      onAddVideo={(files) => setFieldValue('videos', [...values.videos, ...files])}
      onRemoveVideo={(id) => setFieldValue('videos', values.videos.filter((v) => v.id !== id))}
      showImageError
    />
  )
}


const CreateModelForm: FC = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const {uploadImage, loading: uploading} = useImageUploader()

  const [createModel, {loading}] = useMutation(createModelMutation, {
    refetchQueries: [ModelsQuery],
  })

  const initialValues: FormValues = {
    name: '',
    description: '',
    gender: ModelsModelGenderChoices.Woman,
    age: '',
    weight: '',
    height: '',
    metrics: '',
    nationality: ModelsModelNationalityChoices.Es,
    cityId: '',
    eyesColor: ModelsModelEyesColorChoices.Brown,
    hairColor: ModelsModelHairColorChoices.Brown,
    boobs: false,
    piercings: false,
    tattoos: false,
    smoker: false,
    party: false,
    languages: [],
    services: [],
    nonVisibleServices: [],
    attributes: [],
    images: [],
    videos: [],
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Requerido'),
    age: Yup.number()
      .required('Requerido')
      .positive()
      .integer()
      .min(18, 'Debe ser mayor de edad'),
    gender: Yup.string().required('Requerido'),
    hairColor: Yup.string().required('Requerido'),
    eyesColor: Yup.string().required('Requerido'),
    nationality: Yup.string().required('Requerido'),
    cityId: Yup.string().required('Requerido'),
    height: Yup.number().required('Requerido').positive().integer(),
    weight: Yup.number().required('Requerido').positive().integer(),
    metrics: Yup.string().required('Requerido'),
    images: Yup.array()
      .test('has-images', 'Debes agregar al menos una foto', (value) => (value?.length ?? 0) > 0)
      .required('Requerido'),
  })

  const handleSubmit = async (values: FormValues) => {
    toast('Subiendo imágenes...', 'loading', {id: 'create-model'})

    const imageUrls: string[] = []
    for (const img of values.images) {
      const result = await uploadImage(img)
      if (result.url) imageUrls.push(result.url)
    }

    const videoUrls: string[] = []
    for (const vid of values.videos) {
      const result = await uploadImage(vid)
      if (result.url) videoUrls.push(result.url)
    }

    if (imageUrls.length === 0) {
      toast('Debes agregar al menos una foto para crear la modelo', 'error', {id: 'create-model'})
      return
    }

    toast('Guardando modelo...', 'loading', {id: 'create-model'})

    await createModel({
      variables: {
        input: {
          ...values,
          age: Number(values.age),
          height: Number(values.height),
          weight: Number(values.weight),
          images: imageUrls,
          videos: videoUrls,
        },
      },
      onCompleted: () => {
        toast('Modelo creado con éxito', 'success', {id: 'create-model'})
        navigate('/')
      },
      onError: (err) => {
        toast(err.message ?? 'Error al crear el modelo', 'error', {
          id: 'create-model',
        })
      },
    })
  }

  const isSubmitting = loading || uploading

  return (
    <div className="space-y-6">
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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

          {/* Imágenes y videos */}
          <ModelMediaSectionFormik />

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creando...' : 'Crear modelo'}
            </Button>
          </div>

          <UnsavedChangesBar submitLabel="Crear modelo" showDiscard={false} />
        </Form>
      </Formik>
    </div>
  )
}

export default CreateModelForm
