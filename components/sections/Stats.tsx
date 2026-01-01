
import React from 'react';
import { IconArrowUpRight, IconActivity } from '@tabler/icons-react';
import { Heading, Paragraph } from '../ui/Typography';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <IconActivity className="text-blue-600" size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Performance Metrics</span>
            </div>
            
            <Heading className="mb-6 !text-4xl md:!text-5xl">
              Precision metrics for <br /> 
              better outcomes.
            </Heading>
            
            <Paragraph className="text-slate-500 mb-8 max-w-sm">
              Our data-driven approach ensures every treatment plan is measured and optimized for success.
            </Paragraph>
            
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 group">
              Clinical Outcomes Report
              <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '99', unit: '%', label: 'Diagnostic Accuracy' },
                { value: '15', unit: 'm', label: 'Avg Consultation' },
                { value: '12', unit: 'k', label: 'Patients Managed' }
              ].map((stat, i) => (
                <div key={i} className="p-10 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center">
                  <p className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                    {stat.value}<span className="text-blue-600 text-2xl ml-0.5">{stat.unit}</span>
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
