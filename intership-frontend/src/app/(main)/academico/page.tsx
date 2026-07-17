"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { cn } from '@/utils/cn';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Trophy, FileText, Send, Trash2, Image as ImageIcon, Plus, X } from 'lucide-react';

const TABS = ['Todo', 'PBL', 'Cursos Libres y certs', 'Retos', 'Horas Key', 'Experiencias Internacionales'];

const INITIAL_CARDS = [
  {
    id: '1',
    badge: 'PBL',
    badgeType: 'PBL',
    section: 'PBL',
    title: 'Diseño de prótesis biónica',
    subtitle: 'Proyecto para paciente real · Diseño biomecánico',
    info: 'Rol: Líder de proyecto · 2024 · Ciclo 2',
    materia: 'Diseño de sistemas biomecánicos',
    nota: '9.5',
    hasActions: true,
  },
  {
    id: '2',
    badge: 'PBL',
    badgeType: 'PBL',
    section: 'PBL',
    title: 'Automatización línea de producción',
    subtitle: 'Industria manufacturera local · Sistemas de control',
    info: 'Rol: Ingeniero de sistemas · 2025 · Ciclo 1',
    materia: 'Automatización industrial',
    nota: '9.0',
    checkmark: true,
  },
  {
    id: '3',
    badge: 'Reto',
    badgeType: 'Retos',
    section: 'Retos',
    title: 'Reto Innovación Sostenible — TechHub',
    subtitle: 'Desarrollo de solución de energía renovable',
    info: 'Rol: Co-creador · 2024 · Ciclo 1',
    materia: 'Innovación y emprendimiento',
    trophy: true,
    checkmark: true,
    customTrophyText: 'Primer lugar'
  },
  {
    id: '4',
    badge: 'Cursos y certs',
    badgeType: 'Cursos',
    section: 'Cursos Libres y certs',
    title: 'Machine Learning Fundamentals',
    subtitle: 'Coursera · Google · Obligatorio',
    info: 'Año y ciclo: 2024 · Ciclo 2 | Código: CERT-ML-2024-001',
    materia: 'Sistemas Inteligentes',
    checkmark: true,
    hasCert: true
  },
  {
    id: '5',
    badge: 'Exp. Internacionales',
    badgeType: 'Experiencias',
    section: 'Experiencias Internacionales',
    title: 'DE Alemania',
    subtitle: 'Institución: TU München · Ingeniería de Sistemas',
    info: 'Cursos tomados: 3 · 2024 · Ciclo 1',
    materia: 'Intercambio Académico',
    checkmark: true,
    takeaways: [
      'Diseño industrial avanzado',
      'Manufactura de precisión',
      'Trabajo interdisciplinario',
      'Mejor amigo del viaje: Carlos M.'
    ]
  }
];

const Badge = ({ children, type }: { children: React.ReactNode, type: 'PBL' | 'Retos' | 'Cursos' | 'Experiencias' }) => {
  const styles = {
    PBL: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    Retos: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    Cursos: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    Experiencias: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  };
  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider", styles[type])}>
      {children}
    </span>
  );
};

