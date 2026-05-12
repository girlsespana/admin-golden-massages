import type { FC } from 'react'
import type { SelectOption } from '@/components/forms/Select/types'
import type { ImageFile } from '@/components/forms/types'
import { useState } from 'react'
import { Form, Formik, useFormikContext } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import clsx from 'clsx'
import { v4 } from 'uuid'
import { FaArrowLeft } from 'react-icons/fa6'
import { BiImageAdd } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { useDropzone } from 'react-dropzone'

import {
  ModelAttributes,
  ModelLanguages,
  ModelNonVisibleServices,
  ModelServices,
  ModelsModelEyesColorChoices,
  ModelsModelGenderChoices,
  ModelsModelHairColorChoices,
  ModelsModelNationalityChoices,
} from '@types'

import { Button, Text, TextArea } from '@components'
import FormField from '@/components/forms/FormField'
import ToggleSwitchField from '@/components/forms/ToggleSwitchField'
import Select from '@/components/forms/Select'

import { nationalityTranslations } from '@/modules/models/constants/nationalityTranslations'
import { getGenderTranslations } from '@/modules/models/constants/genderTranslations'
import { getHairColorTranslations } from '@/modules/models/constants/hairColorTranslations'
import { getEyesColorTranslations } from '@/modules/models/constants/eyesColorTranslations'
import { getLanguageTranslations } from '@/modules/models/constants/languageTranslations'
import { getServicesTranslations } from '@/modules/models/constants/servicesTranslations'
import { getNonVisibleTranslations } from '@/modules/models/constants/nonVisibleTranslations'
import UnsavedChangesBar from '@/modules/models/components/UnsavedChangesBar'
import { getAttributesTranslations } from '@/modules/models/constants/attributesTranslations'
import { useToast } from '@/hooks'
import useImageUploader from '@/hooks/useImageUploader'
import createModelMutation from '@/modules/models/mutations/createModelMutation'
import ModelsQuery from '@/modules/models/queries/ModelsQuery'

