import { RxCaretSort } from 'react-icons/rx'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi'

interface Props {
  status?: 'asc' | 'desc' | 'none'
}

const SortingStatusIcon = ({ status = 'none' }: Props) => {
  const Icon = () => {
    switch (status) {
      case 'asc':
        return <HiSortAscending className="w-5 h-5"/>
      case 'desc':
        return <HiSortDescending className="w-5 h-5"/>
      case 'none':
        return <RxCaretSort className="w-5 h-5"/>
    }
  }

  return (
      <span className="pl-3 text-gray-400 dark:text-gray-500">
        <Icon/>
      </span>
  )
}

export default SortingStatusIcon