import { RefinementList } from 'react-instantsearch'

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-64 shrink-0">
            <div
                className="flex flex-col gap-6 bg-white dark:bg-slate-800 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-700 sticky top-24"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-[#0e141b] dark:text-white text-lg font-bold">Filters</h2>
                    <button className="text-primary text-xs font-bold uppercase tracking-wider">Reset All</button>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">sell</span>
                        <p className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal">Brand</p>
                    </div>
                    <RefinementList
                        attribute="brand"
                        classNames={{
                            list: 'flex flex-col gap-2',
                            label: 'flex items-center gap-3 cursor-pointer',
                            checkbox: 'rounded text-primary focus:ring-primary',
                            labelText: 'text-sm text-[#0e141b] dark:text-slate-300',
                            count: 'text-xs text-[#4e7397] ml-auto'
                        }}
                    />
                </div>

                <hr className="border-[#e7edf3] dark:border-slate-700" />

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">storefront</span>
                        <p className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal">Retailer</p>
                    </div>
                    <RefinementList
                        attribute="retailer"
                        classNames={{
                            list: 'flex flex-col gap-2',
                            label: 'flex items-center gap-3 cursor-pointer',
                            checkbox: 'rounded text-primary focus:ring-primary',
                            labelText: 'text-sm text-[#0e141b] dark:text-slate-300',
                            count: 'text-xs text-[#4e7397] ml-auto'
                        }}
                    />
                </div>

                <hr className="border-[#e7edf3] dark:border-slate-700" />

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">straighten</span>
                        <p className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal">Size</p>
                    </div>
                    <RefinementList
                        attribute="size"
                        classNames={{
                            list: 'flex flex-col gap-2',
                            label: 'flex items-center gap-3 cursor-pointer',
                            checkbox: 'rounded text-primary focus:ring-primary',
                            labelText: 'text-sm text-[#0e141b] dark:text-slate-300',
                            count: 'text-xs text-[#4e7397] ml-auto'
                        }}
                    />
                </div>
            </div>
        </aside>
    )
}