import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='flex-1 max-w-[1280px] mx-auto w-full px-4 py-6'>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
      <div className="lg:col-span-7 flex flex-col gap-4">
        <div
          className="w-full aspect-square bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-8">
          <div className="w-full h-full bg-center bg-no-repeat bg-contain"
            data-alt="Huggies Special Delivery Diapers main package front view"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJPan3PZCyYGFUd-y0iL20thVTQSPtQUKn08KZedoFMdVxV7DGDX1aF9ydRQymsZ-Bx3srvi6MlJiTvWja-AJdHzACsz9fAX9lqVQbJ-Pg4GUBRFuTm2JIfFj16jgD69UfWDc5EjTqR_dip-Gm4IOjhvj1-xU4AEwGb-ScVRK5qRhqq8lvAlMa_UZ9gAtctMvEyP20H_ZD300sxu59F7qRqtkCh_hv10TPOe8slTEBLjPizkT5hMSRj_17ifMPAGrh7jKdwRPzHg")' }}>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div
            className="aspect-square bg-white dark:bg-slate-900 rounded-lg border-2 border-primary overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-100"
              data-alt="Front view diaper packaging"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDshmIKLuxA1xp1tOg04mveG15KqVMVU-R0C5conR9n4ReiG9cNz2MNk4_05RfAk3LG6-HP2092fvVE_OIi9jFOmcORo5Tl_45sn4IGm3r6xHJ4TDB8Cw_Li2FdAhvjo9-T5FrYjSHMbXHl0Rt6xx4lrsD-50tzj0t8Rz0dP78ISlCmSTg08FGHPt5paoWdxSF3_FCnMS9PJCD-yipN9cSU20BlXdA9M1Ifs4AVZS6zeI_nhyEUPq1pvBCcHGbOUC-h0JbrBdxA7g")' }}>
            </div>
          </div>
          <div
            className="aspect-square bg-white dark:bg-slate-900 rounded-lg border border-transparent overflow-hidden cursor-pointer hover:border-slate-300">
            <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-80"
              data-alt="Single diaper front showing design"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrnJoRB0PLZ1nY0wOGIDpx_2CwM1m-vB_oojkvQcqyADKHPyBXY7iNJ7BDpwfHvPP3T-c24LVZAbHgjIw1wnVjLAVptS02FpDsaryhpY_a90BV7yTELNc9LbP__HfLXcId-sgMuZhL2Q3UqbcQlu3NvkG3IQ01_c3LRgQm5cAczpuf4q46s5Jm0mfvwcwNcqPxawVx6WgOIrJ8SRzakqOZvJ0PWyczxb2ec9XZr95k5niFAL9srVnsQc4h8AVhzjsQeutuUQtjkA")' }}>
            </div>
          </div>
          <div
            className="aspect-square bg-white dark:bg-slate-900 rounded-lg border border-transparent overflow-hidden cursor-pointer hover:border-slate-300">
            <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-80"
              data-alt="Soft texture close-up"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAplpm9wFjoPPifkxE5nKbJBEw7bLfBnzpKaxD56GcD003p8kJkSb2wa8FpmaykXT28C8WFM7Rd_CsNWpIpEODe8zo7r7P5s2yiVNdlVqK-IbOgl32LHOL9_kcowA44MCLhTkxT75x-KqVButRnxU-7LH_oXEITwYEi6p4OHnuTa3DwvfSmQbzTIjIXJ4kPpvD0lEvMBBtUGV9qsxoKX78Um6YJmWa2uzgGTFKd2yIaYh2cGGIgEEA9Kezu0cxne2VCYXGoahanxg")' }}>
            </div>
          </div>
          <div
            className="aspect-square bg-white dark:bg-slate-900 rounded-lg border border-transparent overflow-hidden cursor-pointer hover:border-slate-300">
            <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-80"
              data-alt="Wetness indicator demonstration"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhmbGqJ4NlR2eKlvxu5zPi_DJDq883-7RP3I5Ck7QlP1V8VXj6YZ1Lm9YK4NaLbAN9XajOikNIVqPNwsWZhbNOTjqlKf6DUPm05kfXqLiv3aENM99DW8HlybljZqQCdVal2uaic-8xekCwUlgPLZPcfsX2zpDHUB3EVeMmhSqMnq_5ujiHBr2wPBT4U5PmCf-M3bVFm1BdWsnUzrNau0L4lh521Gxt1fG9jiB5wbPXBoGZEHoDAuVa3YE1E49QoRaLNkCLPxILLQ")' }}>
            </div>
          </div>
          <div
            className="aspect-square bg-white dark:bg-slate-900 rounded-lg border border-transparent overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-800 cursor-pointer">
            <span className="text-xs font-bold text-slate-500">+4 More</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div>
          <span
            className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-2 uppercase tracking-wider">Top
            Rated</span>
          <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] mb-1">Huggies Special Delivery
            (Size 1, 120 Count)</h1>
          <p className="text-[#4e7397] dark:text-slate-400 text-base font-normal">Hypoallergenic and
            Chlorine-Free • Plant-Based Materials</p>
        </div>
        <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
          <div className="flex flex-col">
            <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Best Price Now</p>
            <p className="text-3xl font-bold text-primary">$44.99</p>
            <p className="text-sm text-green-600 font-medium">-$5.00 from last week</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="flex gap-0.5 text-primary">
              <span className="material-symbols-outlined fill text-xl">star</span>
              <span className="material-symbols-outlined fill text-xl">star</span>
              <span className="material-symbols-outlined fill text-xl">star</span>
              <span className="material-symbols-outlined fill text-xl">star</span>
              <span className="material-symbols-outlined fill text-xl">star_half</span>
            </div>
            <p className="text-[#4e7397] dark:text-slate-400 text-sm font-medium">4.8 (1,240 parents)</p>
          </div>
        </div>
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20">
            <span className="truncate">Go to Amazon Store</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </button>
          <button
            className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white font-bold py-4 rounded-xl transition-all">
            <span className="material-symbols-outlined">notifications_active</span>
            <span className="truncate">Track Price Changes</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-background-light dark:bg-slate-800/50 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">opacity</span>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Absorbency</p>
              <p className="text-sm font-semibold">12-Hour Protection</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-background-light dark:bg-slate-800/50 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">eco</span>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Eco-Friendly</p>
              <p className="text-sm font-semibold">Plant-Based</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      className="mb-12 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold">Price History</h3>
          <p className="text-sm text-slate-500">Track price fluctuations over the last year</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            className="px-4 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-slate-700 shadow-sm">30D</button>
          <button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-500">90D</button>
          <button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-500">1Y</button>
        </div>
      </div>
      <div className="relative h-[250px] w-full mt-4">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <defs>
            <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4799eb" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#4799eb" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M0,150 L100,140 L200,160 L300,130 L400,110 L500,120 L600,80 L700,90 L800,100 L900,60 L1000,70"
            fill="none" stroke="#4799eb" strokeLinecap="round" strokeWidth="4"></path>
          <path
            d="M0,150 L100,140 L200,160 L300,130 L400,110 L500,120 L600,80 L700,90 L800,100 L900,60 L1000,70 L1000,200 L0,200 Z"
            fill="url(#chartGradient)"></path>
          <circle cx="900" cy="60" fill="#4799eb" r="6"></circle>
        </svg>
        <div
          className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-slate-400 font-bold uppercase py-2">
          <span>$55</span>
          <span>$50</span>
          <span>$45</span>
          <span>$40</span>
        </div>
        <div
          className="absolute left-[85%] top-[10%] bg-slate-900 text-white text-[10px] p-2 rounded shadow-xl pointer-events-none">
          <p className="font-bold">Lowest Price</p>
          <p className="text-primary">$44.99 (Today)</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 px-2 text-[10px] text-slate-400 font-bold uppercase">
        <span>Oct 1</span>
        <span>Oct 15</span>
        <span>Nov 1</span>
        <span>Nov 15</span>
        <span>Dec 1</span>
        <span>Today</span>
      </div>
    </section>
  </main>
}
