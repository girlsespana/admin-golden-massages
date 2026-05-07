import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import { ModelNode } from '@types'
import ModelQuery from '@/modules/models/queries/ModelQuery'
import ModelForm from '@/modules/models/components/ModelForm'

const ModelPage = () => {
  const { modelId } = useParams()

  const { loading, error, data } = useQuery(ModelQuery, {
    variables: { id: modelId as string },
  })

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="bg-card-dark rounded-2xl border border-white/[0.06] p-8 text-center space-y-2">
          <p className="text-red-400 font-medium">Error al cargar el modelo</p>
          <p className="text-neutral-500 text-sm">{error.message}</p>
        </div>
      </div>
    )
  }

  return <ModelForm model={data!.model as ModelNode} />
}

export default ModelPage
