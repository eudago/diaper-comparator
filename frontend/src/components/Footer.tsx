export const Footer = () => {
    return (
        <footer
            className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-12 px-6 lg:px-40"
        >
            <div
                className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
            >
                <div className="col-span-1 md:col-span-1">
                    <div
                        className="flex items-center gap-2 text-primary mb-4"
                    >
                        <div className="size-6">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                                ></path>
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-[#0e141b] dark:text-white">DiaperCompare</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Helping parents make the best choice for their babies and their wallets.
                    </p>
                </div>
                <div>
                    <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[#0e141b] dark:text-white">
                        Compare
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                            <a className="hover:text-primary" href="#">Brands</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Sizes</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Price Per Unit</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[#0e141b] dark:text-white">Resources</h5>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                            <a className="hover:text-primary" href="#">Buying Guides</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Safety Info</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[#0e141b] dark:text-white">Support</h5>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li>
                            <a className="hover:text-primary" href="#">Contact Us</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="max-w-[960px] mx-auto border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <p className="text-xs text-slate-400">
                    © 2026 DiaperCompare. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                    <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
                    <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
                </div>
            </div>
        </footer>
    )
}