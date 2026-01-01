
import React from 'react';
import { IconSearch, IconAdjustmentsAlt, IconChartLine, IconArrowRight } from '@tabler/icons-react';
import { Heading, Paragraph, Subheading } from '../ui/Typography';

const Methodology: React.FC = () => {
  const phases = [
    {
      step: '01',
      title: 'Deep Diagnostics',
      desc: 'Our process begins with an exhaustive biological baseline using genome sequencing and advanced proteomics.',
      icon: <IconSearch className="text-blue-600" size={24} />
    },
    {
      step: '02',
      title: 'Precision Care',
      desc: 'Based on data, our board curate a bespoke intervention plan including pharmacological and nutritional protocols.',
      icon: <IconAdjustmentsAlt className="text-blue-600" size={24} />
    },
    {
      step: '03',
      title: 'Live Optimization',
      desc: 'Health is dynamic. We use continuous monitoring via medical-grade wearables to refine your protocol.',
      icon: <IconChartLine className="text-blue-600" size={24} />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end mb-20">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">The Healis Cycle</span>
            </div>
            <Heading className="mb-6">A 3-Phase protocol for <br /><span className="text-blue-600">biological mastery.</span></Heading>
            <Paragraph className="max-w-xl text-slate-500 font-medium">
              We have moved past the reactive medical model to a system built on prediction and prevention.
            </Paragraph>
          </div>
          <div className="lg:w-1/3 lg:text-right pb-2">
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group">
              Clinical Whitepaper <IconArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.step} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 transition-transform">
                {phase.icon}
              </div>
              <span className="text-3xl font-black text-blue-600/10 mb-2 block tracking-tight">{phase.step}</span>
              <Subheading className="mb-4">{phase.title}</Subheading>
              <Paragraph className="text-sm text-slate-500 font-medium leading-relaxed">
                {phase.desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
