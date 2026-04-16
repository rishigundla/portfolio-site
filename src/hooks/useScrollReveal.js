import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [threshold])

  return [ref, isVisible]
}

export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollReveal(0.3)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startOnView || !isVisible || hasAnimated.current) return
    hasAnimated.current = true

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration, startOnView])

  return [ref, count]
}