// ─── Form values ─────────────────────────────────────────────────────────────

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
  party: boolean
  languages: string[]
  services: string[]
  nonVisibleServices: string[]
  attributes: string[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function enumToOptions<T extends string>(
  translations: Record<T, string>,
): SelectOption[] {
  return (Object.keys(translations) as T[]).map((key) => ({
    value: key,
    label: translations[key],
  }))
}

const CITY_OPTIONS: SelectOption[] = [
  { label: 'Madrid', value: 'Q2l0eU5vZGU6NDIz' },
  { label: 'Barcelona', value: 'Q2l0eU5vZGU6NTA5' },
  { label: 'Valencia', value: 'Q2l0eU5vZGU6MTI=' },
  { label: 'Las Palmas de Gran Canaria', value: 'Q2l0eU5vZGU6MTQy' },
  { label: 'Maspalomas (Canaria)', value: 'Q2l0eU5vZGU6MTQy' },
  { label: 'Telde (Canaria)', value: 'Q2l0eU5vZGU6Mjg=' },
  { label: 'Santa Lucía (Canaria)', value: 'Q2l0eU5vZGU6NDE=' },
  { label: 'Málaga', value: 'Q2l0eU5vZGU6MTIz' },
  { label: 'Zaragoza', value: 'Q2l0eU5vZGU6Mjg5' },
  { label: 'Valladolid', value: 'Q2l0eU5vZGU6MzA4' },
  { label: 'Bilbao', value: 'Q2l0eU5vZGU6NTAy' },
  { label: 'Alicante', value: 'Q2l0eU5vZGU6MjYz' },
  { label: 'Córdoba', value: 'Q2l0eU5vZGU6MTk1' },
  { label: 'Granada', value: 'Q2l0eU5vZGU6MTcz' },
  { label: 'A Coruña', value: 'Q2l0eU5vZGU6NDM5' },
  { label: 'Murcia', value: 'Q2l0eU5vZGU6OTY=' },
  { label: 'Santander', value: 'Q2l0eU5vZGU6MzM5' },
  { label: 'Adeje (Tenerife)', value: 'Q2l0eU5vZGU6Mjg2' },
  { label: 'Santa Cruz de Tenerife', value: 'Q2l0eU5vZGU6NDQ=' },
  { label: 'Oviedo', value: 'Q2l0eU5vZGU6Mzky' },
  { label: 'Gijón', value: 'Q2l0eU5vZGU6NDUx' },
  { label: 'Ibiza', value: 'Q2l0eU5vZGU6MTYz' },
  { label: 'Sant Antoni de Portmany', value: 'Q2l0eU5vZGU6NjA=' },
  { label: 'Sant Josep de sa Talaia', value: 'Q2l0eU5vZGU6NTQ1' },
  { label: 'Santa Eulària des Riu', value: 'Q2l0eU5vZGU6NDM=' },
]

// ─── SectionCard ─────────────────────────────────────────────────────────────

const goldAccent = (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
)

interface SectionCardProps {
  title: string
  children: React.ReactNode
}

const SectionCard: FC<SectionCardProps> = ({ title, children }) => (
  <div className="bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden">
    {goldAccent}
    <div className="p-6 space-y-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {title}
      </p>
      {children}
    </div>
  </div>
)

// ─── FormSelectInner ─────────────────────────────────────────────────────────

interface FormSelectProps {
  name: string
  label: string
  options: SelectOption[]
  isMulti?: boolean
  isSearchable?: boolean
}

const FormSelectInner: FC<FormSelectProps> = ({
  name,
  label,
  options,
  isMulti = false,
  isSearchable = false,
}) => {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<FormValues>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawValues = values as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawErrors = errors as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawTouched = touched as any

  const fieldValue: unknown = rawValues[name]
  const errorMsg: string | undefined =
    rawTouched[name] && rawErrors[name] ? String(rawErrors[name]) : undefined

  const singleSelected = options.find((o) => o.value === fieldValue) ?? null

  return (
    <div className="space-y-1.5">
      <label htmlFor={name}>
        <Text as="span" size="sm" weight="medium">
          {label}
        </Text>
      </label>
      {isMulti ? (
        <Select<SelectOption, true>
          inputId={name}
          isMulti
          options={options}
          isSearchable={isSearchable}
          value={options.filter(
            (o) =>
              Array.isArray(fieldValue) &&
              (fieldValue as string[]).includes(o.value),
          )}
          onChange={(selected) => {
            void setFieldValue(
              name,
              selected ? selected.map((s) => s.value) : [],
            )
          }}
          menuPosition="fixed"
        />
      ) : (
        <Select<SelectOption, false>
          inputId={name}
          isMulti={false}
          options={options}
          isSearchable={isSearchable}
          value={singleSelected}
          onChange={(selected) => {
            void setFieldValue(name, selected ? selected.value : '')
          }}
          menuPosition="fixed"
        />
      )}
      {errorMsg && (
        <span className="text-xs text-red-400">{errorMsg}</span>
      )}
    </div>
  )
}

// ─── ImagesSection ────────────────────────────────────────────────────────────

interface MediaSectionProps {
  items: ImageFile[]
  onAdd: (file: ImageFile) => void
  onRemove: (id: string) => void
  accept: Record<string, string[]>
  icon: React.ReactNode
  isVideo?: boolean
}

const MediaDropSection: FC<MediaSectionProps> = ({
  items,
  onAdd,
  onRemove,
  accept,
  icon,
  isVideo = false,
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      onAdd({ id: v4(), file, preview: URL.createObjectURL(file) })
    })
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept, multiple: true })

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-4">
      <div
        {...getRootProps()}
        className={clsx([
          'bg-neutral-900 rounded-xl w-full aspect-[3/4] flex items-center justify-center',
          'border-2 border-dashed transition-all cursor-pointer',
          isDragReject
            ? 'border-red-500'
            : isDragActive
              ? 'border-primary'
              : 'border-neutral-700',
        ])}
      >
        <input {...getInputProps()} />
        <div className="text-center text-neutral-500 flex flex-col items-center">
          {icon}
        </div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="relative group w-full aspect-[3/4] rounded-xl overflow-hidden"
        >
          {isVideo ? (
            <video
              src={item.preview}
              className="w-full h-full object-cover"
              controls
            />
          ) : (
            <img
              src={item.preview}
              alt="preview"
              className="w-full h-full object-cover group-hover:brightness-50 duration-300"
            />
          )}
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className={clsx([
              'absolute top-1 right-1 p-1 rounded-full',
              'bg-card-dark/80 text-white text-xl',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
              'hover:text-primary',
            ])}
          >
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  )
}

// ─── CreateModelForm ──────────────────────────────────────────────────────────

