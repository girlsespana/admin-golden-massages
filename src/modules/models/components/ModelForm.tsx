import { FC } from 'react'
import { Form, Formik, useFormikContext } from 'formik'
import { useNavigate } from 'react-router-dom'
import NiceModal from '@ebay/nice-modal-react'
import clsx from 'clsx'
import { FaCity, FaArrowLeft, FaStar } from 'react-icons/fa6'
import { ImWoman } from 'react-icons/im'
import { HiCheckBadge, HiPlay, HiStop } from 'react-icons/hi2'
import { FiList } from 'react-icons/fi'

import {
  ModelNode,
  ModelSubscriptionNode,
  ModelImageNode,
  ModelVideoNode,
  ModelAttributes,
  ModelLanguages,
  ModelNonVisibleServices,
  ModelRangeType,
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
import type { SelectOption } from '@/components/forms/Select/types'

import { nationalityTranslations } from '@/modules/models/constants/nationalityTranslations'
import { getGenderTranslations } from '@/modules/models/constants/genderTranslations'
import { getHairColorTranslations } from '@/modules/models/constants/hairColorTranslations'
import { getEyesColorTranslations } from '@/modules/models/constants/eyesColorTranslations'
import { getLanguageTranslations } from '@/modules/models/constants/languageTranslations'
import { getServicesTranslations } from '@/modules/models/constants/servicesTranslations'
import { getNonVisibleTranslations } from '@/modules/models/constants/nonVisibleTranslations'
import { getAttributesTranslations } from '@/modules/models/constants/attributesTranslations'
import { rangeTypeTranslations } from '@/modules/models/constants/rangeTypeTranslations'

import VerifiedModelModal from '@/modules/models/components/VerifiedModelModal'
import ActivateModelModal from '@/modules/models/components/ActivateModelModal'
import DeactivateModelModal from '@/modules/models/components/DeactivateModelModal'
import FeaturedModelModal from '@/modules/models/components/FeaturedModelModal'
import SubscriptionsModal from '@/modules/models/components/SubscriptionsModal'
import ModelImages from './ModelImages'
import ModelVideos from './ModelVideos'

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
  rangeType: string
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
}

interface Props {
  model: ModelNode
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

// ─── FormSelect ──────────────────────────────────────────────────────────────

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

  const singleSelected =
    options.find((o) => o.value === fieldValue) ?? null

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

// ─── ModelForm ────────────────────────────────────────────────────────────────

const ModelForm: FC<Props> = ({ model }) => {
  const navigate = useNavigate()

  const cover = model.images?.[0]?.imageUrl
  const subscriptions =
    model.subscriptions?.filter(
      (s): s is ModelSubscriptionNode => s !== null,
    ) ?? []

  const initialValues: FormValues = {
    name: model.name ?? '',
    description: model.description ?? '',
    gender: model.gender ?? '',
    age: model.age != null ? String(model.age) : '',
    weight: model.weight != null ? String(model.weight) : '',
    height: model.height != null ? String(model.height) : '',
    metrics: model.metrics ?? '',
    nationality: model.nationality ?? '',
    rangeType: model.rangeType ?? '',
    eyesColor: model.eyesColor ?? '',
    hairColor: model.hairColor ?? '',
    boobs: model.boobs ?? false,
    piercings: model.piercings ?? false,
    tattoos: model.tattoos ?? false,
    smoker: model.smoker ?? false,
    party: model.party ?? false,
    languages: (model.languages?.filter(Boolean) as string[]) ?? [],
    services: (model.services?.filter(Boolean) as string[]) ?? [],
    nonVisibleServices:
      (model.nonVisibleServices?.filter(Boolean) as string[]) ?? [],
    attributes: (model.attributes?.filter(Boolean) as string[]) ?? [],
  }

  const formatDate = (date?: string | null) =>
    date?.split(/[T ]/)[0] ?? '—'

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
        {goldAccent}
        <div className="p-6 flex gap-6">
          {/* Photo */}
          <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden">
            {cover ? (
              <img
                src={cover}
                alt={model.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full grid place-items-center bg-gradient-to-br from-neutral-900 to-neutral-950">
                <ImWoman className="text-3xl text-neutral-700" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 space-y-3">
            <h1 className="text-2xl font-bold text-white truncate">
              {model.name}
            </h1>

            {/* City chip */}
            {model.city?.name && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300 border border-white/[0.06]">
                <FaCity className="text-primary text-[10px]" />
                {model.city.name}
              </span>
            )}

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
                    model.isActive
                      ? 'bg-emerald-400 animate-pulse'
                      : 'bg-neutral-500',
                  )}
                />
                {model.isActive ? 'Activa' : 'Inactiva'}
              </span>

              {model.isVerified && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <HiCheckBadge className="text-xs" />
                  Verificada
                </span>
              )}

