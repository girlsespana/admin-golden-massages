import { useState } from 'react'
import { useAuth } from '@auth/hooks'
import { ImageFile } from '@/components/forms/types'

interface UseImageUploaderResult {
  uploadImage: (image: ImageFile) => Promise<{ id: string; url: string | null }>
  loading: boolean
}

const useImageUploader = (): UseImageUploaderResult => {
  const [loading, setLoading] = useState<boolean>(false)
  const { authToken } = useAuth()

  const uploadImage = async (image: ImageFile): Promise<{ id: string; url: string | null }> => {
    if (!image.file) {
      console.error('No file provided for upload:', image)
      return { id: image.id, url: null }
    }

    setLoading(true)
    const url = import.meta.env.VITE_IMAGE_UPLOADER_URL ?? ''

    try {
      const formData = new FormData()
      formData.append('image', image.file, `${image.id}.jpg`)

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: authToken as string,
        },
      })

      if (!response.ok) throw new Error('Failed to upload image')

      const data = await response.json()
      return { id: image.id, url: data.data }
    } catch (error) {
      console.error('Image upload failed:', error)
      return { id: image.id, url: null }
    } finally {
      setLoading(false)
    }
  }

  return { uploadImage, loading }
}

export default useImageUploader
