import Sidebar from '@/components/deals/Sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { InstantSearch, Hits, useInstantSearch, Pagination, useSortBy, SearchBox } from 'react-instantsearch'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import ProductCard from '@/components/deals/ProductCard'
import { useState } from 'react'

const { searchClient } = instantMeiliSearch(
  //'https://meilisearch.movieimpostor.site',
  'http://localhost:7700',
  //'fa97bf7b6be21c224537075120904e06d66d677d9d3a9802442a615cfb34dd22'
  '198e86bc8d48a97e7c5cf5f0367faf4388d57f82c2767c311b8f7e115b9fb9fb'
) as any

export const Route = createFileRoute('/$locale/deals/')({
  component: RouteComponent,
})

function SearchStats() {
  const { results } = useInstantSearch();
  const retailersCount = results?.facets && !Array.isArray(results.facets)
    ? Object.keys(results.facets['retailer'] || {}).length
    : 0;

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[#0e141b] dark:text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">
        {results?.nbHits || 0} results for '{results?.query || 'Diapers'}'
      </h1>
      <p className="text-[#4e7397] dark:text-slate-400 text-sm md:text-base font-normal">
        Comparing price per unit across {retailersCount} retailers
      </p>
    </div>
  )
}

function SortBySelect({ indexName }: { indexName: string }) {
  const { currentRefinement, options, refine } = useSortBy({
    items: [
      { label: 'Price per Unit: Low to High', value: `${indexName}:pricePerUnit:asc` },
      { label: 'Price per Unit: High to Low', value: `${indexName}:pricePerUnit:desc` },
    ],
  });

  return (
    <select
      className="rounded-lg border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-[#0e141b] dark:text-white focus:ring-primary"
      value={currentRefinement}
      onChange={(e) => refine(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function MobileFilterButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-[#0e141b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
    >
      <span className="material-symbols-outlined text-[20px]">tune</span>
      Filters
    </button>
  )
}

function MobileFilterDrawer({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-[#f8fafb] dark:bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#e7edf3] dark:border-slate-700">
          <h2 className="text-lg font-bold text-[#0e141b] dark:text-white">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close filters"
          >
            <span className="material-symbols-outlined text-[#0e141b] dark:text-slate-300">close</span>
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  )
}

function RouteComponent() {
  const { locale } = Route.useParams()
  const countrySuffix = locale === 'es' ? 'es' : 'us-en'
  const indexName = `offers_${countrySuffix}`
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  return (
    <InstantSearch indexName={indexName} searchClient={searchClient} routing>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 py-6'>
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 py-2 mb-4">
          <a className="text-[#4e7397] text-sm font-medium hover:underline" href="#">Home</a>
          <span className="text-[#4e7397] text-sm font-medium">/</span>
          <span className="text-[#0e141b] dark:text-white text-sm font-medium">Search Results</span>
        </div>

        {/* Header section */}
        <div className="flex flex-col gap-4 mb-6 md:mb-8">
          <SearchStats />
          
          {/* Search and Sort controls */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <MobileFilterButton onClick={() => setIsFilterDrawerOpen(true)} />
              <SearchBox
                placeholder="Search diapers..."
                classNames={{
                  root: 'relative flex-1 sm:flex-none',
                  form: 'relative',
                  input: 'w-full sm:w-64 h-10 pl-10 pr-4 rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-[#0e141b] dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary',
                  submit: 'absolute left-3 top-1/2 -translate-y-1/2 text-[#4e7397]',
                  submitIcon: 'w-4 h-4',
                  reset: 'absolute right-3 top-1/2 -translate-y-1/2 text-[#4e7397] hover:text-[#0e141b]',
                  resetIcon: 'w-4 h-4',
                  loadingIndicator: 'absolute right-3 top-1/2 -translate-y-1/2',
                }}
              />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-[#4e7397] hidden sm:block">Sort by:</p>
              <SortBySelect indexName={indexName} />
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <Sidebar />
          </aside>
          
          {/* Mobile Filter Drawer */}
          <MobileFilterDrawer 
            isOpen={isFilterDrawerOpen} 
            onClose={() => setIsFilterDrawerOpen(false)}
          >
            <Sidebar />
          </MobileFilterDrawer>

          {/* Results Grid */}
          <div className="flex-1">
            <Hits hitComponent={({ hit }) => <ProductCard hit={hit as any} />}
              classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'
              }}
            />
            <div className="mt-8 md:mt-12 flex justify-center">
              <Pagination
                classNames={{
                  root: 'flex justify-center',
                  list: 'flex gap-1 md:gap-2',
                  item: 'flex',
                  link: 'w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-xs md:text-sm font-medium text-[#0e141b] dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700',
                  selectedItem: '[&>a]:bg-primary [&>a]:text-white [&>a]:border-primary',
                  disabledItem: 'opacity-50 cursor-not-allowed pointer-events-none'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}