import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Image as ImageIcon } from 'lucide-react';

const TABS = ['Todo', 'Créditos WELL', 'Dimensiones WELL', 'Peer Mentor', 'Horas WELL'];

const dimensionesData = [
  { name: 'Físico', value: 95, color: '#3B82F6' },
  { name: 'Espiritual', value: 95, color: '#8B5CF6' },
  { name: 'Social', value: 78, color: '#F97316' },
  { name: 'Emocional', value: 65, color: '#EAB308' },
  { name: 'Financiero', value: 55, color: '#06B6D4' },
  { name: 'Intelectual', value: 40, color: '#22C55E' },
  { name: 'Ambiental', value: 30, color: '#4ADE80' },
];

export const Well = () => {
  const [activeTab, setActiveTab] = useState('Todo');
  const [highlightedTab, setHighlightedTab] = useState('Todo');

  useEffect(() => {
    if (activeTab !== 'Todo') {
      setHighlightedTab(activeTab);
      return;
    }

    const scrollContainer = document.getElementById('export-content');
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop < 50) {
        setHighlightedTab('Todo');
        return;
      }

      const sections = ['Créditos WELL', 'Dimensiones WELL', 'Peer Mentor', 'Horas WELL'];
      let current = 'Todo';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Si la sección cruza el viewport principal visible debajo del sticky nav
          if (rect.top <= 350 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setHighlightedTab(current);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial state

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const showSection = (sectionName: string) => activeTab === 'Todo' || activeTab === sectionName;

  const renderGenericCard = (
    sectionId: string,
    title: string,
    subtitle: string,
    info: string,
    detail: string | null,
    badgeText: string,
    badgeClass: string
  ) => {
    const isHighlighted = highlightedTab === sectionId;
    return (
      <div className={cn(
        "bg-surface rounded-3xl border p-6 flex flex-col md:flex-row gap-6 transition-all duration-300",
        isHighlighted ? "ring-4 ring-primary/20 shadow-lg border-primary/50 translate-x-1" : "border-main shadow-sm"
      )}>
        <div className="flex-1 space-y-4">
          <span className={cn("px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block", badgeClass)}>
            {badgeText}
          </span>
          <div>
            <h3 className="text-xl font-bold text-main mb-1">{title}</h3>
            <p className="text-sm text-muted">{subtitle}</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-main">{info}</p>
            {detail && <p className="text-main">{detail}</p>}
          </div>
        </div>
        <div className="w-full md:w-48 h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center relative flex-shrink-0">
          <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-600" />
          <div className="absolute -top-3 -right-3 bg-blue-500 rounded-full p-1.5 border-4 border-surface shadow-sm z-10 group cursor-help">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none">
              Validado
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-10 relative">
      {/* Sticky Header Seguro */}
      <div className="sticky top-0 bg-slate-50 dark:bg-zinc-950 z-40 p-4 md:p-8 border-b border-slate-100 dark:border-zinc-800 mb-8 shadow-sm transition-colors duration-300">
        <h2 className="text-3xl font-bold text-main mb-4 flex items-center gap-2">
          WELL
        </h2>
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {TABS.map(tab => {
            const isHighlighted = activeTab === 'Todo' ? highlightedTab === tab : activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setHighlightedTab(tab);
                  if (tab !== 'Todo') {
                    const scrollContainer = document.getElementById('export-content');
                    if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  isHighlighted 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-surface text-muted border border-main hover:border-primary/50 hover:text-main"
                )}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Contenedor de Secciones */}
      <div className="space-y-12 px-4 md:px-8">

        {/* 1. Créditos WELL */}
        {showSection('Créditos WELL') && (
          <section id="Créditos WELL" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderGenericCard(
              'Créditos WELL',
              'Charla: Diseño Sostenible',
              'Auditorio Key Institute · Presencial',
              '12 horas · Co-curricular / Act. WELL · 2025',
              null,
              'Créditos WELL',
              'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
            )}
            
            {renderGenericCard(
              'Créditos WELL', // Reutilizando el mismo ID para el highlight
              'Hike Sierra de Guadalupe',
              'Parque ecológico · Actividad física y bienestar',
              '8 horas · Co-curricular · 2025',
              null,
              'Créditos WELL',
              'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
            )}
          </section>
        )}

        {/* 2. Dimensiones WELL */}
        {showSection('Dimensiones WELL') && (
          <section id="Dimensiones WELL" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={cn(
              "bg-surface rounded-3xl border p-6 lg:p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300",
              highlightedTab === 'Dimensiones WELL' ? "ring-4 ring-primary/20 shadow-lg border-primary/50 translate-x-1" : "border-main shadow-sm"
            )}>
              <div className="w-full md:w-72 h-72 relative flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dimensionesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {dimensionesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 w-full space-y-4">
                {dimensionesData.map(d => (
                  <div key={d.name} className="flex items-center gap-4">
                    <span className="w-24 text-right text-sm font-medium text-muted">{d.name}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-full h-6 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 flex items-center px-3" 
                        style={{ width: `${d.value}%`, backgroundColor: d.color }}
                      >
                        <span className="text-[11px] text-white font-bold">{d.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. Peer Mentor */}
        {showSection('Peer Mentor') && (
          <section id="Peer Mentor" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderGenericCard(
              'Peer Mentor',
              'Peer Mentor Semestral',
              'Mentoría entre pares · 15 estudiantes asesorados',
              'Ciclo 2 · 2025 · Certificado por Key Institute',
              'Duración: 1 semestre',
              'Peer Mentor',
              'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
            )}
          </section>
        )}

        {/* 4. Horas WELL */}
        {showSection('Horas WELL') && (
          <section id="Horas WELL" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={cn(
              "bg-surface rounded-3xl border p-6 lg:p-8 flex flex-col md:flex-row items-center gap-10 transition-all duration-300",
              highlightedTab === 'Horas WELL' ? "ring-4 ring-emerald-500/20 shadow-lg border-emerald-500/50 translate-x-1" : "border-main shadow-sm"
            )}>
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-main mb-6">Horas WELL</h3>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10 w-full md:w-auto">
                <div className="w-48 h-48 relative flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[{ value: 70 }, { value: 30 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                        startAngle={90}
                        endAngle={-270}
                      >
                        <Cell fill="#10B981" /> {/* Emerald 500 */}
                        <Cell fill="var(--tw-colors-gray-200, #E5E7EB)" className="dark:fill-gray-700" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className="text-4xl font-bold text-main">70%</span>
                    <span className="text-xs text-muted font-medium mt-1">57h / 81h</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-main font-medium mb-4 text-center md:text-left">
                    Porcentaje de horas completadas: <span className="text-emerald-500 font-bold">70%</span>
                  </p>
                  <div className="flex justify-center md:justify-start gap-6 text-sm font-medium text-main">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Completado
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></span> Restantes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
