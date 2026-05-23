import { useState } from 'react'
import { useAuth } from '@auth/hooks'
import { ImageFile } from '@/components/forms/types'
import { UploadResult } from './useImageUploader'

interface UseVideoUploaderResult {
  uploadVideo: (video: ImageFile) => Promise<UploadResult>
  loading: boolean
}

const useVideoUploader = (): UseVideoUploaderResult => {
  const [loading, setLoading] = useState<boolean>(false)
  const { authToken } = useAuth()

  const uploadVideo = async (video: ImageFile): Promise<UploadResult> => {
    if (!video.file) {
      console.error('No file provided for upload:', video)
      return { id: video.id, url: null, error: false }
    }

    setLoading(true)
    const url = import.meta.env.VITE_IMAGE_UPLOADER_URL ?? ''

    try {
      const formData = new FormData()
      // Use original file name to preserve extension
      formData.append('image', video.file, video.file.name)

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: authToken as string,
        },
      })

      if (!response.ok) throw new Error('Failed to upload video')

      const data = await response.json()
      return { id: video.id, url: data.data, error: false }
    } catch (error) {
      console.error('Video upload failed:', error)
      return { id: video.id, url: null, error: true }
    } finally {
      setLoading(false)
    }
  }

  return { uploadVideo, loading }
}

export default useVideoUploader