const HorasKeySection = () => {
  const pieData = [
    { name: 'Completado', value: 57 },
    { name: 'Restante', value: 24 }
  ];
  const COLORS = ['#31E083', '#E5E5E8'];
  
  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-main p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="flex-1 space-y-6 w-full">
        <div>
          <h3 className="text-2xl font-bold text-main mb-2">Horas Key</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted">Beca Key Transform:</p>
              <p className="font-semibold text-main text-lg">80%</p>
            </div>
            <div>
              <p className="text-muted">Duración de la beca:</p>
              <p className="font-semibold text-main text-lg">3 años</p>
            </div>
            <div>
              <p className="text-muted">Horas anuales:</p>
              <p className="font-semibold text-main text-lg">27 h</p>
            </div>
          </div>
        </div>
        
        <div className="bg-background dark:bg-gray-800/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">Actividades realizadas</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center border-b border-main pb-2">
              <span className="text-main font-medium">Welcome Key</span>
              <span className="text-muted font-bold">14 h</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-main font-medium">Summer camp</span>
              <span className="text-muted font-bold">10 h</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-72 flex flex-col items-center">
        <h4 className="text-sm font-semibold text-muted mb-4 text-center">Porcentaje de horas completadas:</h4>
        <div className="w-48 h-48 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-3xl font-bold text-main">70%</span>
            <span className="text-xs text-muted font-medium mt-1">57h / 81h</span>
          </div>
        </div>
        <div className="flex gap-4 mt-6 text-xs font-medium">
          <div className="flex items-center gap-1.5 text-main">
            <span className="w-3 h-3 rounded-full bg-green"></span> Completado
          </div>
          <div className="flex items-center gap-1.5 text-main">
            <span className="w-3 h-3 rounded-full bg-gray-light"></span> Restantes
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ item, onDelete }: { item: any, onDelete: (id: string) => void }) => {
  return (
    <div className="bg-surface rounded-3xl shadow-sm border border-main p-6 flex flex-col md:flex-row gap-6 transition-all hover:shadow-card">
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <Badge type={item.badgeType}>{item.badge}</Badge>
          {item.nota && (
            <div className="text-right">
              <span className="text-xs text-muted block mb-1">Nota destacada</span>
              <span className="text-2xl font-bold text-primary">{item.nota}</span>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-main mb-1">{item.title}</h3>
          <p className="text-sm text-muted">{item.subtitle}</p>
        </div>
        
        <div className="space-y-1.5 text-sm">
          <p className="text-main"><span className="font-medium">Info:</span> {item.info}</p>
          <p className="text-main"><span className="font-medium">Materia:</span> {item.materia}</p>
          
          {item.customTrophyText && (
            <p className="text-yellow-600 dark:text-yellow-500 font-bold flex items-center gap-2 mt-2 bg-yellow-50 dark:bg-yellow-900/20 w-max px-3 py-1.5 rounded-lg">
              <Trophy className="w-4 h-4" /> {item.customTrophyText}
            </p>
          )}

          {item.takeaways && (
            <div className="mt-3">
              <p className="font-semibold text-main mb-2">Takeaways:</p>
              <ul className="list-disc list-inside text-muted space-y-1 ml-1">
                {item.takeaways.map((t: string, i: number) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="pt-4 flex flex-wrap gap-3">
          {item.hasActions && (
             <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
               <Send className="w-4 h-4" /> Reenviar
             </button>
          )}
          {item.hasCert && (
             <a href="#" className="flex items-center gap-2 text-primary hover:text-blue-700 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
               <FileText className="w-4 h-4" /> Ver certificado
             </a>
          )}
          
          <button 
            onClick={() => onDelete(item.id)}
            className="flex items-center gap-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white dark:bg-red-900/20 dark:hover:bg-red-500 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Eliminar
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-48 h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center relative flex-shrink-0">
        <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-600" />
        
        {item.checkmark && (
          <div className="absolute -top-3 -right-3 bg-blue-500 rounded-full p-1.5 border-4 border-surface shadow-sm group cursor-help z-10">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none">
              Verificado por el profesor
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}

        {item.trophy && (
          <div className={cn("absolute -top-3 bg-yellow-400 rounded-full p-1.5 border-4 border-surface shadow-sm group cursor-help z-10", item.checkmark ? "right-7" : "-right-3")}>
            <Trophy className="w-5 h-5 text-white" />
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max bg-gray-800 text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none">
              Premio validado
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AcademicoPage() {
  const [activeTab, setActiveTab] = useState('Todo');
  const [highlightedTab, setHighlightedTab] = useState('Todo');
  const [cards, setCards] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({ title: '', section: 'PBL', materia: '' });

  useEffect(() => {
    axios.get('/api/academic-activities')
      .then(res => setCards(res.data))
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

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

      const sections = ['Horas Key', 'PBL', 'Retos', 'Cursos Libres y certs', 'Experiencias Internacionales'];
      let current = 'Todo';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setHighlightedTab(current);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab, cards]); // Depend on cards so it recalculates if height changes

  const showSection = (sectionName: string) => activeTab === 'Todo' || activeTab === sectionName;

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/academic-activities/${id}`);
      setCards(cards.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting activity', error);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActivity.title) return;
    
    // Mapeo básico de badge
    const badgeTypeMap: any = {
      'PBL': 'PBL',
      'Retos': 'Retos',
      'Cursos Libres y certs': 'Cursos',
      'Experiencias Internacionales': 'Experiencias'
    };

    const badgeMap: any = {
      'PBL': 'PBL',
      'Retos': 'Reto',
      'Cursos Libres y certs': 'Cursos y certs',
      'Experiencias Internacionales': 'Exp. Internacionales'
    };

    const newItem = {
      section: newActivity.section,
      badge: badgeMap[newActivity.section] || 'NUEVO',
      badgeType: badgeTypeMap[newActivity.section] || 'PBL',
      title: newActivity.title,
      subtitle: 'Añadido recientemente',
      info: 'Nuevo elemento',
      materia: newActivity.materia || 'Por definir',
      checkmark: true, // Agregamos un check por defecto a los nuevos
    };
    
    try {
      const res = await axios.post('/api/academic-activities', newItem);
      setCards([res.data, ...cards]);
      setIsModalOpen(false);
      setNewActivity({ title: '', section: 'PBL', materia: '' });
    } catch (error) {
      console.error('Error adding activity', error);
    }
  };

  const renderSectionCards = (sectionName: string) => {
    const sectionCards = cards.filter(c => c.section === sectionName);
    if (sectionCards.length === 0) {
      return <div className="text-muted text-sm italic">No hay actividades en esta sección.</div>;
    }
    return (
      <div className="grid grid-cols-1 gap-6">
        {sectionCards.map(item => (
          <Card key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-10 relative">
      {/* Header Sticky Seguro */}
      <div className="sticky top-0 bg-slate-50 dark:bg-zinc-950 z-40 p-4 md:p-8 border-b border-slate-100 dark:border-zinc-800 mb-8 shadow-sm transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          <h2 className="text-3xl font-bold text-main">Académico</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary text-white hover:bg-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition-colors w-max"
          >
            <Plus className="w-4 h-4" /> Agregar Actividad
          </button>
        </div>
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
        
        {showSection('Horas Key') && (
          <section id="Horas Key" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main px-2">Resumen Horas Key</h3>
            <HorasKeySection />
          </section>
        )}

        {showSection('PBL') && (
          <section id="PBL" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main px-2">Project Based Learning (PBL)</h3>
            {renderSectionCards('PBL')}
          </section>
        )}

        {showSection('Retos') && (
          <section id="Retos" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main px-2">Retos</h3>
            {renderSectionCards('Retos')}
          </section>
        )}

        {showSection('Cursos Libres y certs') && (
          <section id="Cursos Libres y certs" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main px-2">Cursos Libres y Certificaciones</h3>
            {renderSectionCards('Cursos Libres y certs')}
          </section>
        )}

        {showSection('Experiencias Internacionales') && (
          <section id="Experiencias Internacionales" className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main px-2">Experiencias Internacionales</h3>
            {renderSectionCards('Experiencias Internacionales')}
          </section>
        )}

      </div>

      {/* Modal para Agregar */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-surface rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative z-10 animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-muted hover:text-main p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-main mb-6">Agregar Actividad</h3>
            
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-main mb-1">Título de la actividad</label>
                <input 
                  type="text" 
                  required
                  value={newActivity.title}
                  onChange={(e) => setNewActivity({...newActivity, title: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-main bg-background text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Ej. Proyecto Final"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-main mb-1">Categoría</label>
                <select 
                  value={newActivity.section}
                  onChange={(e) => setNewActivity({...newActivity, section: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-main bg-background text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="PBL">PBL</option>
                  <option value="Retos">Retos</option>
                  <option value="Cursos Libres y certs">Cursos Libres y Certificaciones</option>
                  <option value="Experiencias Internacionales">Experiencias Internacionales</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-main mb-1">Materia / Tema</label>
                <input 
                  type="text" 
                  value={newActivity.materia}
                  onChange={(e) => setNewActivity({...newActivity, materia: e.target.value})}
                  className="w-full px-4 py-2 rounded-xl border border-main bg-background text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Ej. Inteligencia Artificial"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl font-medium text-muted hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Cancelar
                </button>
                <button type="submit" className="px-6 py-2 rounded-xl font-semibold bg-primary text-white hover:bg-blue-600 shadow-md transition-all">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


