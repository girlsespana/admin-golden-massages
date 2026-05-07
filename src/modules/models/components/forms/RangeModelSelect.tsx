import Select from "@/components/forms/Select";
import {ModelRangeType} from "@types";
import {SelectOption} from "@/components/forms/Select/types";
import {FC} from "react";
import {SingleValue} from "react-select";

interface Props {
  onChange?: (selectedOption: SelectOption | null) => void
}

const RangeModelSelect: FC<Props>  = ({onChange}) => {
  const options = Object.values(ModelRangeType).map((option) => ({
    label: option,
    value: option
  }))

  const handleSelectChange = (selectedOption: SingleValue<SelectOption>) => {
    if (onChange) {
      onChange(selectedOption)
    }
  }

  return (
    <Select
      placeholder="Rango"
      options={options}
      isClearable={true}
      onChange={handleSelectChange}
    />
  )
}

export default RangeModelSelect;