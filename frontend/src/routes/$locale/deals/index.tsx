import Sidebar from '@/components/deals/Sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { InstantSearch, Hits, useInstantSearch, Pagination, useSortBy } from 'react-instantsearch'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import ProductCard from '@/components/deals/ProductCard'

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
      <h1 className="text-[#0e141b] dark:text-white text-3xl font-black leading-tight tracking-tight">
        {results?.nbHits || 0} results for '{results?.query || 'Diapers'}'
      </h1>
      <p className="text-[#4e7397] dark:text-slate-400 text-base font-normal">
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

function RouteComponent() {
  const { locale } = Route.useParams()
  const countrySuffix = locale === 'es' ? 'es' : 'us-en'
  const indexName = `offers_${countrySuffix}`

  return (
    <InstantSearch indexName={indexName} searchClient={searchClient} routing>
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
            <SortBySelect indexName={indexName} />
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
