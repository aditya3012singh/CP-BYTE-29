import { useState, useEffect, useRef } from 'react'

export function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}

export function useAnimatedCounter(target, duration = 1400, delay = 0) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setStarted(true)
      let start = 0
      const step = target / (duration / 16)
      const id = setInterval(() => {
        start += step
        if (start >= target) { setVal(target); clearInterval(id) }
        else setVal(Math.floor(start))
      }, 16)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [target, duration, delay])
  return val
}

export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export function useTypewriter(text, speed = 60, delay = 500) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const t = setTimeout(() => {
      const id = setInterval(() => {
        if (i >= text.length) { clearInterval(id); return }
        setDisplayed(text.slice(0, i + 1))
        i++
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [text, speed, delay])
  return displayed
}
