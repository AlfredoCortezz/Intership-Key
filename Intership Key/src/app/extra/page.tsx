'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Image as ImageIcon } from 'lucide-react';

const TABS = [
  'Todo', 
  'Teacher Assistant', 
  'Internship', 
  'Investigación científica', 
  'Key Spark', 
  'Servicio Social', 
  'Proyectos Sociales', 
  'Club'
];

export default function Extra() {
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

      const sections = TABS.filter(t => t !== 'Todo');
      let current = 'Todo';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset para header (aprox 250px porque en Extra el header es más alto por las 2 filas)
          if (rect.top <= 400 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setHighlightedTab(current);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const showSection = (sectionName: string) => activeTab === 'Todo' || activeTab === sectionName;

  const renderCard = ({
    sectionId,
    title,
    miniBadge,
    infoLines,
    badgeText,
    badgeClass,
    imageType = 'square',
    imageText
  }: any) => {
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
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-main">{title}</h3>
              {miniBadge && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
                  {miniBadge}
                </span>
              )}
            </div>
          </div>
          <div className="text-sm space-y-1.5 text-main">
            {infoLines.map((line: string, i: number) => {
              // Si la línea tiene formato "Etiqueta: Valor", poner en negrita la etiqueta
              if (line.includes(': ')) {
                const [label, ...rest] = line.split(': ');
                return <p key={i}><span className="font-semibold">{label}:</span> {rest.join(': ')}</p>;
              }
              return <p key={i}>{line}</p>;
            })}
          </div>
        </div>

        <div className={cn(
          "bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative flex-shrink-0 mt-4 md:mt-0",
          imageType === 'circle' ? "w-32 h-32 rounded-full mx-auto md:mx-0" : "w-full md:w-48 h-48 rounded-2xl"
        )}>
          {imageText ? (
            <span className="text-gray-400 font-semibold text-sm">{imageText}</span>
          ) : (
            <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-600" />
          )}
          
          <div className="absolute -top-1 -right-2 bg-blue-500 rounded-full p-1 border-4 border-surface shadow-sm z-10 group cursor-help">
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
      {/* Sticky Header Seguro con flex-wrap para dos filas */}
      <div className="sticky top-0 bg-slate-50 dark:bg-zinc-950 z-40 p-4 md:p-8 border-b border-slate-100 dark:border-zinc-800 mb-8 shadow-sm transition-colors duration-300">
        <h2 className="text-3xl font-bold text-main mb-4 flex items-center gap-2">
          Extra
        </h2>
        <div className="flex flex-wrap gap-3 pb-2">
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

        {/* 1. Teacher Assistant */}
        {showSection('Teacher Assistant') && (
          <section id="Teacher Assistant" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Teacher Assistant',
              title: 'Mecatrónica I',
              badgeText: 'Teacher Assistant',
              badgeClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
              imageType: 'circle',
              imageText: 'Maestro',
              infoLines: [
                'Materia: Mecatrónica Básica',
                'Ciclo en que fue hecho: Ciclo 2 · 2024',
                'Año: 2024',
                'Observaciones: Excelente desempeño académico',
                'Descripción: Apoyo al Dr. Eduardo Torres en laboratorios'
              ]
            })}
          </section>
        )}

        {/* 2. Internship */}
        {showSection('Internship') && (
          <section id="Internship" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Internship',
              title: 'Bosch México',
              miniBadge: 'APRON®',
              badgeText: 'Internship',
              badgeClass: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
              infoLines: [
                'Rol: Ingeniero de manufactura',
                'Año · ciclo: 2024 · Ciclo 2',
                'Créditos académicos acumulados: 6',
                'Duración: 6 meses'
              ]
            })}
          </section>
        )}

        {/* 3. Investigación científica */}
        {showSection('Investigación científica') && (
          <section id="Investigación científica" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Investigación científica',
              title: 'Lab. Robótica Cognitiva · Prof. Dr. Ramírez',
              badgeText: 'Investigación científica',
              badgeClass: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
              infoLines: [
                'Lapso: 6 meses · 8 horas semanales',
                'Tiempo acumulado: 192 horas',
                'Participantes: 4 · Rol: Investigador Junior',
                'Análisis de marcha biopedométrica con sensores inerciales',
                'Ciclo · Año: Ciclo 2 · 2024'
              ]
            })}
          </section>
        )}

        {/* 4. Key Spark */}
        {showSection('Key Spark') && (
          <section id="Key Spark" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Key Spark',
              title: 'Taller de Impresión 3D',
              badgeText: 'Key Spark',
              badgeClass: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
              infoLines: [
                'Talleres: Diseño CAD, Manufactura aditiva',
                'Duración: 16 horas · 2024 · Ciclo 2'
              ]
            })}
          </section>
        )}

        {/* 5. Servicio Social */}
        {showSection('Servicio Social') && (
          <section id="Servicio Social" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={cn(
              "bg-surface rounded-3xl border p-6 lg:p-8 flex flex-col md:flex-row items-center gap-10 transition-all duration-300",
              highlightedTab === 'Servicio Social' ? "ring-4 ring-emerald-500/20 shadow-lg border-emerald-500/50 translate-x-1" : "border-main shadow-sm"
            )}>
              <div className="flex-1 w-full space-y-6">
                <h3 className="text-2xl font-bold text-main">Servicio Social</h3>
                
                <div className="bg-background dark:bg-gray-800/50 rounded-xl overflow-hidden border border-main">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-gray-800/80 text-muted uppercase text-xs border-b border-main">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Actividad</th>
                        <th className="px-6 py-4 font-semibold text-right">Horas realizadas</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-main">
                      <tr>
                        <td className="px-6 py-4 font-medium text-main">Welcome Key</td>
                        <td className="px-6 py-4 text-right font-bold text-muted">250 h</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-main">Summer camp</td>
                        <td className="px-6 py-4 text-right font-bold text-muted">100 h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col items-center">
                <p className="text-main font-medium mb-4 text-center md:text-left w-full">
                  Porcentaje de horas completadas:
                </p>
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
                        <Cell fill="#10B981" />
                        <Cell fill="var(--tw-colors-gray-200, #E5E7EB)" className="dark:fill-gray-700" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className="text-4xl font-bold text-main">70%</span>
                    <span className="text-xs text-muted font-medium mt-1">350h / 500h</span>
                  </div>
                </div>
                <div className="flex justify-center gap-6 text-sm font-medium text-main mt-4 w-full">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Completado
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></span> Restantes
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6. Proyectos Sociales */}
        {showSection('Proyectos Sociales') && (
          <section id="Proyectos Sociales" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Proyectos Sociales',
              title: 'Innovación para Comunidades Rurales',
              badgeText: 'Proyecto Social',
              badgeClass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
              infoLines: [
                'Docente: Dr. Herrera · Electrificación solar',
                'Duración: 4 meses · Año · ciclo: 2024'
              ]
            })}
          </section>
        )}

        {/* 7. Club */}
        {showSection('Club') && (
          <section id="Club" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderCard({
              sectionId: 'Club',
              title: 'Club de Manufactura Avanzada',
              badgeText: 'Club',
              badgeClass: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
              infoLines: [
                'Actividad realizada: Manufactura de piezas de alta precisión',
                'Rol que desempeñó: Vocal y operador CNC',
                'Año · ciclo: 2024'
              ]
            })}
          </section>
        )}

      </div>
    </div>
  );
};
