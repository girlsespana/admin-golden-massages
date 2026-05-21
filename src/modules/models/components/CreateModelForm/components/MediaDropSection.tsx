import type {FC} from 'react'
import {v4} from 'uuid'
import {IoClose} from 'react-icons/io5'
import {useDropzone} from 'react-dropzone'
import clsx from 'clsx'
import type {ImageFile} from '@/components/forms/types'

interface MediaDropSectionProps {
  items: ImageFile[]
  onAdd: (files: ImageFile[]) => void
  onRemove: (id: string) => void
  accept: Record<string, string[]>
  icon: React.ReactNode
  isVideo?: boolean
}

const MediaDropSection: FC<MediaDropSectionProps> = ({
  items,
  onAdd,
  onRemove,
  accept,
  icon,
  isVideo = false,
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: v4(),
      file,
      preview: URL.createObjectURL(file),
    }))
    onAdd(newFiles)
  }

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    onDrop,
    accept,
    multiple: true,
  })

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-4">
      <div
        {...getRootProps()}
        className={clsx([
          'bg-neutral-900 rounded-xl w-full aspect-[3/4] flex items-center justify-center',
          'border-2 border-dashed transition-all cursor-pointer',
          isDragReject ? 'border-red-500' : isDragActive ? 'border-primary' : 'border-neutral-700',
        ])}
      >
        <input {...getInputProps()} />
        <div className="text-center text-neutral-500 flex flex-col items-center">{icon}</div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="relative group w-full aspect-[3/4] rounded-xl overflow-hidden"
        >
          {isVideo ? (
            <video src={item.preview} className="w-full h-full object-cover" controls />
          ) : (
            <img
              src={item.preview}
              alt="preview"
              className="w-full h-full object-cover group-hover:brightness-50 duration-300"
            />
          )}
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className={clsx([
              'absolute top-1 right-1 p-1 rounded-full',
              'bg-card-dark/80 text-white text-xl',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
              'hover:text-primary',
            ])}
          >
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  )
}

export default MediaDropSection