              {model.isFeatured && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/20 text-primary border border-primary/40">
                  <FaStar className="text-[9px]" />
                  Destacada
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Button
                color="success"
                disabled={!!model.isVerified}
                onClick={() =>
                  NiceModal.show(VerifiedModelModal, { node: model })
                }
              >
                <HiCheckBadge className="text-base" />
                Verificar
              </Button>
              <Button
                color="success"
                disabled={!model.isVerified || !!model.isActive}
                onClick={() =>
                  NiceModal.show(ActivateModelModal, { node: model })
                }
              >
                <HiPlay className="text-base" />
                Activar
              </Button>
              <Button
                color="error"
                disabled={!model.isActive}
                onClick={() =>
                  NiceModal.show(DeactivateModelModal, { node: model })
                }
              >
                <HiStop className="text-base" />
                Desactivar
              </Button>
              <Button
                color="primary"
                disabled={!!model.isFeatured}
                onClick={() =>
                  NiceModal.show(FeaturedModelModal, { node: model })
                }
              >
                <FaStar className="text-sm" />
                Destacar
              </Button>
              <Button
                color="light"
                onClick={() =>
                  NiceModal.show(SubscriptionsModal, { subscriptions })
                }
              >
                <FiList />
                Ver suscripciones
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Formik Form */}
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form className="space-y-6">
          {/* Información básica */}
          <SectionCard title="Información básica">
            <div className="grid grid-cols-4 gap-4">
              <FormField
                name="name"
                label="Nombre"
                className="col-span-2"
              />
              <FormSelectInner
                name="rangeType"
                label="Rango"
                options={enumToOptions<ModelRangeType>(rangeTypeTranslations)}
              />
              <FormSelectInner
                name="gender"
                label="Género"
                options={enumToOptions<ModelsModelGenderChoices>(
                  getGenderTranslations(),
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormSelectInner
                name="nationality"
                label="Nacionalidad"
                options={enumToOptions<ModelsModelNationalityChoices>(
                  nationalityTranslations,
                )}
                isSearchable
              />
              <div className="space-y-1.5">
                <Text as="span" size="sm" weight="medium">
                  Ciudad
                </Text>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-sm text-neutral-300">
                  <FaCity className="text-primary shrink-0" />
                  <span>{model.city?.name ?? '—'}</span>
                </div>
              </div>
            </div>

            <FormField
              name="description"
              label="Descripción"
              as={TextArea}
              rows={4}
            />
          </SectionCard>

          {/* Medidas y físico */}
          <SectionCard title="Medidas y físico">
            <div className="grid grid-cols-4 gap-4">
              <FormField name="age" label="Edad" type="number" />
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
              <FormField name="metrics" label="Medidas" />
            </div>

            <div className="grid grid-cols-2 gap-4">
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

            <div className="flex flex-wrap gap-6">
              <ToggleSwitchField name="boobs" label="Pecho operado" />
              <ToggleSwitchField name="piercings" label="Piercings" />
              <ToggleSwitchField name="tattoos" label="Tatuajes" />
              <ToggleSwitchField name="smoker" label="Fumadora" />
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
                <p className="text-neutral-500 text-xs">
                  Fecha de expiración
                </p>
                <p
                  className={clsx(
                    'font-medium text-sm',
                    model.expirationDate ? 'text-white' : 'text-neutral-500',
                  )}
                >
                  {formatDate(model.expirationDate)}
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
              <div className="space-y-1">
                <p className="text-neutral-500 text-xs">
                  Fin fecha destacada
                </p>
                <p
                  className={clsx(
                    'font-medium text-sm',
                    model.featuredExpirationDate
                      ? 'text-white'
                      : 'text-neutral-500',
                  )}
                >
                  {formatDate(model.featuredExpirationDate)}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                color="light"
                onClick={() =>
                  NiceModal.show(SubscriptionsModal, { subscriptions })
                }
              >
                <FiList />
                Ver historial de suscripciones
              </Button>
            </div>
          </SectionCard>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit">Guardar cambios</Button>
          </div>
        </Form>
      </Formik>

      {/* Media sections */}
      <SectionCard title="Imagen de verificación">
        {model.verificationImages ? (
          <ModelImages
            images={[model.verificationImages] as ModelImageNode[]}
          />
        ) : (
          <div className="text-neutral-500 border border-dashed border-neutral-800 rounded-xl p-8 text-center text-sm">
            Sin imagen de verificación
          </div>
        )}
      </SectionCard>

      <SectionCard title="Imágenes públicas">
        <ModelImages images={(model.images?.filter(Boolean) as ModelImageNode[]) ?? []} />
      </SectionCard>

      <SectionCard title="Videos">
        <ModelVideos
          videos={(model.videos?.filter(Boolean) as ModelVideoNode[]) ?? []}
        />
      </SectionCard>
    </div>
  )
}

export default ModelForm
