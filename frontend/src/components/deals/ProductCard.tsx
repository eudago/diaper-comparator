import React from 'react'

interface OfferHit {
    id: string
    productId: string
    retailerId: string
    retailer: string
    brand: string
    model: string
    line: string
    size: string
    weightRange: string
    unitsPerPackage: number
    type: string
    country: string
    price: number
    pricePerUnit: number
    productUrl: string
    stock: boolean
    scrapedAt: number
}

interface ProductCardProps {
    hit: OfferHit
}

const ProductCard: React.FC<ProductCardProps> = ({ hit }) => {
    return (
        <div
            className="bg-white dark:bg-slate-800 rounded-xl border border-[#e7edf3] dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
        >
            <div
                className="relative p-4 aspect-square bg-[#f8fafc] dark:bg-slate-900 flex items-center justify-center"
            >
                <img
                    alt={hit.model}
                    className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNw6ka-jvNvN__M4bymsJhj_kmFXFcorVkddRCiiTUAtRo-XLZRDtqDS9kZXLtxym0SHu9MsfuqIzXKAXOjDx1T-FfgcEl8UsydVy4d0TB6zFwOoE0ZStxqTngN13n9iNwYCrd_bt4s5hbBfuO0cWB2maDvkIOspnBQkEi0h12mcnpF_DiJ94QCiMak5HUuY65EeWFsR1fqGSoUiO_p9yZINrlwPlmECNdjgi5KXEMSqIgmJuK_EEi65gBcpAh9LI73vK0aQvD_Q"
                />
                {hit.pricePerUnit < 0.25 && (
                    <div
                        className="absolute top-3 left-3 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase"
                    >
                        Best Value
                    </div>
                )}
            </div>
            <div className="p-5 flex flex-col flex-1 gap-4">
                <div>
                    <h3
                        className="text-xs font-bold text-primary uppercase tracking-wider mb-1"
                    >
                        {hit.brand}
                    </h3>
                    <p
                        className="text-base font-semibold text-[#0e141b] dark:text-white leading-tight"
                    >
                        {hit.model} {hit.size}, {hit.unitsPerPackage} Count
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star_half</span>
                    </div>
                    <span className="text-xs text-[#4e7397] font-medium">(4.8k)</span>
                </div>
                <div className="py-2 border-y border-[#f1f5f9] dark:border-slate-700">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-primary">
                            €{hit.pricePerUnit.toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-[#4e7397]">/ unit</span>
                    </div>
                    <p className="text-xs text-[#4e7397] font-medium mt-1">
                        Total: €{hit.price.toFixed(2)} at {hit.retailer}
                    </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                            type="checkbox"
                        />
                        <span className="text-xs font-medium text-[#4e7397] group-hover:text-primary transition-colors">
                            Compare
                        </span>
                    </label>
                    <a
                        className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
                        href={hit.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to Store
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
