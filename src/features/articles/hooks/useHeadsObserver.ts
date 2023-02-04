import { useEffect, useRef, useState } from 'react'

export const useHeadsObserver = () => {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0% 0% -90% 0px',
      threshold: 0,
    })

    const elements = document.querySelectorAll('h2, h3')
    elements.forEach(elem => observer.current?.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return { activeId }
}
