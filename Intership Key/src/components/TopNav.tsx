import { useEffect, useState } from 'react';
import { Globe, Book, Download, Bell, LogOut, Moon, Sun, Menu } from 'lucide-react';

export const TopNav = ({ onDownloadPdf, onToggleMobileMenu }: { onDownloadPdf: () => void, onToggleMobileMenu: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-20 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 px-6 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center md:hidden">
        <button onClick={onToggleMobileMenu} className="p-2 rounded-lg hover:bg-gray-light dark:hover:bg-gray-800 text-main">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-semibold text-main">Portal del Estudiante</h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-light dark:hover:bg-gray-800 transition-colors text-muted hover:text-main"
          title="Alternar Tema"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-gray-light dark:hover:bg-gray-800 transition-colors text-muted hover:text-[#0a66c2]"
          title="Perfil LinkedIn"
        >
          <Globe className="w-5 h-5" />
        </a>

        <button className="p-2 rounded-full hover:bg-gray-light dark:hover:bg-gray-800 transition-colors text-muted hover:text-primary" title="Reglamentos">
          <Book className="w-5 h-5" />
        </button>

        <button 
          onClick={onDownloadPdf}
          className="p-2 rounded-full hover:bg-gray-light dark:hover:bg-gray-800 transition-colors text-muted hover:text-primary" 
          title="Descargar Reporte PDF"
        >
          <Download className="w-5 h-5" />
        </button>

        <button className="relative p-2 rounded-full hover:bg-gray-light dark:hover:bg-gray-800 transition-colors text-muted hover:text-primary" title="Notificaciones">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </button>

        <div className="w-px h-8 bg-border-main mx-2"></div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 transition-colors font-medium text-sm">
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Salir</span>
        </button>
      </div>
    </header>
  );
};
