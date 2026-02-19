
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import {
    LayoutDashboard,
    Search,
    FileText,
    Calculator,
    Scale,
    KanbanSquare,
    Settings,
    Sun,
    Moon,
    CheckCircle,
    ArrowUp,
    ArrowDown,
    Menu,
    X,
    Home,
    DollarSign,
    TrendingUp,
    Users,
    Building,
    Briefcase,
    FileSignature,
    PenTool,
    Import,
    ChevronRight,
    MapPin,
    Lock,
    Unlock,
    AlertCircle
} from 'lucide-react';

const WholesaleNexus = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [darkMode, setDarkMode] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Toggle Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // Navigation Items
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'zillow', label: 'Zillow Intelligence', icon: Search },
        { id: 'pipeline', label: 'Pipeline Tracking', icon: KanbanSquare },
        { id: 'documents', label: 'Document Center', icon: FileText },
        { id: 'roi', label: 'ROI Analysis', icon: Calculator },
        { id: 'legal', label: 'Legal Hub', icon: Scale },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    WholesaleNexus
                </h1>
                <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="flex h-screen overflow-hidden">

                {/* Sidebar */}
                <aside
                    className={`
            absolute md:relative z-40 h-full w-64 transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20'}
            bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 flex flex-col
          `}
                >
                    {/* Logo Area */}
                    <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-slate-800">
                        {sidebarOpen ? (
                            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                                Nexus
                            </span>
                        ) : (
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                                N
                            </div>
                        )}
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 overflow-y-auto py-4 space-y-2 px-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    if (window.innerWidth < 768) setSidebarOpen(false);
                                }}
                                className={`
                  w-full flex items-center p-3 rounded-2xl transition-all duration-200 group
                  ${activeTab === item.id
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm'
                                        : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'}
                `}
                            >
                                <item.icon size={22} className={`shrink-0 ${activeTab === item.id ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                                {sidebarOpen && (
                                    <span className="ml-3 font-medium whitespace-nowrap">{item.label}</span>
                                )}
                                {!sidebarOpen && activeTab === item.id && (
                                    <div className="absolute left-16 bg-blue-600 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                        {item.label}
                                    </div>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="p-4 border-t border-gray-200 dark:border-slate-800 space-y-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`
                w-full flex items-center justify-center p-3 rounded-2xl transition-colors
                ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}
              `}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            {sidebarOpen && <span className="ml-3 font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto relative scroll-smooth bg-gray-50 dark:bg-slate-900">
                    <div className="container mx-auto p-4 md:p-8 max-w-7xl animate-fade-in">

                        {/* Dynamic Header */}
                        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white pb-1">
                                    {navItems.find(i => i.id === activeTab)?.label}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400">
                                    Welcome back, Investor. Here's your portfolio overview.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-shadow">
                                    <Settings size={18} />
                                    <span>Settings</span>
                                </button>
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold ring-2 ring-white dark:ring-slate-700">
                                    JD
                                </div>
                            </div>
                        </header>

                        {/* Content Views */}
                        <div className="min-h-[600px]">
                            {activeTab === 'dashboard' && <DashboardView />}
                            {activeTab === 'zillow' && <ZillowIntelligenceView />}
                            {activeTab === 'pipeline' && <PipelineTrackingView />}
                            {activeTab === 'documents' && <DocumentCenterView />}
                            {activeTab === 'roi' && <ROIAnalysisView />}
                            {activeTab === 'legal' && <LegalHubView />}
                        </div>

                    </div>

                    {/* Navigation Hub (Corner Action) */}
                    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-gray-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-blue-600 dark:text-blue-400"
                        >
                            <ArrowUp size={20} />
                        </button>
                        <button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-gray-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-blue-600 dark:text-blue-400"
                        >
                            <ArrowDown size={20} />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

// --- Sub-Components ---

const DashboardView = () => {
    const stats = [
        { label: 'Active Deals', value: '12', change: '+2', icon: Briefcase, color: 'text-blue-500' },
        { label: 'Pipeline Value', value: '$485k', change: '+12%', icon: DollarSign, color: 'text-green-500' },
        { label: 'Total Leads', value: '1,240', change: '+58', icon: Users, color: 'text-purple-500' },
        { label: 'Est. Profit', value: '$82k', change: '+5%', icon: TrendingUp, color: 'text-amber-500' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50 hover:shadow-lg transition-all md:hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-slate-700/50 ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-sm font-medium text-green-500 flex items-center gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                {stat.change} <ArrowUp size={12} />
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold mb-6">Revenue Overview</h3>
                    <div className="h-64 flex items-end justify-between px-2 gap-2">
                        {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((h, i) => (
                            <div key={i} className="w-full bg-blue-100 dark:bg-slate-700 rounded-t-xl relative group overflow-hidden">
                                <div
                                    style={{ height: `${h}%` }}
                                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl transition-all duration-500 ease-out group-hover:opacity-90"
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-medium text-slate-400">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 items-start p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-slate-700 flex items-center justify-center text-blue-600 shrink-0">
                                    <AlertCircle size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">New Lead Acquired</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">123 Maple Avenue added to pipeline via Zillow Import.</p>
                                    <span className="text-[10px] text-slate-400 mt-2 block">2 hours ago</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ZillowIntelligenceView = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const properties = [
        { address: '123 Oak Lane', city: 'Austin, TX', price: '$450,000', beds: 4, baths: 3, sqft: 2400, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800' },
        { address: '8592 Pine Street', city: 'Dallas, TX', price: '$325,000', beds: 3, baths: 2, sqft: 1800, img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800' },
        { address: '442 Elm Drive', city: 'Houston, TX', price: '$295,000', beds: 3, baths: 2, sqft: 1650, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Market Intelligence</h2>
                    <p className="mb-8 text-blue-100 text-lg">Scrape market data instantly. Find off-market gems and analyze potential flips in seconds.</p>

                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex gap-2 shadow-2xl">
                        <div className="flex-1 flex items-center px-4">
                            <Search className="text-white/70 mr-3" />
                            <input
                                type="text"
                                placeholder="Enter City, Zip, or Address..."
                                className="bg-transparent border-none outline-none text-white placeholder-white/60 w-full font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button 
                            onClick={() => alert(`Analyzing market for: ${searchTerm || "Current Location"}`)}
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                        >
                            Analyze
                        </button>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 mix-blend-overlay"></div>
            </div>

            </div>
            
            <div className="flex justify-center my-6">
                <button 
                  onClick={() => alert("Market analysis simulation started... This would trigger a real scraper in the production app.")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    Run Deep Market Scan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((prop, i) => (
                    <div key={i} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="h-64 relative overflow-hidden">
                            <img src={prop.img} alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm font-bold border border-white/20">
                                Market Match: 94%
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{prop.price}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">{prop.address}, {prop.city}</p>
                                </div>
                                <div className="p-2 bg-blue-50 dark:bg-slate-700 rounded-full text-blue-600 dark:text-blue-400">
                                    <BookmarkIconWrapper size={20} />
                                </div>
                            </div>

                            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6 border-t border-gray-100 dark:border-slate-700 pt-4">
                                <span className="flex items-center gap-1"><Home size={16} /> {prop.beds} bds</span>
                                <span className="flex items-center gap-1"><Building size={16} /> {prop.baths} ba</span>
                                <span className="flex items-center gap-1"><MapPin size={16} /> {prop.sqft} sqft</span>
                            </div>

                            <button 
                                onClick={() => alert(`Imported ${prop.address} to Pipeline!`)}
                                className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                <Import size={18} />
                                Import to Pipeline
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

const DocumentCenterView = () => {
    const [template, setTemplate] = useState('purchase');

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-200px)] min-h-[600px]">
            {/* Editor Sidebar */}
            <div className="w-full lg:w-1/3 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50 p-6 overflow-y-auto">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="text-blue-500" /> Contract Engine
                </h3>

                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-semibold text-slate-500 mb-2 block">Contract Type</label>
                        <div className="flex p-1 bg-gray-100 dark:bg-slate-700 rounded-xl">
                            {['purchase', 'assignment'].map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTemplate(t)}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg capitalize transition-all ${template === t ? 'bg-white dark:bg-slate-600 shadow text-blue-600 dark:text-white' : 'text-slate-500'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Buyer Details</label>
                            <input type="text" placeholder="Full Legal Name" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            <input type="text" placeholder="Mailing Address" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Property Details</label>
                            <input type="text" placeholder="Subject Property Address" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            <input type="number" placeholder="Purchase Price ($)" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                    </div>

                    <button
                        onClick={() => alert("Contract generated and sent for e-signature!")}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                    >
                        <FileSignature size={20} />
                        Generate & Sign
                    </button>
                </div>
            </div>

            {/* Document Preview */}
            <div className="flex-1 bg-gray-200 dark:bg-slate-900/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 overflow-y-auto">
                <div className="bg-white text-slate-900 min-h-[800px] p-12 shadow-2xl mx-auto max-w-3xl relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Scale size={100} />
                    </div>

                    <h1 className="text-3xl font-serif font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
                        Real Estate {template} Agreement
                    </h1>

                    <div className="space-y-6 font-serif leading-relaxed text-justify">
                        {template === 'purchase' ? (
                            <>
                                <p>
                                    <strong>REAL ESTATE PURCHASE AGREEMENT</strong>
                                </p>
                                <p>
                                    <strong>THIS AGREEMENT</strong> made this <span className="bg-blue-100 px-2">12th</span> day of <span className="bg-blue-100 px-2">December, 2024</span>, by and between <strong>[BUYER NAME]</strong> (hereinafter referred to as "Buyer") and <strong>[SELLER NAME]</strong> (hereinafter referred to as "Seller").
                                </p>

                                <p>
                                    <strong>1. PROPERTY.</strong> Buyer agrees to purchase and Seller agrees to sell the property located at:
                                    <br />
                                    <span className="block my-2 p-3 bg-gray-50 border border-gray-200 italic text-center">[Property Address Will Appear Here]</span>
                                    together with all fixtures, landscaping, improvements, and appurtenances defined herein.
                                </p>

                                <p>
                                    <strong>2. PURCHASE PRICE.</strong> The total purchase price to be paid for the Property shall be
                                    <span className="mx-2 font-bold">$[Price]</span>, payable as follows:
                                    Earnest money deposit of $1,000.00 to be held in escrow.
                                </p>

                                <p>
                                    <strong>3. CLOSING.</strong> Closing shall occur on or before [Date], at a title company mutually agreed upon by both parties.
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    <strong>ASSIGNMENT OF CONTRACT AGREEMENT</strong>
                                </p>
                                <p>
                                    <strong>THIS ASSIGNMENT</strong> is made and entered into as of this ____ day of _______, 20__, by and between <strong>[ASSIGNOR NAME]</strong> ("Assignor") and <strong>[ASSIGNEE NAME]</strong> ("Assignee").
                                </p>

                                <p>
                                    <strong>1. THE CONTRACT.</strong> Assignor entered into a Purchase and Sale Agreement with the original Seller for the property located at:
                                    <br />
                                    <span className="block my-2 p-3 bg-gray-50 border border-gray-200 italic text-center">[Subject Property Address]</span>
                                </p>

                                <p>
                                    <strong>2. ASSIGNMENT FEE.</strong> In consideration of the assignment of said contract, the Assignee agrees to pay the Assignor an Assignment Fee of
                                    <span className="mx-2 font-bold bg-yellow-100">$[Wholesale Fee]</span>
                                    payable at closing.
                                </p>

                                <p>
                                    <strong>3. CLOSING & COSTS.</strong> Assignee assumes all obligations, costs, and risks associated with the original Purchase Agreement, including closing costs and earnest money reimbursement.
                                </p>
                            </>
                        )}

                        <div className="mt-20 pt-10 border-t border-black grid grid-cols-2 gap-20">
                            <div>
                                <div className="h-12 border-b border-black mb-2 font-handwriting text-2xl text-blue-700 pl-4 pt-2">
                                    Sign Here...
                                </div>
                                <p className="text-xs uppercase font-bold">{template === 'purchase' ? 'Buyer' : 'Assignor'} Signature</p>
                            </div>
                            <div>
                                <div className="h-12 border-b border-black mb-2"></div>
                                <p className="text-xs uppercase font-bold">{template === 'purchase' ? 'Seller' : 'Assignee'} Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ROIAnalysisView = () => {
    const [arv, setArv] = useState(350000);
    const [repairs, setRepairs] = useState(45000);
    const [fee, setFee] = useState(10000);
    const percentRule = 0.70;

    const mao = (arv * percentRule) - repairs - fee;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">MAO Calculator</h2>
                <p className="text-slate-500 dark:text-slate-400">Maximum Allowable Offer based on the 70% rule</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">After Repair Value (ARV)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input
                                type="number"
                                value={arv}
                                onChange={(e) => setArv(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">Estimated Repairs</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input
                                type="number"
                                value={repairs}
                                onChange={(e) => setRepairs(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">Wholesale Fee</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input
                                type="number"
                                value={fee}
                                onChange={(e) => setFee(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 space-y-2">
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Target Offer Price</span>
                        <h3 className="text-6xl font-bold tracking-tighter">
                            ${mao.toLocaleString()}
                        </h3>
                        <p className="text-slate-400 max-w-xs mx-auto mt-4 text-sm">
                            This offer leaves you with ${fee.toLocaleString()} profit and the investor with 30% equity spread.
                        </p>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2 mt-8 overflow-hidden">
                        <div className="bg-green-500 w-[70%] h-full"></div>
                    </div>
                    <div className="flex justify-between w-full mt-2 text-xs text-slate-400">
                        <span>Risk: Low</span>
                        <span>Margin: Healthy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PipelineTrackingView = () => {
    const [pipelineDeals, setPipelineDeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDeals = async () => {
            if (!supabase) {
                // Fallback to mock data if no Supabase connection
                setPipelineDeals([
                    { id: 1, address: '123 Oak Lane', stage: 'Under Contract', value: '$12,000', date: 'Oct 12', status: 'active' },
                    { id: 2, address: '442 Elm Drive', stage: 'Prospecting', value: '$8,500', date: 'Nov 01', status: 'pending' },
                    { id: 3, address: '8592 Pine Street', stage: 'Closed', value: '$15,200', date: 'Sep 28', status: 'closed' },
                    { id: 4, address: '777 Lucky Ave', stage: 'Negotiation', value: '$10,000', date: 'Nov 05', status: 'active' },
                ]);
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('deals')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching deals:', error);
                setPipelineDeals([
                    { id: 1, address: '123 Oak Lane', stage: 'Under Contract', value: '$12,000', date: 'Oct 12', status: 'active' },
                    { id: 2, address: '442 Elm Drive', stage: 'Prospecting', value: '$8,500', date: 'Nov 01', status: 'pending' },
                    { id: 3, address: '8592 Pine Street', stage: 'Closed', value: '$15,200', date: 'Sep 28', status: 'closed' },
                    { id: 4, address: '777 Lucky Ave', stage: 'Negotiation', value: '$10,000', date: 'Nov 05', status: 'active' },
                ]);
            } else {
                setPipelineDeals(data);
            }
            setLoading(false);
        };

        fetchDeals();
    }, []);

    const getStatusStyle = (status) => {
        if (status === 'active') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
        if (status === 'closed') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-xl font-bold">Deal Pipeline</h3>
                <button
                    onClick={() => alert("Create New Deal modal would open here.")}
                    className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold"
                >
                    + New Deal
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Property</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Stage</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Est. Profit</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date Added</th>
                            <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                        {loading && (
                            <tr><td colSpan="5" className="p-4 text-center text-slate-500">Loading pipeline data...</td></tr>
                        )}
                        {!loading && pipelineDeals.map(deal => (
                            <tr key={deal.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-bold text-slate-900 dark:text-white">{deal.address}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(deal.status)}`}>
                                        {deal.stage}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-700 dark:text-slate-300">
                                    {deal.value}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                    {deal.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => alert(`Editing deal: ${deal.address}`)}
                                        className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const LegalHubView = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700/50 text-center">
                <h2 className="text-2xl font-bold mb-4">Compliance Search</h2>
                <div className="max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search by State (e.g. Florida)..."
                        className="w-full pl-5 pr-12 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button className="absolute right-2 top-2 p-2 bg-blue-600 rounded-xl text-white">
                        <Search size={20} />
                    </button>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                    Always verify wholesaling laws in your target market. Disclaimer: This is not legal advice.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Double Closing', 'Assignment of Contract', 'Novation Agreement', 'Earnest Money', 'Probate Leads', 'Subject To'].map((term, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">{term}</h3>
                            <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                            Common real estate investing term used throughout the wholesaling process. Click to view detailed definition and legal context.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper Wrapper for icons used in map (handled locally to avoid clutter in main component)
const BookmarkIconWrapper = ({ size }) => <Briefcase size={size} />;

export default WholesaleNexus;
