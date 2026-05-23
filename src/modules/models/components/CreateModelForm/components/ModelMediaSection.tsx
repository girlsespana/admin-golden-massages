import SectionCard from './SectionCard'
import MediaDropSection from './MediaDropSection'
import {BiImageAdd} from 'react-icons/bi'
import {RiVideoAddFill} from 'react-icons/ri'
import {ErrorMessage} from 'formik'
import type {ImageFile} from '@/components/forms/types'
import {FC} from "react";

interface ModelMediaSectionProps {
  images: ImageFile[]
  videos: ImageFile[]
  onAddImage: (files: ImageFile[]) => void
  onRemoveImage: (id: string) => void
  onAddVideo: (files: ImageFile[]) => void
  onRemoveVideo: (id: string) => void
  showImageError?: boolean
}

const ModelMediaSection: FC<ModelMediaSectionProps> = ({
  images,
  videos,
  onAddImage,
  onRemoveImage,
  onAddVideo,
  onRemoveVideo,
  showImageError = false,
}) => (
  <>
    <SectionCard title="Imágenes">
      <MediaDropSection
        items={images}
        onAdd={onAddImage}
        onRemove={onRemoveImage}
        accept={{'image/*': []}}
        icon={<BiImageAdd size={40} />}
      />
      {showImageError && (
        <div className="mt-2">
          <ErrorMessage name="images">
            {(msg) => <span className="text-xs text-red-400">{msg}</span>}
          </ErrorMessage>
        </div>
      )}
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
