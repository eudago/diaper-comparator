import Sidebar from '@/components/deals/Sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { InstantSearch, Hits, useInstantSearch, Pagination } from 'react-instantsearch'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import ProductCard from '@/components/deals/ProductCard'

const { searchClient } = instantMeiliSearch(
  'https://meilisearch.movieimpostor.site',
  'fa97bf7b6be21c224537075120904e06d66d677d9d3a9802442a615cfb34dd22'
) as any

export const Route = createFileRoute('/deals/')({
  component: RouteComponent,
})

function SearchStats() {
  const { results } = useInstantSearch();
  const retailersCount = results?.facets && !Array.isArray(results.facets)
    ? Object.keys(results.facets['retailer'] || {}).length
    : 0;

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[#0e141b] dark:text-white text-3xl font-black leading-tight tracking-tight">
        {results?.nbHits || 0} results for '{results?.query || 'Diapers'}'
      </h1>
      <p className="text-[#4e7397] dark:text-slate-400 text-base font-normal">
        Comparing price per unit across {retailersCount} retailers
      </p>
    </div>
  )
}

function RouteComponent() {
  return (
    <InstantSearch indexName="offers" searchClient={searchClient}>
      <div className='max-w-[1440px] mx-auto px-4 md:px-10 py-6'>
        <div className="flex flex-wrap gap-2 py-2 mb-4">
          <a className="text-[#4e7397] text-sm font-medium hover:underline" href="#">Home</a>
          <span className="text-[#4e7397] text-sm font-medium">/</span>
          <span className="text-[#0e141b] dark:text-white text-sm font-medium">Search Results</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <SearchStats />
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-[#4e7397]">Sort by:</p>
            <select className="rounded-lg border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-[#0e141b] dark:text-white focus:ring-primary">
              <option>Price per Unit: Low to High</option>
              <option>Price per Unit: High to Low</option>
              <option>Top Rated</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <div className="flex-1">
            <Hits hitComponent={({ hit }) => <ProductCard hit={hit as any} />}
              classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
              }}
            />
            <div className="mt-12 flex justify-center">
              <Pagination
                classNames={{
                  root: 'flex justify-center',
                  list: 'flex gap-2',
                  item: 'flex',
                  link: 'w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-[#0e141b] dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700',
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
