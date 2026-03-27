import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import api from '@/utils/api';
import { useCart } from '@/Context/CartContext';
import { useAuth } from '@/Context/AuthContext';

const COLORS = {
    yellowBannerBg: '#fffbeb', // amber-50 or lightest yellow
    yellowBannerText: '#92400e', // amber-800
    topBarBg: '#1e3a8a',
    navBg: '#ffffff',
    navBorder: '#e5e7eb',
    linkHoverBg: '#f3f4f6',
    linkDefault: '#374151',
    linkHover: '#2563eb',
    searchBg: '#f3f4f6',
    searchBorder: '#d1d5db',
    accent: '#1d4ed8', // blue-700
};

export default function Navbar() {
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const { cart } = useCart();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/test-bank?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    /* Auth state handled by Context */

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const navLinks = [
        {
            to: '/test-bank', label: 'Test Bank',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        },
        {
            to: '/online-test-bank', label: 'Online Test Bank',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        },
        {
            to: '/refund-policy', label: 'Refund Policy',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        },
        {
            to: '/blog', label: 'Blog',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
        },
        {
            to: '/plans', label: 'Plans',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/></svg>
        },
        {
            to: '/contact', label: 'Contact',
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        },
    ];

    return (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {/* Sticky Navigation Wrapper */}
            <header style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                {/* Dark Blue Headline Bar */}
                <div style={{
                    background: COLORS.topBarBg,
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    lineHeight: '1.2'
                }}>
                    Pass Smarter. Study Faster. Stress Less.
                </div>

                {/* Main Navbar */}
                <nav style={{
                    background: COLORS.navBg,
                    borderBottom: `1px solid ${COLORS.navBorder}`,
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                    height: '76px',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        maxWidth: '1440px',
                        margin: '0 auto',
                        padding: '0 24px',
                        justifyContent: 'space-between',
                    }}>

                        {/* Left: Logo */}
                        <Link to="/" style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            textDecoration: 'none', flexShrink: 0,
                        }}>
                            <div style={{
                                width: '32px', height: '32px',
                                color: COLORS.accent,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                            </div>
                            <span style={{
                                fontWeight: 800, fontSize: '18px',
                                color: '#111827',
                                whiteSpace: 'nowrap',
                                letterSpacing: '-0.02em',
                            }}>
                                Nursing Study Source
                            </span>
                        </Link>

                        {/* Middle: Links + Search */}
                        <div className="hidden xl:flex items-center gap-1 flex-1 justify-center px-6">
                            
                            {/* Search Bar */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                background: COLORS.searchBg,
                                border: `1px solid ${COLORS.searchBorder}`,
                                borderRadius: '9999px',
                                padding: '8px 16px',
                                width: '180px',
                                marginRight: '12px',
                            }}>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearch}
                                    style={{
                                        background: 'transparent', border: 'none', outline: 'none',
                                        fontSize: '13.5px', color: '#111827',
                                        flex: 1, minWidth: 0,
                                    }}
                                />
                                <span style={{
                                    fontSize: '10px', color: '#6b7280',
                                    background: '#e5e7eb',
                                    borderRadius: '4px',
                                    padding: '1px 5px', fontWeight: 600,
                                }}>⌘K</span>
                            </div>

                            {/* Links */}
                            {navLinks.map((link) => (
                                <NavLink key={link.to} to={link.to} icon={link.icon} label={link.label} />
                            ))}

                            <span style={{ fontSize: '13px', fontWeight: 700, color: COLORS.linkDefault, cursor: 'pointer', padding: '0 8px' }}>
                                ES
                            </span>
                        </div>

                        {/* Right: User / Auth */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                            {user ? (
                                <div style={{ position: 'relative' }} ref={dropdownRef}>
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        style={{ width: '36px', height: '36px', borderRadius: '50%', background: COLORS.searchBg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none' }}
                                    >
                                        <span style={{ fontSize: '14px', fontWeight: 700 }}>{user.name.charAt(0).toUpperCase()}</span>
                                    </button>
                                    {dropdownOpen && (
                                        <div style={{ position: 'absolute', right: 0, top: '46px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', width: '200px', padding: '8px 0', zIndex: 9999 }}>
                                            <DropdownItem to="/dashboard" label="Dashboard" />
                                            <DropdownItem to="/cart" label="Cart" />
                                            <div style={{ borderTop: '1px solid #f3f4f6', margin: '4px 0' }}></div>
                                            <button 
                                                onClick={logout}
                                                style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '10px 20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#ef4444', textAlign: 'left' }}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" style={{ fontSize: '14px', fontWeight: 600, color: '#374151', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                                        Login
                                    </Link>
                                    <Link to="/register" style={{
                                        background: COLORS.accent, color: '#ffffff', padding: '10px 20px', borderRadius: '8px',
                                        fontSize: '14px', fontWeight: 700, textDecoration: 'none'
                                    }}>
                                        Try Now
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Legal Disclaimer Banner (Yellow) - NON-STICKY */}
            {showBanner && (
                <div style={{
                    background: COLORS.yellowBannerBg,
                    borderBottom: '1px solid #fef3c7',
                    padding: '16px 24px',
                    position: 'relative',
                    color: COLORS.yellowBannerText,
                    zIndex: 0, // Lower than sticky header
                }}>
                    <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{ flexShrink: 0, marginTop: '2px' }}>
                            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                        </div>
                        <div style={{ flex: 1, fontSize: '13px', lineHeight: '1.6' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal Disclaimer</span>
                                <span style={{ background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>Important Notice</span>
                           </div>
                           <p style={{ marginBottom: '8px' }}>
                               The content provided on <strong>Nursing Study Source</strong> is for educational and informational purposes only. All practice questions, study materials, and resources are designed to support learning and exam preparation.
                           </p>
                           <p style={{ marginBottom: '8px' }}>
                               We do not guarantee that the materials are complete, error-free, or identical to any official nursing examination. Nursing Study Source is <strong>not affiliated with or endorsed by</strong> any licensing board, testing authority, or educational institution.
                           </p>
                           <p>
                               Users are responsible for verifying information and using it appropriately. We are <strong>not liable</strong> for any outcomes resulting from the use of this website.
                           </p>
                        </div>
                        <button 
                            onClick={() => setShowBanner(false)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#d97706' }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function NavLink({ to, icon, label }) {
    const [hover, setHover] = useState(false);
    return (
        <Link
            to={to}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 12px', fontSize: '13px', fontWeight: 600,
                color: hover ? COLORS.linkHover : COLORS.linkDefault,
                textDecoration: 'none', borderRadius: '8px',
                transition: 'all 0.2s ease',
            }}
        >
            <span style={{ color: hover ? COLORS.linkHover : '#94a3b8' }}>{icon}</span>
            {label}
        </Link>
    );
}

function DropdownItem({ to, label }) {
    return (
        <Link to={to} style={{ display: 'block', padding: '10px 20px', fontSize: '14px', color: '#374151', textDecoration: 'none' }}>
            {label}
        </Link>
    );
}
