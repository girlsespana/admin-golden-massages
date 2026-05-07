import type {FC} from 'react'

interface DatesFieldProps {
  date?: string | null
  label?: string | null
}

const DatesField: FC<DatesFieldProps> = ({
                                           label,
                                           date,
                                         }) => {
  const formatDate = (date?: string | null) =>
    date ? date.split(/[T ]/)[0] : '-'

  return (
    <div className="text-sm flex justify-evenly">
      <div key={label} className="text-center">
        <div className="font-medium">{label}:</div>
        <div>{formatDate(date)}</div>
      </div>
    </div>
  )
}

export default DatesField
