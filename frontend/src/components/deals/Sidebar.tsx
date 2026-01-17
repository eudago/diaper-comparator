export default function Sidebar() {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 shrink-0">
                <div
                    className="flex flex-col gap-6 bg-white dark:bg-slate-800 p-6 rounded-xl border border-[#e7edf3] dark:border-slate-700 sticky top-24"
                >
                    <div className="flex items-center justify-between">
                        <h2
                            className="text-[#0e141b] dark:text-white text-lg font-bold"
                        >
                            Filters
                        </h2>
                        <button
                            className="text-primary text-xs font-bold uppercase tracking-wider"
                        >
                            Reset All
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span
                                className="material-symbols-outlined text-primary text-[20px]"
                            >scale</span
                            >
                            <p
                                className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal"
                            >
                                Weight Range (kg)
                            </p>
                        </div>
                        <div className="px-2 pt-2 pb-6">
                            <div
                                className="relative flex w-full h-1.5 bg-[#d0dbe7] dark:bg-slate-700 rounded-full"
                            >
                                <div
                                    className="absolute left-[20%] right-[30%] h-full bg-primary rounded-full"
                                ></div>
                                <div
                                    className="absolute left-[20%] -top-1.5 size-4 rounded-full bg-primary border-2 border-white shadow-sm cursor-pointer"
                                >
                                    <span
                                        className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#0e141b] dark:text-white whitespace-nowrap"
                                    >4kg</span
                                    >
                                </div>
                                <div
                                    className="absolute right-[30%] -top-1.5 size-4 rounded-full bg-primary border-2 border-white shadow-sm cursor-pointer"
                                >
                                    <span
                                        className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#0e141b] dark:text-white whitespace-nowrap"
                                    >12kg</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#e7edf3] dark:border-slate-700" />
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span
                                className="material-symbols-outlined text-primary text-[20px]"
                            >sell</span
                            >
                            <p
                                className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal"
                            >
                                Brand
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    defaultChecked
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Pampers (42)</span
                                >
                            </label>
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Huggies (38)</span
                                >
                            </label>
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    defaultChecked
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Luvs (12)</span
                                >
                            </label>
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Honest (15)</span
                                >
                            </label>
                        </div>
                    </div>
                    <hr className="border-[#e7edf3] dark:border-slate-700" />
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span
                                className="material-symbols-outlined text-primary text-[20px]"
                            >storefront</span
                            >
                            <p
                                className="text-[#0e141b] dark:text-white text-sm font-semibold leading-normal"
                            >
                                Retailer
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    defaultChecked
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Amazon</span
                                >
                            </label>
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Walmart</span
                                >
                            </label>
                            <label
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                    className="rounded text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span
                                    className="text-sm text-[#0e141b] dark:text-slate-300"
                                >Target</span
                                >
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="flex-1">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="Package of premium brand baby diapers"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNw6ka-jvNvN__M4bymsJhj_kmFXFcorVkddRCiiTUAtRo-XLZRDtqDS9kZXLtxym0SHu9MsfuqIzXKAXOjDx1T-FfgcEl8UsydVy4d0TB6zFwOoE0ZStxqTngN13n9iNwYCrd_bt4s5hbBfuO0cWB2maDvkIOspnBQkEi0h12mcnpF_DiJ94QCiMak5HUuY65EeWFsR1fqGSoUiO_p9yZINrlwPlmECNdjgi5KXEMSqIgmJuK_EEi65gBcpAh9LI73vK0aQvD_Q"
                            />
                            <div
                                className="absolute top-3 left-3 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase"
                            >
                                Best Value
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    Pampers
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Swaddlers Size 3, 168 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star_half</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(4.8k)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.24</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $40.32 at Amazon
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="Package of eco-friendly brand baby diapers"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx8759w7iF4YQyG7cj4bExlyEYkPGTLsCk6rvrHP0V9seDQ2RWvgsHNgC_VFOLCr_guCWXqixS9YCw0fnGWkpHN3KYamDV2iGDMlYCfMfezGAEk9mYjhr-BS_qExOE4gH5_0Kw_c0an1bh1Oh5o1AVjI_gEcM2Uxr8lPtobgRyq8R8H4BM6twWUyzU57xRWRZdgGZXU7pjVihD6JK6VHuPy-4tceezuw5hLFzCqBoy-RlYjDaLam7pyVyajbKzYQeZjK6sgaIUyw"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    Huggies
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Little Snugglers Size 3, 144 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(2.3k)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.28</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $40.32 at Target
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="Store brand diaper packaging design"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBd5SZJLZ24oQk5Q3Seg1ytnBWlOZ2t0p_XSk6N2mA99W8b_JlV4AhqxlcANSzgcV6O-TMAghn0v4nLGT9heT6yNdDjTD4UeIi_rnBCeAGexGFYs8IX4r9hmx8cZ02KVXBLvHbbX3hp_1Cwc5nRpYbvtJcbqv_bOTEQ0sOrO2BorKn0lsrnrm1zVIQeyJlaNY8iL-loK7FQFp-fHQF1qdmr8zkXIfg2swFxPqUq6xk9Wf8PoWfofMr2wGaa8sksHZTldaThfsYXA"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    Up &amp; Up
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Comfort Size 3, 200 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star_outline</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(1.1k)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.18</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $36.00 at Walmart
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="High quality baby diaper bundle"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeKqCXonn9HvPGSC9VXN4SGSPL5v0IMONlwa0yHtIwJgK2SPRjC4hy5Eqyvm4yk2Xwm9ivAsN60AL8iGTJ-7JZVhQ8Xf6Wnlu8ws8nBXFngmrZyZe2PYFgwE-7WbFdRV5Soly864Wcjq3kq5Ai0wQNlSqOQU70NpgxtjEGYr0f-5xr5BsSwKvZeQeGWwGC_9YEL5Z2PNgWiOFw0EeQ-GQqHRr4Rp0xht48b36t3NsAzOWJ0qMWj-3Y5DQUvfUD2JRUBiLhiItnDg"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    Luvs
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Triple Leakguard Size 3, 186 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star_half</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star_outline</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(8.5k)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.21</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $39.06 at Amazon
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        defaultChecked
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="Organic baby diaper packaging"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX0NLqrs1nld-Vmvz-RknmgaNmqBHs7WMwoF2Gu4TAOYGDi9IhMgjWpzLYY14l_SWxTpakUR-SsqnswleAcBrqQI_8DZ21fKftEStq8PCWm6GAkXV98WL0JnXo4gpX9egh5EoJgPYlpUY-mPsU_61yuTengt7Nw2u2Dkpp-V_x-mQG5HLhxZOrR-FJLuPcLW0N6RRft0NseZ0vcUcCav7LYeoLPIbEOaTeNdlLa9qoouq3j0rq0hNnMZB7GWbDxwNSc8NfF0D_mg"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    The Honest Co.
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Clean Conscious Size 3, 120 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(452)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.42</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $50.40 at Walmart
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        checked=""
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
                        >
                            <img
                                alt="Diaper pack"
                                className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                                data-alt="Value pack diaper branding"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3SqbDkUW1GZZ4YQ5N3W7B4H9T3qwnt66neD0_VQFf_0KuKUPgEGR_o9C5qD9xIIqqY-hncZ87XJar5wnxRTMCm7EF9rc3VOHbAvRUw1iNzCBpgCFyNlBHfsKedHFpcE_mDIcAUfI_53LBqY2KkiTh1hdV7Kf3nnALY3HqG_Uhktp9GSpkAmxyRLsCUVpspbNwCTifrYMYJHgOlyEfwBB7j_rbpUmLaVl7m8Fbp7GIBN_1uINAdjMeilk8KLtgjUbg6byd-gPKOQ"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            <div>
                                <h3
                                    className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                                >
                                    Kirkland Signature
                                </h3>
                                <p
                                    className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                                >
                                    Diapers Size 3, 198 Count
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                    >star_half</span
                                    >
                                </div>
                                <span
                                    className="text-xs text-[#4e7397] font-medium"
                                >(15k)</span
                                >
                            </div>
                            <div
                                className="py-2 border-y border-[#f1f5f9] dark:border-slate-700"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-black text-primary"
                                    >$0.23</span
                                    >
                                    <span
                                        className="text-sm font-medium text-[#4e7397]"
                                    >/ unit</span
                                    >
                                </div>
                                <p
                                    className="text-xs text-[#4e7397] font-medium mt-1"
                                >
                                    Total: $45.54 at Costco
                                </p>
                            </div>
                            <div
                                className="mt-auto flex items-center justify-between gap-4"
                            >
                                <label
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        className="rounded border-slate-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span
                                        className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors"
                                    >Compare</span
                                    >
                                </label>
                                <a
                                    className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                                    href="#"
                                >Go to Store</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center gap-2">
                    <button
                        className="size-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#4e7397] hover:bg-slate-50"
                    >
                        <span className="material-symbols-outlined"
                        >chevron_left</span
                        >
                    </button>
                    <button
                        className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold"
                    >
                        1
                    </button>
                    <button
                        className="size-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#4e7397] hover:bg-slate-50"
                    >
                        2
                    </button>
                    <button
                        className="size-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#4e7397] hover:bg-slate-50"
                    >
                        3
                    </button>
                    <button
                        className="size-10 flex items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#4e7397] hover:bg-slate-50"
                    >
                        <span className="material-symbols-outlined"
                        >chevron_right</span
                        >
                    </button>
                </div>
            </div>
        </div>
    )
}