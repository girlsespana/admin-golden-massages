import { useEffect, useRef } from 'react'

interface Props {
  onIntersect: () => void
}

const InfiniteScroll = ({ onIntersect }: Props) => {
  const observerTarget = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting)
        onIntersect()
    })

    if (observerTarget.current)
      observer.observe(observerTarget.current as Element)

    return () => {
      if (observerTarget?.current)
        observer.unobserve(observerTarget.current as Element)
    }
  }, [onIntersect])

  return <div ref={observerTarget}/>
}

export default InfiniteScroll
