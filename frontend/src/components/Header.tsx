import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getLocale } from '@/paraglide/runtime'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // On mount, check if dark mode is preferred or previously saved
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 px-6 py-4 lg:px-40 bg-white dark:bg-background-dark sticky top-0 z-50">
        <Link
          to="/$locale"
          params={{ locale: getLocale() }}
          className="flex items-center gap-3 text-primary"
        >
          <div className="size-8">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 className="text-[#0e141b] dark:text-white text-xl font-bold leading-tight tracking-tight">
            DiaperCompare
          </h2>
        </Link>
        <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/$locale/compare"
              params={{ locale: getLocale() }}
              className="text-[#0e141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            >
              Compare
            </Link>
            <Link
              to="/$locale/deals"
              params={{ locale: getLocale() }}
              className="text-[#0e141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            >
              Deals
            </Link>
            <Link
              to="/$locale/brands"
              params={{ locale: getLocale() }}
              className="text-[#0e141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            >
              Brands
            </Link>
            <Link
              to="/$locale/buying-guide"
              params={{ locale: getLocale() }}
              className="text-[#0e141b] dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            >
              Buying Guide
            </Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-[#0e141b] dark:text-slate-300">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[#0e141b] dark:text-slate-300">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-[65px] right-0 h-[calc(100vh-65px)] w-64 bg-white dark:bg-background-dark border-l border-[#e7edf3] dark:border-slate-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          <Link
            to="/$locale/compare"
            params={{ locale: getLocale() }}
            onClick={closeMobileMenu}
            className="text-[#0e141b] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
          >
            Compare
          </Link>
          <Link
            to="/$locale/deals"
            params={{ locale: getLocale() }}
            onClick={closeMobileMenu}
            className="text-[#0e141b] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
          >
            Deals
          </Link>
          <Link
            to="/$locale/brands"
            params={{ locale: getLocale() }}
            onClick={closeMobileMenu}
            className="text-[#0e141b] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
          >
            Brands
          </Link>
          <Link
            to="/$locale/buying-guide"
            params={{ locale: getLocale() }}
            onClick={closeMobileMenu}
            className="text-[#0e141b] dark:text-slate-300 text-base font-medium hover:text-primary transition-colors py-2"
          >
            Buying Guide
          </Link>
        </div>
      </nav>
    </>
  )
}