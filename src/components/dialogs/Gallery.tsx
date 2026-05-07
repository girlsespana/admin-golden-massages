import type {FC} from 'react'
import {clsx} from 'clsx'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lfFullscreen from 'lightgallery/plugins/autoplay'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-fullscreen.css'


interface Item {
    src: string,
    type: 'image' | 'video'
}

interface Props {
    cols?: number
    items: Item[]
}


const Gallery: FC<Props> = ({cols = 1, items}) => {
    return (
        <LightGallery
            speed={500}
            download={false}
            mode="lg-fade"
            allowMediaOverlap={true}
            plugins={[lfFullscreen, lgThumbnail, lgZoom]}
            elementClassNames={clsx([
                'gap-x-4 space-y-4',
                cols === 1 && 'columns-1',
                cols === 2 && 'columns-1 md:columns-2',
                cols === 3 && 'columns-2 md:columns-3',
                cols === 4 && 'columns-3 md:columns-4',
            ])}
        >
            {
                items.map((item, index) => (
                    <a
                        key={index}
                        href={item.src}
                        data-src={item.src}
                        className="block"
                    >
                        {item.type === 'image' ? (
                            <img src={item.src} alt={`Media ${index}`} className="w-full rounded-lg duration-300"/>
                        ) : (
                            <video controls className="w-full rounded-lg">
                                <source src={item.src} type="video/mp4"/>
                            </video>
                        )}
                    </a>
                ))
            }
        </LightGallery>

    )
}

export default Gallery
