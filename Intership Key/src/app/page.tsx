'use client';
import { useState } from 'react';
import { usePdf } from '@/context/PdfContext';
import { 
  Brain, BookOpen, Plus, Heart, 
  Trophy, CheckCircle2, ArrowLeft, 
  Download, FileText, Globe, Award
} from 'lucide-react';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'downloads'>('dashboard');
  const { handleDownloadPdf } = usePdf();

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 transition-all duration-300 ease-in-out">
       {currentView === 'dashboard' ? (
         <DashboardView onDownloadClick={() => setCurrentView('downloads')} />
       ) : (
         <DownloadsView 
           onBack={() => setCurrentView('dashboard')} 
           onDownloadAll={handleDownloadPdf}
         />
       )}
    </div>
  );
};

/* ─── DASHBOARD VIEW ──────────────────────────────────────────────── */
const DashboardView = ({ onDownloadClick }: { onDownloadClick: () => void }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Profile Header */}
    <div className="bg-white dark:bg-zinc-900 rounded-[32px] border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
        <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg shadow-blue-600/20">
          RG
        </div>
        <div className="mt-2">
          <p className="text-slate-400 dark:text-zinc-500 text-sm mb-1">rodrigo@keyinstitute.edu.mx</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 mb-1 tracking-tight">¡Hola, Rodrigo!</h1>
          <p className="text-slate-500 dark:text-zinc-400 font-medium">Ingeniería Mecatrónica y Robótica</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right mt-2 md:mt-0">
        <p className="text-slate-900 dark:text-zinc-50 font-bold text-lg md:text-xl">Ciclo 3 · 2026</p>
        <div className="bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full text-sm font-bold border border-blue-100 dark:border-blue-900 shadow-sm">
          Beca Key Transform 80%
        </div>
        <button onClick={onDownloadClick} className="text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 hover:underline mt-2 font-semibold flex items-center gap-1.5 transition-colors">
          <Download className="w-3.5 h-3.5" /> Ir al Centro de Descargas
        </button>
      </div>
    </div>

    {/* 2x2 Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CategoryCard icon={Brain} label="Power Skills" iconBg="bg-orange-50 dark:bg-orange-950/40" iconColor="text-orange-400" />
      <CategoryCard icon={BookOpen} label="Académico" iconBg="bg-blue-50 dark:bg-blue-950/40" iconColor="text-blue-500" />
      <CategoryCard icon={Plus} label="Extra" iconBg="bg-purple-50 dark:bg-purple-950/40" iconColor="text-purple-500" />
      <CategoryCard icon={Heart} label="WELL" iconBg="bg-green-50 dark:bg-green-950/40" iconColor="text-green-500" />
    </div>

    {/* Progress and Badges */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       {/* Horas estudiante */}
       <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-[32px] border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300">
          <h3 className="font-bold text-slate-900 dark:text-zinc-50 text-xl mb-8">Horas estudiante</h3>
          <div className="space-y-7">
             <ProgressRow label="WELL" color="bg-red-400" dotColor="bg-red-400" pct={45} />
             <ProgressRow label="Sociales" color="bg-amber-400" dotColor="bg-amber-400" pct={35} />
             <ProgressRow label="Key" color="bg-blue-500" dotColor="bg-blue-500" pct={25} />
          </div>
          <div className="flex justify-between pl-36 pr-16 mt-6 text-xs font-semibold text-slate-300 dark:text-zinc-600">
             {['0%','15%','30%','45%','60%','75%'].map(v => <span key={v}>{v}</span>)}
          </div>
       </div>

       {/* Insignias */}
       <div className="bg-white dark:bg-zinc-900 rounded-[32px] border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-900 dark:text-zinc-50 text-xl">Insignias</h3>
             <button className="text-blue-500 text-sm font-bold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">Ver más</button>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-1 content-center">
             {[
               { bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-500' },
               { bg: 'bg-purple-50 dark:bg-purple-950/40', color: 'text-purple-500' },
               { bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-500' },
               { bg: 'bg-green-50 dark:bg-green-950/40', color: 'text-green-500' },
               { bg: 'bg-purple-50 dark:bg-purple-950/40', color: 'text-purple-500' },
               { bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-500' },
             ].map((b, i) => (
               <div key={i} className={`${b.bg} aspect-square rounded-2xl flex items-center justify-center transition-colors`}>
                 <Award className={`w-7 h-7 ${b.color}`}/>
               </div>
             ))}
          </div>
       </div>
    </div>

    {/* Info Blocks */}
    <div className="space-y-4">
       <InfoCard>
          <h4 className="font-extrabold text-slate-900 dark:text-zinc-50 md:w-56 flex-shrink-0 text-lg">Recomendaciones</h4>
          <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
            Basado en tu progreso académico y actividades extracurriculares, te recomendamos explorar oportunidades de investigación en tu área y continuar desarrollando tus habilidades de comunicación efectiva.
          </p>
       </InfoCard>
       <InfoCard>
          <h4 className="font-extrabold text-slate-900 dark:text-zinc-50 md:w-56 flex-shrink-0 text-lg">Honores · Reconocimientos</h4>
          <div className="flex gap-4">
             {[
               { bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-500' },
               { bg: 'bg-purple-50 dark:bg-purple-950/40', color: 'text-purple-500' },
               { bg: 'bg-blue-50 dark:bg-blue-950/40', color: 'text-blue-500' },
             ].map((t, i) => (
               <div key={i} className={`w-12 h-12 rounded-2xl ${t.bg} flex items-center justify-center transition-colors`}>
                 <Trophy className={`w-5 h-5 ${t.color}`}/>
               </div>
             ))}
          </div>
       </InfoCard>
       <InfoCard className="justify-between">
          <h4 className="font-extrabold text-slate-900 dark:text-zinc-50 text-lg">Amonestaciones</h4>
          <div className="flex items-center gap-2">
             <CheckCircle2 className="w-6 h-6 text-green-500" />
             <span className="font-semibold text-slate-900 dark:text-zinc-50">Sin amonestaciones</span>
          </div>
       </InfoCard>
    </div>
  </div>
);

/* ─── DOWNLOADS VIEW ──────────────────────────────────────────────── */
const DownloadsView = ({ onBack, onDownloadAll }: { onBack: () => void; onDownloadAll: () => void }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
    {/* Nav Header */}
    <div className="flex items-center justify-between mb-10 mt-2">
       <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 -ml-2 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-zinc-700"
          >
             <ArrowLeft className="w-6 h-6 text-slate-900 dark:text-zinc-50" />
          </button>
          <Download className="w-5 h-5 text-slate-500 dark:text-zinc-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">Centro de Descargas</h2>
       </div>
       <div className="flex items-center gap-5 text-slate-400 dark:text-zinc-500">
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Globe className="w-5 h-5" /></button>
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><FileText className="w-5 h-5" /></button>
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Download className="w-5 h-5" /></button>
       </div>
    </div>

    {/* Descargar Todo */}
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-md transition-all duration-300">
       <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-50 mb-2">Descargar todo</h3>
          <p className="text-slate-500 dark:text-zinc-400 text-sm">Descarga un resumen completo de tu expediente académico en un solo archivo PDF.</p>
       </div>
       <button 
         onClick={onDownloadAll}
         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-colors flex-shrink-0 shadow-sm shadow-blue-600/20"
       >
          <Download className="w-5 h-5" /> Descargar todo
       </button>
    </div>

    {/* Section Cards */}
    <DownloadCard
      icon={Brain} iconBg="bg-orange-50 dark:bg-orange-950/40" iconColor="text-orange-400" btnColor="bg-orange-400 hover:bg-orange-500"
      title="Power Skills" description="Perfil de competencias personales, scores por habilidad y etapa de acreditación."
      pills={[
        { text: '4 competencias', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900' },
        { text: 'Etapa acreditada', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900' },
        { text: '100% comunicación', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900' },
      ]}
      onClick={onDownloadAll}
    />
    <DownloadCard
      icon={BookOpen} iconBg="bg-blue-50 dark:bg-blue-950/40" iconColor="text-blue-500" btnColor="bg-blue-600 hover:bg-blue-700"
      title="Académico" description="PBL, retos, cursos y certificaciones, horas Key y experiencias internacionales."
      pills={[
        { text: '2 PBLs', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900' },
        { text: '1 reto', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900' },
        { text: '1 certificación', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900' },
        { text: '1 exp. internacional', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900' },
      ]}
      onClick={onDownloadAll}
    />
    <DownloadCard
      icon={Heart} iconBg="bg-green-50 dark:bg-green-950/40" iconColor="text-green-500" btnColor="bg-green-400 hover:bg-green-500"
      title="WELL" description="Dimensiones WELL, créditos, actividades de bienestar y horas completadas."
      pills={[
        { text: '7 dimensiones', color: 'text-green-500 bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900' },
        { text: '57h / 81h', color: 'text-green-500 bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900' },
        { text: '1 peer mentor', color: 'text-green-500 bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900' },
      ]}
      onClick={onDownloadAll}
    />
    <DownloadCard
      icon={Plus} iconBg="bg-purple-50 dark:bg-purple-950/40" iconColor="text-purple-500" btnColor="bg-purple-500 hover:bg-purple-600"
      title="Extra" description="Teacher assistant, internships, investigación, Key Spark, clubes y proyectos sociales."
      pills={[
        { text: '6 actividades', color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900' },
        { text: 'Internship Bosch', color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900' },
        { text: '192h investigación', color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900' },
      ]}
      onClick={onDownloadAll}
    />
  </div>
);

/* ─── SUBCOMPONENTES ──────────────────────────────────────────────── */

const CategoryCard = ({ icon: Icon, label, iconBg, iconColor }: { icon: any; label: string; iconBg: string; iconColor: string }) => (
  <div className="bg-white dark:bg-zinc-900 rounded-[32px] border border-slate-100 dark:border-zinc-800 shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
     <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center transition-colors`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
     </div>
     <h3 className="font-bold text-slate-900 dark:text-zinc-50 text-lg">{label}</h3>
  </div>
);

const ProgressRow = ({ label, color, dotColor, pct }: { label: string; color: string; dotColor: string; pct: number }) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-3 w-28 flex-shrink-0">
       <div className={`w-3.5 h-3.5 rounded-full ${dotColor}`}></div>
       <span className="text-slate-500 dark:text-zinc-400 text-sm font-medium">{label}</span>
    </div>
    <div className="flex-1 bg-slate-100 dark:bg-zinc-800 h-3.5 rounded-full overflow-hidden">
       <div className={`${color} h-full rounded-full transition-all duration-1000`} style={{ width: `${pct}%` }}></div>
    </div>
    <span className="w-12 text-right font-bold text-slate-900 dark:text-zinc-50 text-sm">{pct}%</span>
  </div>
);

const InfoCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-zinc-900 rounded-[24px] border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const DownloadCard = ({ icon: Icon, iconBg, iconColor, btnColor, title, description, pills, onClick }: {
  icon: any; iconBg: string; iconColor: string; btnColor: string; title: string; description: string;
  pills: { text: string; color: string }[];
  onClick?: () => void;
}) => (
  <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-md transition-all duration-300">
     <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors`}>
           <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <div>
           <h3 className="font-bold text-slate-900 dark:text-zinc-50 text-lg mb-1">{title}</h3>
           <p className="text-slate-500 dark:text-zinc-400 text-sm mb-4">{description}</p>
           <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {pills.map((p, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold border ${p.color} transition-colors`}>{p.text}</span>
              ))}
           </div>
        </div>
     </div>
     <button 
       onClick={onClick}
       className={`w-14 h-14 rounded-full ${btnColor} text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-sm`}
     >
        <Download className="w-6 h-6" />
     </button>
  </div>
);
