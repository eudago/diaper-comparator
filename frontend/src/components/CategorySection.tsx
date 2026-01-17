import { m } from "@/paraglide/messages"

export default function CategorySection() {
    return (
        <div className="px-6 lg:px-40 py-12">
            <div className="max-w-[960px] mx-auto">
                <div className="flex items-end justify-between mb-8 px-2">
                    <div>
                        <h2 className="text-[#0e141b] dark:text-white text-2xl font-bold tracking-tight">{m.category_title()}</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{m.category_subtitle()}</p>
                    </div>
                    <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline" href="#">
                        {m.view_all()} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Newborn Essentials */}
                    <div className="group cursor-pointer">
                        <div className="bg-baby-blue dark:bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-between transition-transform group-hover:-translate-y-2 group-hover:shadow-lg">
                            <div className="bg-white/80 dark:bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">child_care</span>
                            </div>
                            <div>
                                <h3 className="text-[#0e141b] dark:text-white text-lg font-bold leading-tight mb-1">{m.cat_newborn_title()}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs">{m.cat_newborn_desc()}</p>
                            </div>
                        </div>
                    </div>
                    {/* Earth-Friendly */}
                    <div className="group cursor-pointer">
                        <div className="bg-mint dark:bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-between transition-transform group-hover:-translate-y-2 group-hover:shadow-lg">
                            <div className="bg-white/80 dark:bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center text-green-600">
                                <span className="material-symbols-outlined text-3xl">eco</span>
                            </div>
                            <div>
                                <h3 className="text-[#0e141b] dark:text-white text-lg font-bold leading-tight mb-1">{m.cat_eco_title()}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs">{m.cat_eco_desc()}</p>
                            </div>
                        </div>
                    </div>
                    {/* Extra Absorbency */}
                    <div className="group cursor-pointer">
                        <div className="bg-[#f0eaff] dark:bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-between transition-transform group-hover:-translate-y-2 group-hover:shadow-lg">
                            <div className="bg-white/80 dark:bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600">
                                <span className="material-symbols-outlined text-3xl">nights_stay</span>
                            </div>
                            <div>
                                <h3 className="text-[#0e141b] dark:text-white text-lg font-bold leading-tight mb-1">{m.cat_night_title()}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs">{m.cat_night_desc()}</p>
                            </div>
                        </div>
                    </div>
                    {/* Budget-Friendly */}
                    <div className="group cursor-pointer">
                        <div className="bg-soft-yellow dark:bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-between transition-transform group-hover:-translate-y-2 group-hover:shadow-lg">
                            <div className="bg-white/80 dark:bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600">
                                <span className="material-symbols-outlined text-3xl">payments</span>
                            </div>
                            <div>
                                <h3 className="text-[#0e141b] dark:text-white text-lg font-bold leading-tight mb-1">{m.cat_budget_title()}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs">{m.cat_budget_desc()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}