import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans tracking-tight">
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50">
                <div className="p-8">
                    <div className="text-2xl font-black text-white flex items-center gap-2 mb-12">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                        <span>CRM Panel</span>
                    </div>
                    
                    <nav className="space-y-2">
                        <Link to="/" className="flex items-center gap-3 p-4 text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium rounded-xl">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                            Dashboard
                        </Link>
                        <Link to="/products" className="flex items-center gap-3 p-4 text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium rounded-xl">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                            Products
                        </Link>
                        <Link to="/categories" className="flex items-center gap-3 p-4 text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium rounded-xl">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                            Categories
                        </Link>
                        <Link to="/orders" className="flex items-center gap-3 p-4 text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium rounded-xl">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            Orders
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Header */}
            <header className="fixed top-0 left-64 right-0 h-20 bg-slate-900 border-b border-slate-800 z-40 px-8 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white uppercase tracking-widest text-xs opacity-50">Secure API Environment</h2>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-400">Admin</span>
                    <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700"></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="ml-64 pt-20">
                <Outlet />
            </main>
        </div>
    );
}