const CreateModelForm: FC = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { uploadImage, loading: uploading } = useImageUploader()

  const [images, setImages] = useState<ImageFile[]>([])
  const [videos, setVideos] = useState<ImageFile[]>([])

  const [createModel, { loading }] = useMutation(createModelMutation, {
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
    party: false,
    languages: [],
    services: [],
    nonVisibleServices: [],
    attributes: [],
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
  })

  const handleSubmit = async (values: FormValues) => {
    toast('Subiendo imágenes...', 'loading', { id: 'create-model' })

    const imageUrls: string[] = []
    for (const img of images) {
      const result = await uploadImage(img)
      if (result.url) imageUrls.push(result.url)
    }

    const videoUrls: string[] = []
    for (const vid of videos) {
      const result = await uploadImage(vid)
      if (result.url) videoUrls.push(result.url)
    }

    toast('Guardando modelo...', 'loading', { id: 'create-model' })

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
        toast('Modelo creado con éxito', 'success', { id: 'create-model' })
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

      <div className="bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden">
        {goldAccent}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">Crear modelo</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Completa los datos para registrar un nuevo modelo
          </p>
        </div>
      </div>

      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {/* Información básica */}
          <SectionCard title="Información básica">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <FormField
                name="name"
                label="Nombre"
                placeholder="Nombre del modelo"
                className="col-span-2"
              />
              <FormSelectInner
                name="gender"
                label="Género"
                options={enumToOptions<ModelsModelGenderChoices>(
                  getGenderTranslations(),
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormSelectInner
                name="nationality"
                label="Nacionalidad"
                options={enumToOptions<ModelsModelNationalityChoices>(
                  nationalityTranslations,
                )}
                isSearchable
              />
              <FormSelectInner
                name="cityId"
                label="Ciudad"
                options={CITY_OPTIONS}
                isSearchable
              />
            </div>

            <FormField
              name="description"
              label="Descripción"
              as={TextArea}
              rows={4}
              placeholder="Descripción del modelo..."
            />
          </SectionCard>

          {/* Medidas y físico */}
          <SectionCard title="Medidas y físico">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <FormField
                name="age"
                label="Edad"
                type="number"
                placeholder="años"
              />
              <FormField
                name="weight"
                label="Peso"
                type="number"
                placeholder="kg"
              />
              <FormField
                name="height"
                label="Altura"
                type="number"
                placeholder="cm"
              />
              <FormField
                name="metrics"
                label="Medidas"
                placeholder="90-60-90"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormSelectInner
                name="eyesColor"
                label="Color de ojos"
                options={enumToOptions<ModelsModelEyesColorChoices>(
                  getEyesColorTranslations(),
                )}
              />
              <FormSelectInner
                name="hairColor"
                label="Color de cabello"
                options={enumToOptions<ModelsModelHairColorChoices>(
                  getHairColorTranslations(),
                )}
              />
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <ToggleSwitchField name="boobs" label="Pecho operado" />
              <ToggleSwitchField name="piercings" label="Piercings" />
              <ToggleSwitchField name="tattoos" label="Tatuajes" />
              <ToggleSwitchField name="party" label="Party" />
            </div>
          </SectionCard>

          {/* Idiomas y servicios */}
          <SectionCard title="Idiomas y servicios">
            <FormSelectInner
              name="languages"
              label="Idiomas"
              options={enumToOptions<ModelLanguages>(getLanguageTranslations())}
              isMulti
            />
            <FormSelectInner
              name="services"
              label="Servicios"
              options={enumToOptions<ModelServices>(getServicesTranslations())}
              isMulti
            />
            <FormSelectInner
              name="nonVisibleServices"
              label="Servicios no visibles"
              options={enumToOptions<ModelNonVisibleServices>(
                getNonVisibleTranslations(),
              )}
              isMulti
            />
            <FormSelectInner
              name="attributes"
              label="Atributos"
              options={enumToOptions<ModelAttributes>(
                getAttributesTranslations(),
              )}
              isMulti
            />
          </SectionCard>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creando...' : 'Crear modelo'}
            </Button>
          </div>

          <UnsavedChangesBar submitLabel="Crear modelo" showDiscard={false} />
        </Form>
      </Formik>

      {/* Imágenes (fuera del form para no bloquear submit) */}
      <SectionCard title="Imágenes públicas">
        <MediaDropSection
          items={images}
          onAdd={(f) => setImages((prev) => [...prev, f])}
          onRemove={(id) => setImages((prev) => prev.filter((i) => i.id !== id))}
          accept={{ 'image/*': [] }}
          icon={<BiImageAdd size={40} />}
        />
      </SectionCard>

      <SectionCard title="Videos">
        <MediaDropSection
          items={videos}
          onAdd={(f) => setVideos((prev) => [...prev, f])}
          onRemove={(id) => setVideos((prev) => prev.filter((v) => v.id !== id))}
          accept={{ 'video/*': [] }}
          icon={<RiVideoAddFill size={40} />}
          isVideo
        />
      </SectionCard>
    </div>
  )
}

export default CreateModelForm
