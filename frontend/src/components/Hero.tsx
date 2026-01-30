import { m } from "@/paraglide/messages"
import { useNavigate } from "@tanstack/react-router"
import { getLocale } from "@/paraglide/runtime"
import { useState, FormEvent } from "react"

export default function Hero() {
    const navigate = useNavigate()
    const locale = getLocale()
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            const countrySuffix = locale === 'es' ? 'es' : 'us-en'
            const indexName = `offers_${countrySuffix}`
            navigate({
                to: "/$locale/deals",
                params: { locale },
                search: { [`${indexName}[query]`]: searchQuery.trim() }
            })
        }
    }

    const handleSizeFilter = (size: string) => {
        const countrySuffix = locale === 'es' ? 'es' : 'us-en'
        const indexName = `offers_${countrySuffix}`
        navigate({
            to: "/$locale/deals",
            params: { locale },
            search: { [`${indexName}[refinementList][size][0]`]: size }
        })
    }

    return (
        <div className="px-6 lg:px-40 py-10 lg:py-16 bg-gradient-to-br from-baby-blue via-white to-mint dark:from-slate-900 dark:via-background-dark dark:to-slate-900">
            <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">stars</span>
                    {m.hero_badge()}
                </div>
                <h1 className="text-[#0e141b] dark:text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
                    {m.hero_title()}
                </h1>
                <p className="text-[#4e7397] dark:text-slate-400 text-lg lg:text-xl font-normal max-w-2xl mb-10">
                    {m.hero_subtitle()}
                </p>
                {/* Central Search Experience */}
                <div className="w-full max-w-[640px] relative">
                    <form onSubmit={handleSearch} className="flex w-full items-stretch rounded-2xl h-14 lg:h-18 bg-white dark:bg-slate-800 shadow-xl shadow-primary/10 border border-primary/20 overflow-hidden">
                        <div className="flex items-center justify-center pl-5 text-primary">
                            <span className="material-symbols-outlined text-2xl">search</span>
                        </div>
                        <input 
                            className="flex w-full border-none bg-transparent focus:ring-0 text-[#0e141b] dark:text-white px-4 text-base lg:text-lg placeholder:text-slate-400 font-normal" 
                            placeholder={m.hero_search_placeholder()} 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="flex items-center pr-3">
                            <button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-xl h-10 lg:h-12 px-6 lg:px-8 font-bold text-sm lg:text-base shadow-sm transition-all active:scale-95">
                                {m.hero_search_button()}
                            </button>
                        </div>
                    </form>
                    {/* Quick Filter Chips */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 self-center">{m.hero_popular_sizes()}</span>
                        <button onClick={() => handleSizeFilter("N")} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-primary hover:text-primary transition-all">{m.size_n()}</button>
                        <button onClick={() => handleSizeFilter("1")} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-primary hover:text-primary transition-all">{m.size_1()}</button>
                        <button onClick={() => handleSizeFilter("2")} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-primary hover:text-primary transition-all">{m.size_2()}</button>
                        <button onClick={() => handleSizeFilter("3")} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-primary hover:text-primary transition-all">{m.size_3()}</button>
                        <button onClick={() => handleSizeFilter("4")} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold hover:border-primary hover:text-primary transition-all">{m.size_4_plus()}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}