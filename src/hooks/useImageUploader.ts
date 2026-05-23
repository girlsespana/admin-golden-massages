import { useState } from 'react'
import { useAuth } from '@auth/hooks'
import { ImageFile } from '@/components/forms/types'

export interface UploadResult {
  id: string
  url: string | null
  error: boolean
}

interface UseImageUploaderResult {
  uploadImage: (image: ImageFile) => Promise<UploadResult>
  loading: boolean
}

const useImageUploader = (): UseImageUploaderResult => {
  const [loading, setLoading] = useState<boolean>(false)
  const { authToken } = useAuth()

  const uploadImage = async (image: ImageFile): Promise<UploadResult> => {
    if (!image.file) {
      console.error('No file provided for upload:', image)
      return { id: image.id, url: null, error: false }
    }

    setLoading(true)
    const url = import.meta.env.VITE_IMAGE_UPLOADER_URL ?? ''

    try {
      const formData = new FormData()
      formData.append('image', image.file)

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: authToken as string,
        },
      })

      if (!response.ok) throw new Error('Failed to upload image')

      const data = await response.json()
      return { id: image.id, url: data.data, error: false }
    } catch (error) {
      console.error('Image upload failed:', error)
      return { id: image.id, url: null, error: true }
    } finally {
      setLoading(false)
    }
  }

  return { uploadImage, loading }
}

export default useImageUploader
