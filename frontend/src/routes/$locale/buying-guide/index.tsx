import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/$locale/buying-guide/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <main>
        <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 pt-8 pb-12">
            <div className="@container">
                <div
                    className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[520px] flex flex-col justify-end p-8 lg:p-16">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10">
                        </div>
                        <div className="w-full h-full bg-center bg-cover"
                            data-alt="Happy baby smiling in a white nursery room"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7iGZ2EDKeOkQn-U2h4ZYwySzp1J_uzGKxR66SvF64t-7vm6G6AxaqjeAl6IrDV8joxiwIrPeAzRH4sbZ0_qLOOtBnXZqpkZULJwixWUQzXgBNiNdz6i_llHF_kvs4t2IUhWd_NBE7XOpO6sjsn9T2phzSIzD5mzIb0g1x6DQ6OG9XTfOlU1Fz6UzcUzMXeFBd52gzgrKhMLPKRBOOysvZVYAN_ULXvp40LaDZn5D3vhMQM_0bA3N-bm8MrKjqiLLH2tOhXorSJQ")' }}>
                        </div>
                    </div>
                    <div className="relative z-20 max-w-2xl">
                        <h1
                            className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl mb-6">
                            {m.buying_guide_title()}
                        </h1>
                        <p className="text-white/90 text-lg font-normal leading-relaxed mb-8">
                            {m.buying_guide_subtitle()}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-[#111813] text-base font-bold tracking-[0.015em] hover:shadow-lg hover:shadow-primary/20 transition-all">
                                {m.buying_guide_start_comparing()}
                            </button>
                            <button
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold hover:bg-white/30 transition-all">
                                {m.buying_guide_watch_video()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-12" id="types">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#111813] dark:text-white text-3xl font-bold tracking-tight">{m.buying_guide_types_title()}</h2>
                <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
                    {m.buying_guide_view_all()} <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#f0f4f2] dark:border-white/10 hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] bg-center bg-cover"
                        data-alt="Close up of a disposable diaper with blue pattern"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtdIcROr5IVTYPzAAf-gho3MitC3VIy6UJnM7wX0dnvgEn0pKMJTubAz4RPMJr21HbvhGOLsfrERRy2MbcA1A3f06h4P4PO1xsprKmma-lnuiImeZTBKnwKcfJXxpIsBPeqOdXTwujOVGA1hWKqg5mip3Ar53Rsa9kLxZ3QTaOrxVCq-ubXN-LMLmeeL8wy6oDPVTzHepHVeuXaSUcGl7w6iAgexoxYp3TFx3keLEInnEnxykshmZKAQIQzab9t2u0MliZzF30Fw")' }}>
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <p className="text-[#111813] dark:text-white text-lg font-bold">{m.buying_guide_type_disposables()}</p>
                        <p className="text-[#63886f] dark:text-gray-400 text-sm leading-relaxed">{m.buying_guide_type_disposables_desc()}</p>
                        <a className="mt-2 text-primary text-sm font-semibold flex items-center gap-1" href="#">
                            {m.buying_guide_learn_more()} <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </a>
                    </div>
                </div>
                <div
                    className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#f0f4f2] dark:border-white/10 hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] bg-center bg-cover" data-alt="Colorful stack of reusable cloth diapers"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMvFC7D135huV70Hf4JoSRftlY-710KvHToRz5B_nvgJFrNDSKlFuvhyGQq4J4-gP_QaUrZB7HWqgBTcIT8DAF7GxDlArQSFeqa93YhxtMWbHqNTL75oEbI9jIfnoh5_nxrR1byleREbywVpY_fUP_Z1Fqf2Efdb1pRREOFrZ1s6LIAmOesY74ugUY9eyFknBH2KSJRlv8CO61X-V9KN2LucCx5ota-ecmSok5Rvqna7ozVFDS3LAHsJmj93Vx4IUQx6WBGwZ1vQ")' }}>
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <p className="text-[#111813] dark:text-white text-lg font-bold">{m.buying_guide_type_cloth()}</p>
                        <p className="text-[#63886f] dark:text-gray-400 text-sm leading-relaxed">{m.buying_guide_type_cloth_desc()}</p>
                        <a className="mt-2 text-primary text-sm font-semibold flex items-center gap-1" href="#">
                            {m.buying_guide_learn_more()} <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </a>
                    </div>
                </div>
                <div
                    className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#f0f4f2] dark:border-white/10 hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] bg-center bg-cover"
                        data-alt="Toddler standing up in pull up training pants"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAX0cF7yBVfwvTn9gi9RTE4sDdq4rFa0pm62k9SlbS2K0kXnca29TBqieeZE-35nJLhSJAHNf3l_khyYsJ80WP54bFckq0iLDk-C2lTe39BrLt-umH9oC51-YfxEJEZfTOmBnTJe-WxNImagt3_mK3qE-ICwCj1BpeS_bjvdlrxkwYLgX6yO_fFsPL9h4Wm2kCnudWHeoeFL449jMEv8fCkwcyX0-QSIHTT72mP_SrWjXXEkopHNbAYID3-dfoNDNt0T23AjReoaQ")' }}>
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <p className="text-[#111813] dark:text-white text-lg font-bold">{m.buying_guide_type_pants()}</p>
                        <p className="text-[#63886f] dark:text-gray-400 text-sm leading-relaxed">{m.buying_guide_type_pants_desc()}</p>
                        <a className="mt-2 text-primary text-sm font-semibold flex items-center gap-1" href="#">
                            {m.buying_guide_learn_more()} <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </a>
                    </div>
                </div>
                <div
                    className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#f0f4f2] dark:border-white/10 hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] bg-center bg-cover"
                        data-alt="Baby sleeping peacefully under a soft blanket"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdApEhU2ZXhMvRd4yAmITjNmMsxLhFI1Yqh2MswJWATz-lVzCDaO_N0i2TUVGfyykd3Ih2zF90ljZyLGZ7yXbqLHasR3qIdzRLv84h9yT_OJiMQVf0VBU6QelMlYrgQAoSDSy4lXlqcRYfVQEg0CWe2OuqiO4r-5Tsb4bXRHXbTlJ0mzYEbPidB_VC8g-Oi7wOU3ztvQGc0ISX2dXzwcoTtuFdZaKVw-tbPsOTbWz4Se-pKUkRP80hY1hsuopJGAJAnMhZgsaq2g")' }}>
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <p className="text-[#111813] dark:text-white text-lg font-bold">{m.buying_guide_type_overnight()}</p>
                        <p className="text-[#63886f] dark:text-gray-400 text-sm leading-relaxed">{m.buying_guide_type_overnight_desc()}</p>
                        <a className="mt-2 text-primary text-sm font-semibold flex items-center gap-1" href="#">
                            {m.buying_guide_learn_more()} <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-primary/10 dark:bg-primary/5 py-16" id="features">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{m.buying_guide_features_title()}</h2>
                    <p className="text-[#63886f] dark:text-gray-400 max-w-xl mx-auto">{m.buying_guide_features_subtitle()}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        className="flex flex-col items-center text-center p-8 bg-white dark:bg-background-dark rounded-3xl shadow-sm">
                        <div
                            className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">water_drop</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{m.buying_guide_feature_absorption()}</h3>
                        <p className="text-[#63886f] dark:text-gray-400">{m.buying_guide_feature_absorption_desc()}</p>
                    </div>
                    <div
                        className="flex flex-col items-center text-center p-8 bg-white dark:bg-background-dark rounded-3xl shadow-sm">
                        <div
                            className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">air</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{m.buying_guide_feature_breathable()}</h3>
                        <p className="text-[#63886f] dark:text-gray-400">{m.buying_guide_feature_breathable_desc()}</p>
                    </div>
                    <div
                        className="flex flex-col items-center text-center p-8 bg-white dark:bg-background-dark rounded-3xl shadow-sm">
                        <div
                            className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined !text-4xl">straighten</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{m.buying_guide_feature_indicator()}</h3>
                        <p className="text-[#63886f] dark:text-gray-400">{m.buying_guide_feature_indicator_desc()}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-20" id="size-guide">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">{m.buying_guide_size_title()}</h2>
                    <p className="text-[#63886f] dark:text-gray-400 mb-8 leading-relaxed">
                        {m.buying_guide_size_subtitle()}
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-[#f0f4f2] dark:border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-background-light dark:bg-white/5">
                                <tr>
                                    <th className="px-6 py-4 font-bold">{m.buying_guide_table_size()}</th>
                                    <th className="px-6 py-4 font-bold">{m.buying_guide_table_weight_lbs()}</th>
                                    <th className="px-6 py-4 font-bold">{m.buying_guide_table_weight_kg()}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0f4f2] dark:divide-white/10">
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{m.buying_guide_size_newborn()}</td>
                                    <td className="px-6 py-4 text-[#63886f]">{m.buying_guide_up_to({ weight: '10' })} lbs</td>
                                    <td className="px-6 py-4 text-[#63886f]">{m.buying_guide_up_to({ weight: '4.5' })} kg</td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors bg-primary/5">
                                    <td className="px-6 py-4 font-medium">{m.buying_guide_size_n({ n: '1' })}</td>
                                    <td className="px-6 py-4 text-[#63886f]">8 – 14 lbs</td>
                                    <td className="px-6 py-4 text-[#63886f]">3.5 – 6 kg</td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{m.buying_guide_size_n({ n: '2' })}</td>
                                    <td className="px-6 py-4 text-[#63886f]">12 – 18 lbs</td>
                                    <td className="px-6 py-4 text-[#63886f]">5 – 8 kg</td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{m.buying_guide_size_n({ n: '3' })}</td>
                                    <td className="px-6 py-4 text-[#63886f]">16 – 28 lbs</td>
                                    <td className="px-6 py-4 text-[#63886f]">7 – 13 kg</td>
                                </tr>
                                <tr className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{m.buying_guide_size_n({ n: '4' })}</td>
                                    <td className="px-6 py-4 text-[#63886f]">22 – 37 lbs</td>
                                    <td className="px-6 py-4 text-[#63886f]">10 – 17 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div
                        className="relative p-2 bg-white dark:bg-white/5 rounded-3xl border border-[#f0f4f2] dark:border-white/10 shadow-lg">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-center bg-cover"
                            data-alt="Baby being changed by mother on a soft white mat"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATFNJfjstHShRHFVyDX26nM7lpIQOsEmw3UhDOb388TeNz65PYpdljyydV5Vs8ciNBpXSKJfjHZ0nRO2Gz2veYyn3QDa3o9fTLqTQOT9E0Fq_EGCIIjTdNAsGO3e88yfd0WM7Z8XH-HDn-hK1Me7Ya2BX3ALzq5_6H342kaxAUUZMYpNZyLceULIKcmX6hYWSEM7immyZpzrYJDrcArBVyALU4N11oQlNZM3Fz_CJ2fndstcaMOcNBgh8-6QwL_RcDlGRwCNam9g")' }}>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl max-w-[240px]">
                            <p className="text-[#111813] font-bold italic">{m.buying_guide_testimonial_text()}</p>
                            <p className="text-[#111813]/60 text-sm mt-2">{m.buying_guide_testimonial_author()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 pb-20">
            <div
                className="bg-background-dark text-white rounded-[2.5rem] p-10 lg:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <span className="material-symbols-outlined !text-[200px]">savings</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 relative z-10">{m.buying_guide_cta_title()}</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">{m.buying_guide_cta_subtitle()}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                    <button
                        className="bg-primary text-[#111813] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">{m.buying_guide_cta_button_compare()}</button>
                    <button
                        className="bg-white/10 border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">{m.buying_guide_cta_button_alerts()}</button>
                </div>
            </div>
        </div>
    </main>
}
