'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem('theme') || 'light'
    root.classList.toggle('dark', savedTheme === 'dark')
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className=" px-2 py-2 rounded-full bg-zinc-800 text-white dark:bg-white dark:text-black transition">
      {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  )
}
