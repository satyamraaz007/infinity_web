import { useState } from 'react';
import { ProductSpecGroup } from '@/types/products';
import { Search, Layers, FileCheck } from 'lucide-react';

export function ProductSpecsTable({
    specifications,
    productTitle,
}: {
    specifications: ProductSpecGroup[];
    productTitle: string;
}) {
    const [selectedGroup, setSelectedGroup] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState('');

    const groupNames = ['All', ...specifications.map(g => g.group)];

    const filteredGroups = specifications
        .filter(g => selectedGroup === 'All' || g.group === selectedGroup)
        .map(g => ({
            ...g,
            items: g.items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(g => g.items.length > 0);

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {/* Header with Title and Search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6">
                <div>
                    <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
                        <FileCheck size={16} />
                        <span>Certified Engineering Data</span>
                    </div>
                    <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight text-navy">
                        Technical Specifications
                    </h3>
                </div>

                {/* Search in specifications */}
                <div className="relative w-full sm:w-72">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search specs (e.g., standard, rating)..."
                        className="w-full rounded-md border border-slate-300 bg-paper py-2 pl-9 pr-3 text-xs text-navy placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                </div>
            </div>

            {/* Group Category Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
                {groupNames.map(name => {
                    const isSelected = selectedGroup === name;
                    return (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setSelectedGroup(name)}
                            className={`rounded-md px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                                isSelected
                                    ? 'bg-navy text-gold shadow-sm'
                                    : 'bg-paper text-muted hover:bg-slate-200 hover:text-navy'
                            }`}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>

            {/* Specifications Tables */}
            <div className="mt-8 space-y-8">
                {filteredGroups.length === 0 ? (
                    <div className="py-12 text-center text-muted">
                        <Layers size={36} className="mx-auto text-slate-300 mb-2" />
                        <p className="text-sm">No specifications match your search query &ldquo;{searchTerm}&rdquo;.</p>
                        <button
                            type="button"
                            onClick={() => { setSearchTerm(''); setSelectedGroup('All'); }}
                            className="mt-3 text-xs font-bold text-gold hover:underline"
                        >
                            Reset filters
                        </button>
                    </div>
                ) : (
                    filteredGroups.map(group => (
                        <div key={group.group} className="overflow-hidden rounded-lg border border-slate-200">
                            {/* Group Banner */}
                            <div className="bg-navy px-5 py-3 flex items-center justify-between">
                                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                                    {group.group}
                                </h4>
                                <span className="text-[11px] font-medium text-gold/80">
                                    {group.items.length} parameters
                                </span>
                            </div>

                            {/* Table content */}
                            <div className="divide-y divide-slate-100">
                                {group.items.map((item, idx) => (
                                    <div
                                        key={item.name}
                                        className={`grid grid-cols-1 sm:grid-cols-[280px_1fr] px-5 py-3.5 text-xs sm:text-sm transition-colors ${
                                            idx % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'
                                        } hover:bg-gold/5`}
                                    >
                                        <div className="font-bold text-navy flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="mt-1 sm:mt-0 font-medium text-slate-700 leading-relaxed">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Note & Custom Spec Banner */}
            <div className="mt-8 rounded-lg bg-paper p-4 border border-slate-200 text-xs text-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p>
                    <strong className="text-navy">Need custom dimensions or tailored test reports?</strong> Infinity engineering teams provide project-specific technical submittals and BIM models for {productTitle}.
                </p>
                <a
                    href="#rfq-section"
                    className="shrink-0 text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors"
                >
                    Request Technical Data Sheet &rarr;
                </a>
            </div>
        </div>
    );
}

