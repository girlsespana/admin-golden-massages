import {useFilters} from "@hooks";
import type {SelectOption} from "@/components/forms/Select/types";
import {SingleValue} from "react-select";
import Select from "@/components/forms/Select";

const param = 'isVerified'

const VerifiedFilter = () => {
  const { get, set, remove } = useFilters();

  const options: SelectOption[] = [
    {label: "Activo", value: "true"},
    {label: "Inactivo", value: "false"},
  ];

  const currentValue = get(param);
  const defaultValue = options.find((opt) => opt.value === currentValue) ?? null;

  const handleSelectChange = (selectOption: SingleValue<SelectOption>) => {
    if (selectOption) {
      set(param, selectOption.value);
    } else {
      remove(param);
    }
  };

  return (
    <Select
      defaultValue={defaultValue}
      placeholder="Verificad@"
      options={options}
      menuPosition="fixed"
      isClearable
      onChange={handleSelectChange}
    />
  );
}

export default VerifiedFilter