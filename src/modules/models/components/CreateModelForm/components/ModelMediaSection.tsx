import SectionCard from './SectionCard'
import MediaDropSection from './MediaDropSection'
import {BiImageAdd} from 'react-icons/bi'
import {RiVideoAddFill} from 'react-icons/ri'
import type {ImageFile} from '@/components/forms/types'
import {FC} from "react";

interface ModelMediaSectionProps {
  images: ImageFile[]
  videos: ImageFile[]
  onAddImage: (file: ImageFile) => void
  onRemoveImage: (id: string) => void
  onAddVideo: (file: ImageFile) => void
  onRemoveVideo: (id: string) => void
}

const ModelMediaSection: FC<ModelMediaSectionProps> = ({
  images,
  videos,
  onAddImage,
  onRemoveImage,
  onAddVideo,
  onRemoveVideo,
}) => (
  <>
    <SectionCard title="Imágenes públicas">
      <MediaDropSection
        items={images}
        onAdd={onAddImage}
        onRemove={onRemoveImage}
        accept={{'image/*': []}}
        icon={<BiImageAdd size={40} />}
      />
    </SectionCard>

    <SectionCard title="Videos">
      <MediaDropSection
        items={videos}
        onAdd={onAddVideo}
        onRemove={onRemoveVideo}
        accept={{'video/*': []}}
        icon={<RiVideoAddFill size={40} />}
        isVideo
      />
    </SectionCard>
  </>
)

export default ModelMediaSection
