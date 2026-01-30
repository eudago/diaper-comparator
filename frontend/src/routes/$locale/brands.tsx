import { createFileRoute, Link } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'

export const Route = createFileRoute('/$locale/brands')({
  component: BrandsPage,
})

interface Brand {
  id: string
  name: string
  logo: string
  description: string
  country: string
  founded: number
  productCount: number
  rating: number
  features: string[]
  backgroundColor: string
}

const mockBrands: Brand[] = [
  {
    id: 'pampers',
    name: 'Pampers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Pampers_logo.svg/200px-Pampers_logo.svg.png',
    description: 'One of the world\'s leading diaper brands, known for superior dryness and comfort.',
    country: 'USA',
    founded: 1961,
    productCount: 45,
    rating: 4.7,
    features: ['Wetness Indicator', 'Air Channels', 'Up to 12h Protection'],
    backgroundColor: 'bg-sky-50 dark:bg-sky-950',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Huggies_logo.svg/200px-Huggies_logo.svg.png',
    description: 'Trusted by parents worldwide for leak protection and a snug, comfortable fit.',
    country: 'USA',
    founded: 1978,
    productCount: 38,
    rating: 4.6,
    features: ['Leak Lock System', 'Pocketed Waistband', 'Hypoallergenic'],
    backgroundColor: 'bg-red-50 dark:bg-red-950',
  },
  {
    id: 'luvs',
    name: 'Luvs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Luvs_Logo.svg/200px-Luvs_Logo.svg.png',
    description: 'Affordable quality diapers with reliable leak protection for everyday use.',
    country: 'USA',
    founded: 1976,
    productCount: 12,
    rating: 4.3,
    features: ['Triple Leakguards', 'Money Back Guarantee', 'Night Lock Plus'],
    backgroundColor: 'bg-purple-50 dark:bg-purple-950',
  },
  {
    id: 'honest',
    name: 'The Honest Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_Honest_Company_logo.svg/200px-The_Honest_Company_logo.svg.png',
    description: 'Clean, sustainable diapers made with plant-based materials and cute designs.',
    country: 'USA',
    founded: 2011,
    productCount: 20,
    rating: 4.5,
    features: ['Plant-Based Materials', 'Cute Designs', 'Hypoallergenic'],
    backgroundColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    id: 'seventh-generation',
    name: 'Seventh Generation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Seventh_Generation_%28brand%29_logo.svg/200px-Seventh_Generation_%28brand%29_logo.svg.png',
    description: 'Eco-conscious diapers free from chlorine, lotions, and fragrances.',
    country: 'USA',
    founded: 1988,
    productCount: 15,
    rating: 4.4,
    features: ['FSC Certified', 'Chlorine Free', 'No Fragrances'],
    backgroundColor: 'bg-green-50 dark:bg-green-950',
  },
  {
    id: 'bambo-nature',
    name: 'Bambo Nature',
    logo: 'https://www.bambo-nature.com/wp-content/uploads/bambo-nature-logo.png',
    description: 'Premium eco-friendly diapers from Denmark with Nordic Swan certification.',
    country: 'Denmark',
    founded: 1980,
    productCount: 18,
    rating: 4.8,
    features: ['Nordic Swan Certified', 'Dermatologically Tested', 'Biodegradable'],
    backgroundColor: 'bg-teal-50 dark:bg-teal-950',
  },
  {
    id: 'dodot',
    name: 'Dodot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Dodot_Logo.png',
    description: 'Leading diaper brand in Spain and Portugal, part of the P&G family.',
    country: 'Spain',
    founded: 1983,
    productCount: 25,
    rating: 4.6,
    features: ['Soft Touch', 'Anti-leak Barriers', 'Breathable'],
    backgroundColor: 'bg-blue-50 dark:bg-blue-950',
  },
  {
    id: 'chelino',
    name: 'Chelino',
    logo: 'https://www.chelino.es/wp-content/uploads/2020/01/logo-chelino.png',
    description: 'Spanish brand offering quality diapers at competitive prices.',
    country: 'Spain',
    founded: 1969,
    productCount: 10,
    rating: 4.2,
    features: ['Extra Dry', 'Elastic Waistband', 'Affordable'],
    backgroundColor: 'bg-orange-50 dark:bg-orange-950',
  },
]

function BrandsPage() {
  const locale = getLocale()

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div className="px-6 lg:px-40 py-12 lg:py-16 bg-gradient-to-br from-baby-blue via-white to-mint dark:from-slate-900 dark:via-background-dark dark:to-slate-900">
        <div className="max-w-[960px] mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span>
            {m.brands_badge()}
          </div>
          <h1 className="text-[#0e141b] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
            {m.brands_title()}
          </h1>
          <p className="text-[#4e7397] dark:text-slate-400 text-lg lg:text-xl font-normal max-w-2xl mx-auto">
            {m.brands_subtitle()}
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="px-6 lg:px-40 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-8 px-2">
            <div>
              <h2 className="text-[#0e141b] dark:text-white text-2xl font-bold tracking-tight">
                {m.brands_all_brands()}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {m.brands_count({ count: mockBrands.length })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockBrands.map((brand) => (
              <Link
                key={brand.id}
                to="/$locale/deals"
                params={{ locale }}
                search={{ query: brand.name }}
                className="group"
              >
                <div className={`${brand.backgroundColor} rounded-2xl p-6 h-full flex flex-col transition-all group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer`}>
                  {/* Brand Logo */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 mb-4 h-24 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-16 max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${brand.name}&size=128&background=random`
                      }}
                    />
                  </div>

                  {/* Brand Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[#0e141b] dark:text-white text-lg font-bold">
                        {brand.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="text-sm font-semibold">{brand.rating}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {brand.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {brand.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-[#0e141b] dark:text-white">{brand.productCount}</span> {m.brands_products()}
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:underline">
                      {m.brands_view_deals()}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 lg:px-40 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[#0e141b] dark:text-white text-2xl lg:text-3xl font-bold mb-4">
            {m.brands_cta_title()}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {m.brands_cta_subtitle()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/$locale/deals"
              params={{ locale }}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-8 font-bold transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">local_offer</span>
              {m.brands_cta_button_deals()}
            </Link>
            <Link
              to="/$locale/compare"
              params={{ locale }}
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-[#0e141b] dark:text-white rounded-xl h-12 px-8 font-bold transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">compare</span>
              {m.brands_cta_button_compare()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}