import { useState } from "react";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo & Desktop Menu */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {["Dashboard", "Team", "Projects", "Calendar"].map((item, index) => (
                                    <a key={index} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile & Notifications */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative ml-3">
                            <button className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {["Dashboard", "Team", "Projects", "Calendar"].map((item, index) => (
                            <a key={index} href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
