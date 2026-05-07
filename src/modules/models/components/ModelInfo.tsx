import type {FC} from 'react'
import {ImWoman} from 'react-icons/im'
import type {IconType} from 'react-icons'
import {GiCigarette} from 'react-icons/gi'
import {BiSolidParty} from 'react-icons/bi'
import {LuPartyPopper} from 'react-icons/lu'
import {Transition} from '@headlessui/react'
import {FaWeightScale} from 'react-icons/fa6'
import {IoClose, IoColorWand} from 'react-icons/io5'
import {MdDraw, MdLanguage, MdOutlineHeight, MdPermContactCalendar} from 'react-icons/md'
import {FaCheck, FaCircle, FaCity, FaEye, FaMapMarkedAlt, FaRing, FaTransgenderAlt} from 'react-icons/fa'
import {ModelLanguages, ModelNode, ModelsModelGenderChoices, ModelsModelHairColorChoices,} from '@types'
import {getGenderTranslations} from "@/modules/models/constants/genderTranslations";
import {getHairColorTranslations} from "@/modules/models/constants/hairColorTranslations";
import {getLanguageTranslations} from "@/modules/models/constants/languageTranslations";
import {getEyesColorTranslations} from "@/modules/models/constants/eyesColorTranslations";
import {getServicesTranslations} from "@/modules/models/constants/servicesTranslations";

interface Props {
  model: ModelNode
  showStatuses?: boolean
}

const maxDescriptionLength = 250

const DetailItem = ({icon: Icon, title, value}: {
  icon: IconType,
  title: string,
  value: string | number | undefined
}) => (
  <li className="space-x-2">
      <span className="font-bold  inline-flex items-center gap-1">
        <Icon/>
        {title}:
      </span>
    <span>
        {value}
      </span>
  </li>
)

const IndicatorBadge = ({text, isActive}: { text: string, isActive: boolean }) => (
  <span className="flex items-center gap-1 font-medium  p-1 rounded-lg">
      {
        isActive ?
          <span className="text-green-600"><FaCheck/></span> :
          <span className="text-red-600"><IoClose/></span>
      }
    <span className="text-sm">{text}</span>
    </span>
)

const ModelInfo: FC<Props> = ({model, showStatuses = false}) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <Transition
        show
        appear
        enter="transition transform duration-500"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition transform duration-500"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-10"
      >
        <div className="md:col-span-4 md:p-6 flex flex-col">
          <div className="flex items-baseline">
            <h1 className="text-3xl font-bold ">
              {model?.name}
            </h1>
            <div>({model.rangeType})</div>
          </div>
          {
            showStatuses &&
            <div className="mt-4 flex items-center gap-2">
              <IndicatorBadge
                isActive={model.isVerified}
                text={model.isVerified ? "Verificad@" : "Sin verificar"}
              />
              <IndicatorBadge
                isActive={model.isActive}
                text={model.isActive ? "Activ@" : "No activ@"}
              />
              <IndicatorBadge
                isActive={model.isFeatured}
                text={model.isFeatured ? "Destacada" : "No Destacada"}
              />
            </div>
          }
          <ul className="mt-8 space-y-2 columns-3">
            <DetailItem
              icon={FaMapMarkedAlt}
              title="Nacionalidad"
              value={model?.nationality}
            />
            <DetailItem
              icon={FaTransgenderAlt}
              title="Genero"
              value={getGenderTranslations()[model?.gender as ModelsModelGenderChoices]}
            />
            <DetailItem
              icon={MdPermContactCalendar}
              title="Edad"
              value={model?.age}
            />
            <DetailItem
              icon={FaWeightScale}
              title="Peso"
              value={`${model?.weight} kg`}
            />
            <DetailItem
              icon={MdOutlineHeight}
              title="Altura"
              value={`${model?.height} cm`}
            />
            <DetailItem
              icon={ImWoman}
              title="Medidas"
              value={`${model?.metrics}`}
            />
            <DetailItem
              icon={FaCity}
              title="Ciudad"
              value={model?.city.name}
            />
            <DetailItem
              icon={MdLanguage}
              title={"Lenguage"}
              value={model?.languages?.map(language => getLanguageTranslations()[language as ModelLanguages]).join(', ') || 'N/A'}
            />
            <DetailItem
              icon={FaEye}
              title="Color de ojos"
              value={getEyesColorTranslations()[model?.eyesColor]}
            />
            <DetailItem
              icon={IoColorWand}
              title="Color de pelo"
              value={getHairColorTranslations()[model?.hairColor as ModelsModelHairColorChoices]}
            />
            <DetailItem
              icon={FaCircle}
              title="Pecho Operado"
              value={model?.boobs ? "Si" : "No"}
            />
            <DetailItem
              icon={FaRing}
              title="Piercings"
              value={model?.piercings ? "Si" : "No"}
            />
            <DetailItem
              icon={GiCigarette}
              title="Fumador@"
              value={model?.smoker ? "Si" : "No"}
            />
            <DetailItem
              icon={MdDraw}
              title="Tatuajes"
              value={model?.tattoos ? "Si" : "No"}
            />
            <DetailItem
              icon={BiSolidParty}
              title="Fiesta"
              value={model?.party ? "si" : "no"}
            />
            <DetailItem
              icon={LuPartyPopper}
              title="Servicios"
              value={model?.services?.map(service => getServicesTranslations()[service!]).join(', ') || 'N/A'}
            />
          </ul>
          <div className="mt-8 inline">
              <span className="inline ">
                {model.description?.substring(0, maxDescriptionLength)}
              </span>
            {
              (model?.description?.length ?? 0) > maxDescriptionLength
            }
          </div>
        </div>
      </Transition>
    </section>
  )
}

export default ModelInfo