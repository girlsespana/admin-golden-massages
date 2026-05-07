import Select from "@/components/forms/Select";
import type { SelectOption } from "@/components/forms/Select/types";
import { useFilters } from "@hooks";
import { SingleValue } from "react-select";

const param = "isActive";

const ActiveSelectFilter = () => {
  const { get, set, remove } = useFilters();

  const options: SelectOption[] = [
    { label: "Activo", value: "true" },
    { label: "Inactivo", value: "false" },
  ];

  // ✅ read saved filter value
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
      defaultValue={defaultValue} // ✅ now defaults correctly
      placeholder="Activ@"
      options={options}
      menuPosition="fixed"
      isClearable
      onChange={handleSelectChange}
    />
  );
};

export default ActiveSelectFilter;
