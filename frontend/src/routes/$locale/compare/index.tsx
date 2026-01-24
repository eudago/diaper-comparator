import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/compare/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col items-center py-8 px-4 md:px-10 lg:px-20'>
    <div className="w-full max-w-[1200px]">
      <nav className="flex flex-wrap gap-2 mb-6">
        <a
          className="text-primary text-sm font-medium hover:underline"
          href="#"
        >Home</a
        >
        <span className="text-[#4e7397] text-sm">/</span>
        <a
          className="text-primary text-sm font-medium hover:underline"
          href="#"
        >Diapers</a
        >
        <span className="text-[#4e7397] text-sm">/</span>
        <span
          className="text-[#0e141b] dark:text-slate-400 text-sm font-medium"
        >Comparison Table</span
        >
      </nav>
      <div className="flex flex-col gap-3 mb-10">
        <h1
          className="text-[#0e141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
        >
          Compare Top 3 Diaper Brands
        </h1>
        <p
          className="text-[#4e7397] dark:text-slate-400 text-lg font-normal max-w-2xl leading-relaxed"
        >
          We've analyzed absorption, skin safety, and cost to
          help you find the perfect match for your baby's
          needs and your budget.
        </p>
      </div>
      <div
        className="overflow-hidden rounded-xl border border-[#d0dbe7] dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
      >
        <div className="overflow-x-auto">
          <table
            className="w-full text-left border-collapse min-w-[900px]"
          >
            <thead
              className="sticky-header bg-white dark:bg-slate-900 border-b-2 border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <tr>
                <th className="p-6 w-1/4 align-bottom">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-primary text-xs font-bold uppercase tracking-wider"
                    >Comparison Matrix</span
                    >
                    <h3
                      className="text-lg font-bold dark:text-white"
                    >
                      Feature Comparison
                    </h3>
                  </div>
                </th>
                <th className="p-6 w-1/4 text-center">
                  <div
                    className="flex flex-col items-center gap-4"
                  >
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-contain w-32 h-32 mb-2"
                      data-alt="Premium organic cotton diaper package"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZFYrt5Xjbg6i0ZRsTCDVVt5hUpx2l_wZoZ3pW4wUjaW_BCgqdmGqi-CHzO1uUgvBkKxbbhebCXa9CBEuSMVzpvhoxwWNro7jHXuUkKVirUulT0RToJL2Zctg7cuDIMpzpGUV1wnvXi4jqAzuwPem8nm43_6vhBG5UhbHs8zpUpTHqS16D1ibj0OENNVzZWeoSATCu9KhQOpg-OmQKXbkcp2gr5JBWBW6i-4Nwuo3siVEOvHZu_qSeNSxhH9y5IY94sKqtj-8Ig")',
                      }}
                    ></div>
                    <div
                      className="flex flex-col gap-1"
                    >
                      <span
                        className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase self-center mb-1"
                      >Eco-Choice</span
                      >
                      <h4
                        className="text-lg font-bold text-[#0e141b] dark:text-white"
                      >
                        Pampers Pure
                      </h4>
                    </div>
                    <button
                      className="w-full py-2 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      View Deal
                    </button>
                  </div>
                </th>
                <th className="p-6 w-1/4 text-center">
                  <div
                    className="flex flex-col items-center gap-4"
                  >
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-contain w-32 h-32 mb-2"
                      data-alt="Budget friendly diaper pack"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9xQHFJ7lt5UosD-fHr4AMHkZn5WRrP5kE8ukN2rF5A1d_8yu4GE_jM-goQe-uVEfK1Xbx0VyCOFt2ZlYGItogyld18e_-tX1AeZSEiAtHsQ6um1EZFpYOYIiI50q2qe7tkjNHseQSWxsP0yY2mf_901cBjYNy7ohCsg4qqkGEvA9xJ0IMunsBTkEtiMWS4lrHws5LQLiJX4nDsVxjVhhT-9O_ABpLaq3iFgi6abNNBjhNJAmV0d5faQmXLWXqB0HQLqUe9wRuA")',
                      }}
                    ></div>
                    <div
                      className="flex flex-col gap-1"
                    >
                      <span
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full uppercase self-center mb-1"
                      >Best Value</span
                      >
                      <h4
                        className="text-lg font-bold text-[#0e141b] dark:text-white"
                      >
                        Mama Bear Gentle
                      </h4>
                    </div>
                    <button
                      className="w-full py-2 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      View Deal
                    </button>
                  </div>
                </th>
                <th className="p-6 w-1/4 text-center">
                  <div
                    className="flex flex-col items-center gap-4"
                  >
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-contain w-32 h-32 mb-2"
                      data-alt="Skin friendly baby diaper box"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDckZMNQut46-xXB6F_1CTjgLxkMqGKqNWST5N0UgB2txGC-2-kmnaW_sXAiuCoxZgU0zwpVGRV6zIYpOmYPPHn1_EhVkvojm0CezfInFbgOVn5pcaBqsnelUmmaQvinf0RVewlGQ0F-M2x-heN2dhQkvuGRV3lcI74oSYhJzGKyTtCoiF3EZem56Oa8wQCctZu3sL_Vp20jCP19fI_jkComZ_OUeZmB5M05VQ3HEaw382QSkD8TaUIlpPJfp-TIKNKLQ4dFW1eJA")',
                      }}
                    ></div>
                    <div
                      className="flex flex-col gap-1"
                    >
                      <span
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full uppercase self-center mb-1"
                      >Skin Expert</span
                      >
                      <h4
                        className="text-lg font-bold text-[#0e141b] dark:text-white"
                      >
                        Huggies Delivery
                      </h4>
                    </div>
                    <button
                      className="w-full py-2 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      View Deal
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-slate-100 dark:divide-slate-800"
            >
              <tr
                className="bg-white dark:bg-slate-900 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="p-6">
                  <div
                    className="flex items-center gap-3"
                  >
                    <div
                      className="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                      >payments</span
                      >
                    </div>
                    <div>
                      <p
                        className="font-bold dark:text-white"
                      >
                        Price per Diaper
                      </p>
                      <p
                        className="text-xs text-[#4e7397]"
                      >
                        Based on Size 3 bulk
                        packs
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="p-6 text-center text-lg font-bold text-slate-700 dark:text-slate-300"
                >
                  $0.35
                </td>
                <td
                  className="p-6 text-center text-lg font-black text-primary"
                >
                  $0.21
                </td>
                <td
                  className="p-6 text-center text-lg font-bold text-slate-700 dark:text-slate-300"
                >
                  $0.42
                </td>
              </tr>
              <tr
                className="bg-white dark:bg-slate-900 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="p-6">
                  <div
                    className="flex items-center gap-3"
                  >
                    <div
                      className="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                      >opacity</span
                      >
                    </div>
                    <div>
                      <p
                        className="font-bold dark:text-white"
                      >
                        Absorption Rating
                      </p>
                      <p
                        className="text-xs text-[#4e7397]"
                      >
                        Laboratory tested
                        dryness
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="flex text-primary">
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                    </div>
                    <span
                      className="text-xs font-medium text-slate-500"
                    >5/5 - Ultra</span
                    >
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="flex text-primary">
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined"
                      >opacity</span
                      >
                    </div>
                    <span
                      className="text-xs font-medium text-slate-500"
                    >4/5 - Reliable</span
                    >
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="flex text-primary">
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined fill-[1]"
                      >opacity</span
                      >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          clipPath: 'inset(0 50% 0 0)',
                        }}
                      >opacity</span
                      >
                    </div>
                    <span
                      className="text-xs font-medium text-slate-500"
                    >4.5/5 - High</span
                    >
                  </div>
                </td>
              </tr>
              <tr
                className="bg-white dark:bg-slate-900 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="p-6">
                  <div
                    className="flex items-center gap-3"
                  >
                    <div
                      className="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                      >eco</span
                      >
                    </div>
                    <div>
                      <p
                        className="font-bold dark:text-white"
                      >
                        Materials &amp; Safety
                      </p>
                      <p
                        className="text-xs text-[#4e7397]"
                      >
                        Hypoallergenic
                        certifications
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-wrap justify-center gap-2"
                  >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >Cotton Blend</span
                    >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >0% Chlorine</span
                    >
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-wrap justify-center gap-2"
                  >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >Fragrance Free</span
                    >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >Paraben Free</span
                    >
                  </div>
                </td>
                <td className="p-6 text-center">
                  <div
                    className="flex flex-wrap justify-center gap-2"
                  >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >Plant-Based</span
                    >
                    <span
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded font-medium text-slate-600 dark:text-slate-400"
                    >FSC Certified</span
                    >
                  </div>
                </td>
              </tr>
              <tr
                className="bg-white dark:bg-slate-900 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="p-6">
                  <div
                    className="flex items-center gap-3"
                  >
                    <div
                      className="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                      >accessibility_new</span
                      >
                    </div>
                    <div>
                      <p
                        className="font-bold dark:text-white"
                      >
                        Elastic Fit
                      </p>
                      <p
                        className="text-xs text-[#4e7397]"
                      >
                        Waistband stretch &amp;
                        comfort
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="p-6 text-center text-sm text-[#4e7397] dark:text-slate-400"
                >
                  Flexible 3D sides for high activity
                </td>
                <td
                  className="p-6 text-center text-sm text-[#4e7397] dark:text-slate-400"
                >
                  Soft-stretch panels with snug fit
                </td>
                <td
                  className="p-6 text-center text-sm text-[#4e7397] dark:text-slate-400 font-bold text-primary"
                >
                  SnugFit™ Tech for leak prevention
                </td>
              </tr>
              <tr
                className="bg-white dark:bg-slate-900 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b-0"
              >
                <td className="p-6">
                  <div
                    className="flex items-center gap-3"
                  >
                    <div
                      className="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                      >visibility</span
                      >
                    </div>
                    <div>
                      <p
                        className="font-bold dark:text-white"
                      >
                        Wetness Indicator
                      </p>
                      <p
                        className="text-xs text-[#4e7397]"
                      >
                        Color changing stripe
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  className="p-6 text-center text-green-600"
                >
                  <span
                    className="material-symbols-outlined"
                  >check_circle</span
                  >
                </td>
                <td
                  className="p-6 text-center text-green-600"
                >
                  <span
                    className="material-symbols-outlined"
                  >check_circle</span
                  >
                </td>
                <td
                  className="p-6 text-center text-green-600"
                >
                  <span
                    className="material-symbols-outlined"
                  >check_circle</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="mt-12 p-8 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h3
            className="text-2xl font-bold text-[#0e141b] dark:text-white mb-2"
          >
            Editor's Recommendation
          </h3>
          <p
            className="text-[#4e7397] dark:text-slate-400 leading-relaxed"
          >
            For most new parents,
            <span className="font-bold text-primary"
            >Mama Bear Gentle Touch</span
            >
            offers the best balance between price and
            performance, especially for daytime use. If your
            baby has very sensitive skin, we recommend
            <span className="font-bold text-primary"
            >Pampers Pure</span
            >
            for its organic materials.
          </p>
        </div>
        <div className="flex shrink-0 gap-4">
          <button
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all"
          >
            Download Guide (PDF)
          </button>
          <button
            className="px-6 py-3 bg-white dark:bg-slate-800 text-primary font-bold border border-primary rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Email Results
          </button>
        </div>
      </div>
      <div className="mt-12 mb-20 text-center">
        <p
          className="text-xs text-[#4e7397] dark:text-slate-500 uppercase tracking-widest font-bold mb-4"
        >
          Quality Assured
        </p>
        <div
          className="flex justify-center gap-8 opacity-60 grayscale"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined"
            >verified</span
            >
            <span className="text-sm font-medium"
            >Dermatologist Tested</span
            >
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined"
            >biotech</span
            >
            <span className="text-sm font-medium"
            >Lab Verified</span
            >
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined"
            >group</span
            >
            <span className="text-sm font-medium"
            >Parent Approved</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
}
