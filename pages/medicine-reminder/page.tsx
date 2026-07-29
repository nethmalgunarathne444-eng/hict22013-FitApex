import React, { useState } from 'react';

interface ScheduleItem {
  id: string;
  name: string;
  dosage: string;
  timeSlot: 'Morning' | 'Evening';
  timeLabel: string;
  taken: boolean;
  takenTime?: string;
}

interface ActiveMedicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  status: 'Active' | 'Paused';
}

export default function MedicineReminder() {
  // State for interactivity
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      timeSlot: 'Morning',
      timeLabel: '8:00 AM',
      taken: false,
    },
    {
      id: '2',
      name: 'Atorvastatin',
      dosage: '20mg',
      timeSlot: 'Evening',
      timeLabel: '8:00 PM',
      taken: true,
      takenTime: 'Taken at 8:05 PM',
    },
  ]);

  const [activeMedicines, setActiveMedicines] = useState<ActiveMedicine[]>([
    { id: '1', name: 'Metformin', dosage: '500mg', frequency: 'Once Daily', status: 'Active' },
    { id: '2', name: 'Atorvastatin', dosage: '20mg', frequency: 'Evening', status: 'Active' },
  ]);

  // Form State
  const [form, setForm] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: '',
    startDate: '',
  });

  const toggleSchedule = (id: string) => {
    setSchedule((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextTaken = !item.taken;
          return {
            ...item,
            taken: nextTaken,
            takenTime: nextTaken
              ? `Taken at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
              : undefined,
          };
        }
        return item;
      })
    );
  };

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.dosage) return;

    // Add to Active Medicines
    const newMed: ActiveMedicine = {
      id: Date.now().toString(),
      name: form.name,
      dosage: form.dosage,
      frequency: form.frequency || 'Daily',
      status: 'Active',
    };
    setActiveMedicines((prev) => [...prev, newMed]);

    // Add to Today's Schedule if time provided
    if (form.time) {
      const newScheduleItem: ScheduleItem = {
        id: Date.now().toString(),
        name: form.name,
        dosage: form.dosage,
        timeSlot: parseInt(form.time.split(':')[0], 10) < 12 ? 'Morning' : 'Evening',
        timeLabel: form.time,
        taken: false,
      };
      setSchedule((prev) => [...prev, newScheduleItem]);
    }

    setForm({ name: '', dosage: '', frequency: '', time: '', startDate: '' });
  };

  const handleDeleteMed = (id: string) => {
    setActiveMedicines((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans antialiased">
      <main className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 sm:py-16 lg:py-20 flex flex-col gap-[48px] sm:gap-[80px]">
        
        {/* Header Section */}
        <div>
          <div className="w-[52px] h-[52px] rounded-[14px] bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mb-5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.5 20.5l-6-6a4.95 4.95 0 1 1 7-7l6 6a4.95 4.95 0 1 1-7 7z" />
              <path d="M8.5 8.5l7 7" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-3">
            Medicine Reminder
          </h1>
          <p className="text-[15px] font-normal text-[#64748B] leading-relaxed">
            Keep track of your prescriptions, daily schedules, and adherence trends.
          </p>
        </div>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[48px] items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Action Required / Alert Card */}
            <div className="bg-white border border-[#EF4444] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#0F172A] leading-tight">Action Required</h2>
                <span className="rounded-full px-[10px] py-[4px] text-xs font-semibold text-[#EF4444] bg-[#FFF1F2]">
                  Missed Dose
                </span>
              </div>
              <p className="text-[15px] text-[#64748B] leading-relaxed mt-2">
                You missed your morning dose of <strong className="text-[#0F172A]">Lisinopril</strong> today.
              </p>
            </div>

            {/* Today's Schedule List */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
              <h2 className="text-2xl font-bold text-[#0F172A] leading-tight mb-5">
                Today's Schedule
              </h2>

              {/* Morning Group */}
              <h3 className="text-[15px] font-bold text-[#0F172A] mt-5 mb-3">Morning (8:00 AM)</h3>
              {schedule
                .filter((item) => item.timeSlot === 'Morning')
                .map((item) => (
                  <div key={item.id} className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-[10px] p-[10px_12px] flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={item.taken}
                        onChange={() => toggleSchedule(item.id)}
                        className="w-5 h-5 accent-[#2563EB] cursor-pointer rounded"
                      />
                      <div>
                        <div className="font-bold text-[#0F172A] text-sm sm:text-base">
                          {item.name} - {item.dosage}
                        </div>
                        <div className={`text-xs ${item.taken ? 'text-[#22C55E]' : 'text-[#64748B]'}`}>
                          {item.taken ? item.takenTime : 'Unmarked'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Evening Group */}
              <h3 className="text-[15px] font-bold text-[#0F172A] mt-5 mb-3">Evening (8:00 PM)</h3>
              {schedule
                .filter((item) => item.timeSlot === 'Evening')
                .map((item) => (
                  <div key={item.id} className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-[10px] p-[10px_12px] flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={item.taken}
                        onChange={() => toggleSchedule(item.id)}
                        className="w-5 h-5 accent-[#2563EB] cursor-pointer rounded"
                      />
                      <div>
                        <div className="font-bold text-[#0F172A] text-sm sm:text-base">
                          {item.name} - {item.dosage}
                        </div>
                        <div className={`text-xs ${item.taken ? 'text-[#22C55E]' : 'text-[#64748B]'}`}>
                          {item.taken ? item.takenTime : 'Unmarked'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Add New Medicine Form */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A] leading-tight mb-5">
                Add New Medicine
              </h2>
              <form onSubmit={handleAddMedicine} className="flex flex-col">
                <input
                  className="w-full p-[10px_12px] border border-[#E2E8F0] rounded-lg text-[#0F172A] mb-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-sm"
                  type="text"
                  placeholder="Medicine Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="w-full p-[10px_12px] border border-[#E2E8F0] rounded-lg text-[#0F172A] mb-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-sm"
                  type="text"
                  placeholder="Dosage (e.g., 20mg)"
                  value={form.dosage}
                  onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                />
                <input
                  className="w-full p-[10px_12px] border border-[#E2E8F0] rounded-lg text-[#0F172A] mb-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-sm"
                  type="text"
                  placeholder="Frequency (e.g., Twice daily)"
                  value={form.frequency}
                  onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className="w-full p-[10px_12px] border border-[#E2E8F0] rounded-lg text-[#0F172A] mb-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-sm"
                    type="time"
                    placeholder="Time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                  <input
                    className="w-full p-[10px_12px] border border-[#E2E8F0] rounded-lg text-[#0F172A] mb-3 placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 text-sm"
                    type="date"
                    placeholder="Start Date"
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-[15px] p-[13px_28px] rounded-[10px] transition-colors duration-200"
                >
                  Add to Schedule
                </button>
              </form>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Weekly Adherence Tracker */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
              <h2 className="text-2xl font-bold text-[#0F172A] leading-tight">Weekly Adherence</h2>
              <p className="text-[15px] text-[#64748B] leading-relaxed mt-1">
                Your medication streak for the past 7 days.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <div className="w-6 h-6 rounded bg-[#22C55E]" title="Monday - Taken" />
                <div className="w-6 h-6 rounded bg-[#22C55E]" title="Tuesday - Taken" />
                <div className="w-6 h-6 rounded bg-[#EF4444]" title="Wednesday - Missed" />
                <div className="w-6 h-6 rounded bg-[#22C55E]" title="Thursday - Taken" />
                <div className="w-6 h-6 rounded bg-[#22C55E]" title="Friday - Taken" />
                <div className="w-6 h-6 rounded bg-[#22C55E]" title="Saturday - Taken" />
                <div className="w-6 h-6 rounded bg-[#EF4444]" title="Sunday - Missed (Today)" />
              </div>
            </div>

            {/* Refill Reminder */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#0F172A] leading-tight">Refill Reminders</h2>
                <span className="rounded-full px-[10px] py-[4px] text-xs font-semibold text-[#F59E0B] bg-[#FFFBEB]">
                  Running Low
                </span>
              </div>
              <p className="text-[15px] text-[#64748B] leading-relaxed mt-2">
                You have <strong className="text-[#0F172A]">4 days</strong> of Metformin left. Please request a refill from your provider.
              </p>
              <button className="mt-3 py-2 text-[#3B82F6] font-medium text-[15px] hover:bg-[#F3F4F6] rounded-lg transition-colors inline-flex items-center gap-1">
                Request Refill &rarr;
              </button>
            </div>

            {/* Active Medicines List */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] leading-tight mb-5">
                Active Medicines
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {activeMedicines.map((med) => (
                  <div
                    key={med.id}
                    className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-[28px_24px_24px] shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] leading-tight">
                          {med.name}
                        </h3>
                        <p className="text-[15px] text-[#64748B] leading-relaxed mt-1">
                          {med.dosage} • {med.frequency}
                        </p>
                      </div>
                      <span className="rounded-full px-[10px] py-[4px] text-xs font-semibold text-[#22C55E] bg-[#F0FDF4]">
                        {med.status}
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="bg-none border-none text-[15px] font-medium text-[#374151] px-4 py-2 rounded-lg hover:bg-[#F3F4F6] transition-colors">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMed(med.id)}
                        className="bg-none border-none text-[15px] font-medium text-[#EF4444] px-4 py-2 rounded-lg hover:bg-[#F3F4F6] transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
