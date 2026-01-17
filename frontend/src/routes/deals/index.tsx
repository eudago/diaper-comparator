import Sidebar from '@/components/deals/Sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='max-w-[1440px] mx-auto px-4 md:px-10 py-6'>
    <div className="flex flex-wrap gap-2 py-2 mb-4">
      <a
        className="text-[#4e7397] text-sm font-medium hover:underline"
        href="#"
      >
        Home
      </a>
      <span className="text-[#4e7397] text-sm font-medium">/</span>
      <span className="text-[#0e141b] dark:text-white text-sm font-medium">
        Search Results
      </span>
    </div>

    <div
      className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8"
    >
      <div className="flex flex-col gap-1">
        <h1
          className="text-[#0e141b] dark:text-white text-3xl font-black leading-tight tracking-tight"
        >
          124 results for 'Size 3 Diapers'
        </h1>
        <p
          className="text-[#4e7397] dark:text-slate-400 text-base font-normal"
        >
          Comparing price per unit across 12 retailers
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-[#4e7397]">Sort by:</p>
        <select
          className="rounded-lg border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-[#0e141b] dark:text-white focus:ring-primary"
        >
          <option>Price per Unit: Low to High</option>
          <option>Price per Unit: High to Low</option>
          <option>Top Rated</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
    </div>

    <Sidebar />
  </div>
}
