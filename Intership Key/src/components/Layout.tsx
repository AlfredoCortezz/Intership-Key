import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  BookOpen, Plus, Heart, 
  Award, Trophy, CheckCircle2, Mail, 
  GraduationCap, Zap, CheckSquare 
} from 'lucide-react';

export const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadPdf = async () => {
    const pages = ['pdf-page-1', 'pdf-page-2', 'pdf-page-3'];
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        const pageElement = document.getElementById(pages[i]);
        if (!pageElement) continue;

        const canvas = await html2canvas(pageElement, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }
      
      pdf.save('reporte-estudiante.pdf');
    } catch (error) {
      console.error('Error al generar PDF', error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopNav 
          onDownloadPdf={handleDownloadPdf} 
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto" id="export-content">
          <Outlet context={{ handleDownloadPdf }} />
        </main>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-64 bg-surface h-full z-10 flex flex-col">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Plantilla oculta para generación de PDF */}
      <div 
        id="pdf-report-template" 
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          top: '-9999px', 
          width: '800px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
        className="bg-slate-50 text-slate-900"
      >
        {/* PAGINA 1 */}
        <div id="pdf-page-1" className="bg-white p-12 flex flex-col justify-between" style={{ width: '800px', height: '1130px', boxSizing: 'border-box' }}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center border-b-4 border-blue-600 pb-6 mb-6">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">KEY INSTITUTE</h1>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Expediente del Estudiante</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500">REPORTE ACADÉMICO INTEGRAL</span>
              </div>
            </div>

            {/* Student Info Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex justify-between gap-4 mb-8">
              <div className="space-y-2">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Estudiante</p>
                <h2 className="text-2xl font-bold text-slate-900">Rodrigo</h2>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Ingeniería Mecatrónica y Robótica</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>rodrigo@keyinstitute.edu.mx</span>
                </div>
              </div>
              <div className="text-right flex flex-col justify-between items-end">
                <div className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm leading-none">
                  Beca Key Transform 80%
                </div>
                <div className="space-y-1 mt-2">
                  <p className="text-slate-500 text-xs font-semibold">Ciclo 3 · 2026</p>
                  <p className="text-slate-400 text-[10px]">Generado el: {new Date().toLocaleDateString('es-MX')}</p>
                </div>
              </div>
            </div>

            {/* Dashboard Sections Summary */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Horas Estudiante Progress Card */}
              <div className="border border-slate-200/80 rounded-2xl p-5 bg-white">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Horas Estudiante
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-600">WELL</span>
                      <span className="text-slate-800">45%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-400 h-full rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-600">Sociales</span>
                      <span className="text-slate-800">35%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-600">Key</span>
                      <span className="text-slate-800">25%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insignias Card */}
              <div className="border border-slate-200/80 rounded-2xl p-5 bg-white flex flex-col justify-between">
                <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" /> Insignias Destacadas
                </h3>
                <div className="grid grid-cols-3 gap-2 my-2">
                  {[1, 2, 3].map(idx => (
                    <div key={idx} className="bg-slate-50 aspect-square rounded-xl flex items-center justify-center border border-slate-100">
                      <Trophy className="w-6 h-6 text-purple-500" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-1 text-center font-medium">Logros validados institucionalmente</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 mb-8">
              <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">Recomendaciones Académicas</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Basado en tu progreso académico y actividades extracurriculares, te recomendamos explorar oportunidades de investigación en tu área y continuar desarrollando tus habilidades de comunicación efectiva.
              </p>
            </div>

            {/* Power Skills Summary */}
            <div className="border border-slate-200/80 rounded-2xl p-6 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" /> Evaluación de Power Skills
                </h3>
                <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full leading-none">Nivel Global: 80%</span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { subject: 'Comunicación', pct: 85, color: '#31E083' },
                  { subject: 'Liderazgo', pct: 65, color: '#8E4BFB' },
                  { subject: 'Trabajo en Equipo', pct: 90, color: '#31E083' },
                  { subject: 'Resolución', pct: 80, color: '#31E083' },
                  { subject: 'Creatividad', pct: 75, color: '#006DFF' },
                  { subject: 'Adaptabilidad', pct: 88, color: '#31E083' }
                ].map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">{skill.subject}</span>
                      <span className="text-slate-800">{skill.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${skill.pct}%`, backgroundColor: skill.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-slate-400 text-[10px] border-t border-slate-100 pt-4">
            <span>Key Institute · Expediente Rodrigo</span>
            <span>Página 1 de 3</span>
          </div>
        </div>

        {/* PAGINA 2 */}
        <div id="pdf-page-2" className="bg-white p-12 flex flex-col justify-between" style={{ width: '800px', height: '1130px', boxSizing: 'border-box' }}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center border-b-4 border-blue-600 pb-6 mb-6">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">KEY INSTITUTE</h1>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Historial Académico</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500">PROYECTOS Y LOGROS ACADÉMICOS</span>
              </div>
            </div>

            {/* Section 1: PBL Projects */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-800 mb-4 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" /> Proyectos Basados en Aprendizaje Real (PBL)
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase leading-none">PBL</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">Diseño de prótesis biónica</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Proyecto para paciente real · Diseño biomecánico</p>
                    <p className="text-[10px] text-slate-400 mt-2">Materia: Diseño de sistemas biomecánicos | Rol: Líder de proyecto</p>
                  </div>
                  <span className="text-lg font-black text-blue-600 bg-white px-3 py-1 rounded-lg border border-slate-100">9.5</span>
                </div>

                <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase leading-none">PBL</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">Automatización línea de producción</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Industria manufacturera local · Sistemas de control</p>
                    <p className="text-[10px] text-slate-400 mt-2">Materia: Automatización industrial | Rol: Ingeniero de sistemas</p>
                  </div>
                  <span className="text-lg font-black text-blue-600 bg-white px-3 py-1 rounded-lg border border-slate-100">9.0</span>
                </div>
              </div>
            </div>

            {/* Section 2: Challenges & Certs */}
            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-purple-600" /> Retos y Competiciones
                </h3>
                <div className="bg-purple-50/40 rounded-xl p-4 border border-purple-100/50">
                  <span className="inline-flex items-center justify-center bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase leading-none">Reto</span>
                  <h4 className="font-bold text-slate-900 text-xs mt-1">Reto Innovación Sostenible — TechHub</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Solución de energía renovable</p>
                  <p className="text-purple-700 text-xs font-bold mt-2 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 fill-purple-100" /> Primer lugar
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600" /> Certificaciones
                </h3>
                <div className="bg-emerald-50/40 rounded-xl p-4 border border-emerald-100/50">
                  <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase leading-none">Certificado</span>
                  <h4 className="font-bold text-slate-900 text-xs mt-1">Machine Learning Fundamentals</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Coursera · Google</p>
                  <p className="text-slate-400 text-[9px] mt-2 font-mono">ID: CERT-ML-2024-001</p>
                </div>
              </div>
            </div>

            {/* Section 3: Int. Experiences & Horas Key */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-orange-600" /> Experiencia Internacional
                </h3>
                <div className="bg-orange-50/40 rounded-xl p-4 border border-orange-100/50 space-y-1 text-xs">
                  <h4 className="font-bold text-slate-900 text-xs">Intercambio TU München</h4>
                  <p className="text-slate-500 text-[11px]">Alemania · Ingeniería de Sistemas</p>
                  <p className="text-slate-600 text-[11px] font-semibold pt-1">Aprendizajes:</p>
                  <ul className="list-disc pl-4 text-slate-600 text-[10px] space-y-0.5">
                    <li>Diseño industrial avanzado</li>
                    <li>Manufactura de precisión</li>
                    <li>Trabajo interdisciplinario</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" /> Horas de Beca (Horas Key)
                </h3>
                <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Horas completadas</span>
                    <span className="text-xs font-bold text-slate-800">57h / 81h (70%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="text-[10px] text-slate-500 space-y-1">
                    <div className="flex justify-between border-b border-slate-200/50 pb-1">
                      <span>Welcome Key</span>
                      <span className="font-semibold text-slate-700">14 h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Summer camp</span>
                      <span className="font-semibold text-slate-700">10 h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-slate-400 text-[10px] border-t border-slate-100 pt-4">
            <span>Key Institute · Expediente Rodrigo</span>
            <span>Página 2 de 3</span>
          </div>
        </div>

        {/* PAGINA 3 */}
        <div id="pdf-page-3" className="bg-white p-12 flex flex-col justify-between" style={{ width: '800px', height: '1130px', boxSizing: 'border-box' }}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center border-b-4 border-blue-600 pb-6 mb-6">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">KEY INSTITUTE</h1>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Co-Curriculares & Bienestar</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500">ACTIVIDADES EXTRA Y PROGRAMA WELL</span>
              </div>
            </div>

            {/* Actividades Extra */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Plus className="w-4 h-4 text-purple-600" /> Actividades Co-curriculares (Extra)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase leading-none">Teacher Assistant</span>
                  <h4 className="font-bold text-slate-900 mt-1">Mecatrónica I · Básica</h4>
                  <p className="text-slate-500 text-[10px]">Apoyo al Dr. Eduardo Torres en laboratorios</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <span className="inline-flex items-center justify-center bg-orange-100 text-orange-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase leading-none">Internship</span>
                  <h4 className="font-bold text-slate-900 mt-1">Bosch México · Manufactura</h4>
                  <p className="text-slate-500 text-[10px]">6 meses · Acumula 6 créditos académicos</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <span className="inline-flex items-center justify-center bg-cyan-100 text-cyan-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase leading-none">Investigación</span>
                  <h4 className="font-bold text-slate-900 mt-1">Robótica Cognitiva</h4>
                  <p className="text-slate-500 text-[10px]">Dr. Ramírez · 192 horas acumuladas</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <span className="inline-flex items-center justify-center bg-purple-100 text-purple-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase leading-none">Key Spark</span>
                  <h4 className="font-bold text-slate-900 mt-1">Taller de Impresión 3D</h4>
                  <p className="text-slate-500 text-[10px]">CAD y manufactura aditiva · 16 horas</p>
                </div>
              </div>
            </div>

            {/* Servicio Social & Créditos WELL */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Servicio Social
                </h3>
                <div className="bg-emerald-50/20 p-4 rounded-xl border border-emerald-100 space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600">Servicio Social</span>
                    <span className="text-slate-800">350h / 500h (70%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="text-[10px] text-slate-500 space-y-0.5 pt-1">
                    <p>• Welcome Key: 250h</p>
                    <p>• Summer camp: 100h</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" /> Créditos WELL & Mentores
                </h3>
                <div className="bg-rose-50/20 p-4 rounded-xl border border-rose-100 text-xs space-y-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Créditos WELL (20h)</h4>
                    <p className="text-slate-500 text-[10px]">Diseño Sostenible (12h) · Hike (8h)</p>
                  </div>
                  <div className="border-t border-rose-100/50 pt-2">
                    <h4 className="font-bold text-slate-900 text-xs">Peer Mentor Semestral</h4>
                    <p className="text-slate-500 text-[10px]">15 estudiantes asesorados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programa WELL: Horas & Dimensiones */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 pb-1 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Programa WELL
              </h3>
              <div className="grid grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="space-y-3 flex flex-col justify-center">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-600">Horas WELL</span>
                    <span className="text-emerald-600">57h / 81h (70%)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    El programa de bienestar físico, espiritual, social, emocional, financiero, intelectual y ambiental.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Dimensiones</h4>
                  {[
                    { name: 'Físico', value: 95, color: '#3B82F6' },
                    { name: 'Espiritual', value: 95, color: '#8B5CF6' },
                    { name: 'Social', value: 78, color: '#F97316' },
                    { name: 'Emocional', value: 65, color: '#EAB308' },
                    { name: 'Financiero', value: 55, color: '#06B6D4' },
                    { name: 'Intelectual', value: 40, color: '#22C55E' },
                    { name: 'Ambiental', value: 30, color: '#4ADE80' }
                  ].map((dim, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px]">
                      <span className="w-14 text-right text-slate-500 font-semibold">{dim.name}</span>
                      <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${dim.value}%`, backgroundColor: dim.color }}></div>
                      </div>
                      <span className="w-8 text-left text-slate-700 font-bold">{dim.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Validation Seal and Footer */}
          <div>
            <div className="border-t border-slate-100 pt-6 flex justify-between items-center">
              <div className="text-[9px] text-slate-400 space-y-1">
                <p className="font-bold text-slate-600">DOCUMENTO OFICIAL DE VALIDACIÓN INTERNA</p>
                <p>Este documento certifica el expediente integral de Rodrigo en Key Institute.</p>
                <p>Código de Verificación: <span className="font-mono text-slate-500">KEY-TRANSFORM-2026-ROD-80</span></p>
              </div>
              <div className="border-2 border-dashed border-blue-200 text-blue-600 rounded-full w-20 h-20 flex flex-col items-center justify-center text-center p-1 uppercase select-none">
                <span className="text-[8px] font-bold">Key Institute</span>
                <span className="text-[10px] font-black tracking-widest">VALID</span>
                <span className="text-[7px] font-semibold text-slate-400">2026</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-slate-400 text-[10px] border-t border-slate-100 pt-4 mt-6">
              <span>Key Institute · Expediente Rodrigo</span>
              <span>Página 3 de 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

