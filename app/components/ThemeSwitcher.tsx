'use client'

// ─── THEME SWITCHER ─────────────────────────────────────────────────────────
// Demo-only toggle: swaps between Warm (amber/cream) and Blue (steel/cool grey)
// by toggling the html.theme-b class.
// Persists choice in localStorage so it survives page refresh.
// Remove this component (and its usage in Navbar) before final launch.

import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [isBlue, setIsBlue] = useState(false)

  // On mount, restore saved preference
  useEffect(() => {
    const saved = localStorage.getItem('ph-theme')
    if (saved === 'blue') {
      document.documentElement.classList.add('theme-b')
      setIsBlue(true)
    }
  }, [])

  function toggle(blue: boolean) {
    if (blue) {
      document.documentElement.classList.add('theme-b')
      localStorage.setItem('ph-theme', 'blue')
    } else {
      document.documentElement.classList.remove('theme-b')
      localStorage.setItem('ph-theme', 'warm')
    }
    setIsBlue(blue)
  }

  return (
    <div className="flex items-center gap-2" title="Preview colour theme">
      {/* Warm swatch */}
      <button
        onClick={() => toggle(false)}
        aria-label="Warm colour theme"
        className={`w-4 h-4 rounded-full bg-[#B8793C] transition-all duration-200 ${
          !isBlue ? 'ring-2 ring-offset-1 ring-[#B8793C]' : 'opacity-40 hover:opacity-70'
        }`}
      />
      {/* Blue swatch */}
      <button
        onClick={() => toggle(true)}
        aria-label="Blue colour theme"
        className={`w-4 h-4 rounded-full bg-[#4a7fa5] transition-all duration-200 ${
          isBlue ? 'ring-2 ring-offset-1 ring-[#4a7fa5]' : 'opacity-40 hover:opacity-70'
        }`}
      />
    </div>
  )
}
