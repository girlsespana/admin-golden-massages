import { useFilters } from '@hooks'
import TemporaryCitySelect from "@/components/forms/TemporaryCitySelect";

const param = 'cityId'

const CitySelectFilter = () => {
  const { set, get, remove } = useFilters()
  const defaultValue = get(param)

  return (
      <TemporaryCitySelect
          {...(defaultValue ? { defaultValue } : {})}
          onChange={(selectedOption) => selectedOption ? set(param, selectedOption?.value as string) : remove(param)}
      />
  )
}

export default CitySelectFilter