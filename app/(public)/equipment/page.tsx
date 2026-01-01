"use client";

import React from "react";
import Link from "next/link";
import {
    Heading,
    Paragraph,
    Display,
    Subheading,
} from "@/components/ui/Typography";
import {
    IconArrowLeft,
    IconBolt,
    IconHexagon,
    IconArrowRight,
    IconSettingsAutomation,
    IconAtom2,
} from "@tabler/icons-react";
import Button from "@/components/ui/Button";

const Equipment: React.FC = () => {
    const equipmentList = [
        {
            id: "illumino-seq",
            category: "Molecular Diagnostics",
            name: "Illumina NovaSeq 6000",
            desc: "Ultra-high throughput genomic sequencer enabling full-genome mapping in hours rather than weeks.",
            status: "Certified",
            image:
                "https://images.unsplash.com/photo-1579154235602-3c2c299e0831?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "siemens-fmri",
            category: "Neurology",
            name: "Siemens Magnetom fMRI",
            desc: "7-Tesla magnetic resonance imaging for mapping synaptic density and cognitive neural pathways.",
            status: "Operational",
            image:
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "agilent-bio",
            category: "Proteomics",
            name: "Agilent Bioanalyzer 2100",
            desc: "Automated electrophoresis system for the analysis of DNA, RNA, and biological protein quality.",
            status: "Certified",
            image:
                "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "ge-ct",
            category: "Advanced Imaging",
            name: "GE Revolution CT",
            desc: "Multi-slice spectral CT imaging providing 3D visualizations of biological systems with minimal exposure.",
            status: "Operational",
            image:
                "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-48 pb-20 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <Link
                        href="/expertise"
                        className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:-translate-x-1 transition-transform group"
                    >
                        <IconArrowLeft size={16} />
                        Back to Infrastructure
                    </Link>

                    <div className="inline-flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
                            Clinical Technology
                        </span>
                    </div>

                    <Display className="mb-8 lg:!text-8xl leading-none tracking-tighter">
                        Diagnostic <br />
                        <span className="text-blue-600 italic">Arsenal.</span>
                    </Display>

                    <Paragraph className="max-w-2xl text-lg font-medium text-slate-500 leading-relaxed">
                        Our clinic houses the most advanced molecular and imaging hardware in
                        the private sector. Precision medicine starts with precision tools.
                    </Paragraph>
                </div>
            </section>

            {/* Equipment Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {equipmentList.map((item) => (
                            <Link
                                key={item.id}
                                href={`/equipment-detail/${item.id}`}
                                className="group bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    />

                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-900 border border-slate-100">
                                            {item.category}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-600 rounded-lg text-[8px] font-black uppercase tracking-widest text-white">
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <IconArrowRight size={20} />
                                    </div>
                                </div>

                                <div className="p-10 lg:p-12">
                                    <div className="flex items-center gap-3 mb-4">
                                        <IconHexagon size={16} className="text-blue-600" />
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                                            Asset: {item.id.toUpperCase()}
                                        </span>
                                    </div>

                                    <Subheading className="!text-3xl mb-6 font-black italic tracking-tighter group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </Subheading>

                                    <Paragraph className="text-base text-slate-500 font-medium leading-relaxed">
                                        {item.desc}
                                    </Paragraph>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Uptime & Reliability */}
            <section className="py-32 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-white rounded-[3rem] p-12 lg:p-20 border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 mb-8">
                                    <IconSettingsAutomation
                                        className="text-blue-600"
                                        size={24}
                                    />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                                        Technical Standards
                                    </span>
                                </div>

                                <Heading className="!text-4xl lg:!text-5xl mb-8 tracking-tighter italic">
                                    Engineered for <br />
                                    100% Diagnostic Uptime.
                                </Heading>

                                <Paragraph className="text-slate-500 text-lg mb-10 font-medium">
                                    Every diagnostic asset is calibrated daily by on-site engineers
                                    to ensure biological results exceed clinical standards.
                                </Paragraph>

                                <Button variant="outline" className="border-slate-200">
                                    View Calibration Logs
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                    <IconBolt className="text-blue-600 mb-6" size={24} />
                                    <p className="text-xl font-black italic">Dual</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                        Power Grid Redundancy
                                    </p>
                                </div>

                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                    <IconAtom2 className="text-blue-600 mb-6" size={24} />
                                    <p className="text-xl font-black italic">ISO-13485</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                        Certified Medical Lab
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Equipment;
