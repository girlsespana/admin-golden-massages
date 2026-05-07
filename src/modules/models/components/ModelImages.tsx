import type { FC } from 'react'
import type { ModelImageNode } from '@/gql/graphql'
import Gallery from "@/components/dialogs/Gallery";

interface Props {
  images: ModelImageNode[]
}


const ModelImages: FC<Props> = ({ images }) => {
  return (
      <Gallery
          cols={3}
          items={
            images.map(image => ({ src: image.imageUrl as string, type: 'image' }))
          }
      />
  )
}

export default ModelImages