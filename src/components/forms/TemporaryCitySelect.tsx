// TODO delete this component in the future
import type {FC} from 'react'
import type {SingleValue} from 'react-select'
import type {SelectOption} from '@/components/forms/Select/types'
import Select from "@/components/forms/Select";

interface Props {
    defaultValue?: string
    // TODO investigate how to fix this
    menuPosition?: 'fixed' | 'absolute'
    onChange?: (selectedOption: SelectOption | null) => void
}

const options: SelectOption[] = [
    {label: 'Madrid', value: 'Q2l0eU5vZGU6NDIz'},
    {label: 'Barcelona', value: 'Q2l0eU5vZGU6NTA5'},
    {label: 'Valencia', value: 'Q2l0eU5vZGU6MTI='},

    {label: 'Las Palmas de Gran Canaria', value: 'Q2l0eU5vZGU6MTQy'},
    {label: 'Maspalomas (Canaria)', value: 'Q2l0eU5vZGU6MTQy'},
    {label: 'Telde (Canaria)', value: 'Q2l0eU5vZGU6Mjg='},
    {label: 'Santa Lucía (Canaria)', value: 'Q2l0eU5vZGU6NDE='},

    {label: 'Málaga', value: 'Q2l0eU5vZGU6MTIz'},
    {label: 'Zaragoza', value: 'Q2l0eU5vZGU6Mjg5'},
    {label: 'Valladolid', value: 'Q2l0eU5vZGU6MzA4'},
    {label: 'Bilbao', value: 'Q2l0eU5vZGU6NTAy'},
    {label: 'Alicante', value: 'Q2l0eU5vZGU6MjYz'},
    {label: 'Córdoba', value: 'Q2l0eU5vZGU6MTk1'},
    {label: 'Granada', value: 'Q2l0eU5vZGU6MTcz'},
    {label: 'A Coruña', value: 'Q2l0eU5vZGU6NDM5'},
    {label: 'Murcia', value: 'Q2l0eU5vZGU6OTY='},
    {label: 'Santander', value: 'Q2l0eU5vZGU6MzM5'},
    {label: 'Adeje (Tenerife)', value: 'Q2l0eU5vZGU6Mjg2'},
    {label: 'Santa Cruz de Tenerife', value: 'Q2l0eU5vZGU6NDQ='},
    {label: 'Oviedo', value: 'Q2l0eU5vZGU6Mzky'},
    {label: 'Gijón', value: 'Q2l0eU5vZGU6NDUx'},

    {label: 'Ibiza', value: 'Q2l0eU5vZGU6MTYz'},
    {label: 'Sant Antoni de Portmany', value: 'Q2l0eU5vZGU6NjA='},
    {label: 'Sant Josep de sa Talaia', value: 'Q2l0eU5vZGU6NTQ1'},
    {label: 'Santa Eulària des Riu', value: 'Q2l0eU5vZGU6NDM='},
]

const TemporaryCitySelect: FC<Props> = ({defaultValue, menuPosition = 'fixed', onChange}) => {
    const defaultValueFounded = options.find(option => option.value === defaultValue)

    const handleSelectChange = (selectedOption: SingleValue<SelectOption>) => {
        if (onChange) {
            onChange(selectedOption)
        }
    }

    return (
        <Select
            placeholder="Ciudad"
            options={options}
            // TODO investigate how to fix this
            menuPosition={menuPosition}
            isClearable={true}
            onChange={handleSelectChange}
            {...(defaultValueFounded ? {defaultValue: defaultValueFounded} : {})}
        />
    )
}

export default TemporaryCitySelect