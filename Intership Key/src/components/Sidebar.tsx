import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Zap, BookOpen, PlusCircle, Heart } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Power Skills', path: '/power-skills', icon: Zap },
  { name: 'Académico', path: '/academico', icon: BookOpen },
  { name: 'Extra', path: '/extra', icon: PlusCircle },
  { name: 'WELL', path: '/well', icon: Heart },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-zinc-800 hidden md:flex flex-col h-full overflow-y-auto transition-colors duration-300">
      <div className="p-6">
        <img 
          src="/key azul.png" 
          alt="Key Institute Logo" 
          className="h-10 w-auto object-contain dark:hidden" 
        />
        <img 
          src="/key blanco.png" 
          alt="Key Institute Logo" 
          className="h-10 w-auto object-contain hidden dark:block" 
        />
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-muted hover:bg-gray-light dark:hover:bg-gray-800 hover:text-main'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
