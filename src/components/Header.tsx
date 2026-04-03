import { Menu, X } from 'lucide-react';
import { CATEGORIES, MOLDES_3D_SUBCATEGORIES } from '../data';

interface HeaderProps {
  currentView: 'home' | 'moldes3d';
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCategorySelect: (id: string) => void;
}

export function Header({ currentView, isOpen, onOpen, onClose, onCategorySelect }: HeaderProps) {
  const menuItems = currentView === 'home' ? CATEGORIES : MOLDES_3D_SUBCATEGORIES;

  return (
    <>
      <header className="bg-surface border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sticky top-0 z-40 flex items-center justify-between px-6 py-4 w-full">
        <button 
          onClick={onOpen}
          className="flex items-center justify-center w-12 h-12 bg-white border-4 border-black rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none neubrutalism-shadow"
        >
          <Menu className="w-6 h-6 text-black" />
        </button>
        <h1 className="font-headline font-black tracking-tighter text-2xl text-primary uppercase italic">
          Mundo de Papel
        </h1>
        <div className="w-12 h-12"></div>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-surface border-r-4 border-black z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline font-black text-2xl text-primary uppercase italic">Menu</h2>
            <button 
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 bg-white border-4 border-black rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none neubrutalism-shadow"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => onCategorySelect(item.id)}
                className="text-left font-headline font-bold text-lg p-3 bg-white border-4 border-black rounded-xl neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
