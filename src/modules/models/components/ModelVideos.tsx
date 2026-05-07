import type {FC} from 'react'
import type {ModelVideoNode} from '@/gql/graphql'

interface Props {
    videos: ModelVideoNode[]
}


const ModelVideos: FC<Props> = ({videos}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                videos.map((item, index) => (
                        <video key={index} controls className="w-full rounded-lg">
                            <source src={item.videoUrl as string} type="video/mp4"/>
                        </video>
                    )
                )
            }
        </div>

    )
}

export default ModelVideos