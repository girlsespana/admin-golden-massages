import type { FC } from 'react'
import { HiRefresh } from 'react-icons/hi'
import { useApolloClient } from '@apollo/client'
import {Button} from "@components";

const TableRefetchBtn: FC = () => {
  const client = useApolloClient()

  const handleClick = async () => {
    try {
      await client.refetchQueries({
        include: ['Models'], // Reemplázalos con los nombres de tus queries
      })
    } catch (error) {
      // TODO log this error to sentry
      console.error('Failed to reset store', error)
    }
  }

  return (
      <div>
        <Button
            color="light"
            onClick={handleClick}>
          <HiRefresh className="w-5 h-5"/>
        </Button>
      </div>
  )
}

export default TableRefetchBtn