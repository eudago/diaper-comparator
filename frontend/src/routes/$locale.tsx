import { createFileRoute, Outlet } from '@tanstack/react-router'
import { assertIsLocale, setLocale } from '@/paraglide/runtime'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    try {
      const locale = assertIsLocale(params.locale)
      setLocale(locale, { reload: false })
    } catch (e) {
      // If the locale is invalid, we might want to redirect or show 404
      // For now, let's just let it fall through or handled by TanStack Router
    }
  },
  component: () => <Outlet />,
})
