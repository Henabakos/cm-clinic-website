import React from 'react';
import { IconMapPin, IconChevronRight, IconCircleFilled, IconShieldCheck, IconCalendarStats, IconEmergencyBed } from '@tabler/icons-react';
import { Heading, Paragraph, Subheading } from '../ui/Typography';

const Location: React.FC = () => {
  const schedule = [
    { day: 'Mon — Fri', hours: '08:00 — 20:00', load: 'Active Intake', capacity: 85 },
    { day: 'Saturday', hours: '09:00 — 16:00', load: 'Elective Only', capacity: 40 },
    { day: 'Sunday', hours: 'Emergency Only', load: 'Triage Ready', capacity: 15 },
  ];

  return (
    <section id="locations" className="py-32 bg-[#FCFCFA] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Facility Operations</span>
            </div>

            <Heading className="mb-10 !text-5xl lg:!text-6xl leading-[0.95]">
              Real-time <br />
              <span className="text-blue-600 italic">Clinical</span> Availability.
            </Heading>

            <Paragraph className="mb-14 max-w-sm text-lg">
              Our clinical intake is managed via a live capacity matrix to ensure personalized care metrics for every protocol member.
            </Paragraph>

            <div className="space-y-4">
              {schedule.map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Window</span>
                      <p className="text-lg font-bold text-slate-900 tracking-tight">{item.day}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 block mb-1">Hours</span>
                      <p className="text-lg font-bold text-slate-700 tracking-tight">{item.hours}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.load}</span>
                      <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{item.capacity}% LOAD</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${item.capacity}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 p-6 bg-blue-600/5 border border-blue-100 rounded-2xl text-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-500/20">
                <IconEmergencyBed size={24} />
              </div>
              <p className="text-xs font-bold leading-tight text-slate-700">Emergency triage assessment available 24/7 for registered protocol members.</p>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[500px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border-[16px] border-white ">
              <img src="https://i.pinimg.com/1200x/9d/1c/92/9d1c928c942060e410322363d6d252f5.jpg" alt="Clinic" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />

              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="glass-panel px-4 py-2.5 rounded-xl border-white/40 flex items-center gap-2 shadow-xl">
                    <IconCircleFilled className="text-green-500 animate-pulse" size={6} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-950">System: Operational</span>
                  </div>
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                    <IconCalendarStats size={28} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-panel p-10 rounded-[2rem] shadow-2xl border-white/50 backdrop-blur-xl group cursor-pointer hover:bg-white transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-5 items-center">
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
                          <IconMapPin size={28} />
                        </div>
                        <div>
                          <Subheading className="!text-2xl font-black tracking-tight italic">Main Campus</Subheading>
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">Boston Medical District</span>
                        </div>
                      </div>
                      <IconChevronRight className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8">
                      123 Medical Plaza, Health District, Boston, MA 02118
                    </p>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 bg-blue-50 rounded-lg text-[8px] font-bold text-blue-600 uppercase tracking-[0.2em] border border-blue-100">Imaging Hub</div>
                      <div className="px-4 py-2 bg-blue-50 rounded-lg text-[8px] font-bold text-blue-600 uppercase tracking-[0.2em] border border-blue-100">Genomic Lab</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-[8px] border-slate-50 overflow-hidden">
              <div className="text-center">
                <IconShieldCheck className="text-blue-600 mx-auto mb-1" size={24} />
                <p className="text-[8px] font-black uppercase tracking-tighter text-slate-400 leading-tight">Secured<br />Network</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;