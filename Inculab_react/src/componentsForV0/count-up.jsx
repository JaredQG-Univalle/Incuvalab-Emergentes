"use client"

import { useState, useEffect } from "react"

export default function CountUp({ end, duration = 2, decimals = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const startAnimation = (timestamp) => {
      startTime = timestamp
      updateCount(timestamp)
    }

    const updateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration])

  return <>{count.toFixed(decimals)}</>
}
