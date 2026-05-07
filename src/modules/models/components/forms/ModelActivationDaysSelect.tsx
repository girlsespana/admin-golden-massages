import Select from "@/components/forms/Select";
import {ModelActivationDays} from "@types";
import {SelectOption} from "@/components/forms/Select/types";
import {FC} from "react";
import {SingleValue} from "react-select";

interface Props {
  onChange?: (selectedOption: SelectOption | null) => void
}

const ModelActivationDaysSelect: FC<Props> = ({onChange}) => {
  const options = Object.values(ModelActivationDays).map((option) => ({
    label: option === "FIFTEEN_DAYS" ? "15 días" :
           option === "SEVEN_DAYS" ? "7 días" :
           option === "THIRTY_DAYS" ? "30 días" : option,
    value: option
  }))

  const handleSelectChange = (selectedOption: SingleValue<SelectOption>) => {
    if (onChange) {
      onChange(selectedOption)
    }
  }

  return (
    <Select
      placeholder="Días de activación"
      options={options}
      isClearable={true}
      onChange={handleSelectChange}
    />
  )
}

export default ModelActivationDaysSelect;
