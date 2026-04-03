import { useState } from 'react';
import { CATEGORIES, MOLDES_3D_SUBCATEGORIES, Category } from './data';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { CategoryCard } from './components/CategoryCard';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'moldes3d'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    if (category.hasSubcategories) {
      setCurrentView('moldes3d');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (category.link) {
      window.open(category.link, '_blank');
    }
  };

  const handleMenuCategorySelect = (categoryId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(categoryId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100; // offset for sticky header
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-background font-body text-on-surface min-h-screen pb-24">
      <Header 
        currentView={currentView}
        isOpen={isMenuOpen}
        onOpen={() => setIsMenuOpen(true)}
        onClose={() => setIsMenuOpen(false)}
        onCategorySelect={handleMenuCategorySelect} 
      />
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        {currentView === 'home' ? (
          <HomeView onCategoryClick={handleCategoryClick} />
        ) : (
          <Moldes3DView onCategoryClick={handleCategoryClick} />
        )}
      </main>
      {!isMenuOpen && (
        <BottomNav onHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
      )}
    </div>
  );
}

function HomeView({ onCategoryClick }: { onCategoryClick: (category: Category) => void }) {
  return (
    <>
      <div className="mb-10 relative">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-tertiary-container rounded-full opacity-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-secondary-container rounded-lg rotate-12 opacity-30 -z-10"></div>
        <h2 className="font-headline font-black text-5xl md:text-6xl text-on-surface leading-tight mb-4">
          Coleção<br />Mundo de Papel
        </h2>
        <p className="text-xl font-medium text-on-surface-variant max-w-2xl">
          Acesse todos os seus arquivos digitais. Escolha uma categoria abaixo para baixar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map(category => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onClick={() => onCategoryClick(category)} 
          />
        ))}
      </div>
    </>
  );
}

function Moldes3DView({ onCategoryClick }: { onCategoryClick: (category: Category) => void }) {
  return (
    <>
      <div className="mb-10 relative">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-tertiary-container rounded-full opacity-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-secondary-container rounded-lg rotate-12 opacity-30 -z-10"></div>
        <h2 className="font-headline font-black text-5xl md:text-6xl text-on-surface leading-tight mb-4">
          Moldes 3D
        </h2>
        <p className="text-xl font-medium text-on-surface-variant max-w-2xl">
          Escolha sua categoria favorita e comece a montar seu mundo de papel hoje mesmo!
        </p>
      </div>

      <div className="mb-12 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
        <div className="flex gap-4 min-w-max">
          <button className="bg-secondary-container text-black border-4 border-black rounded-xl px-6 py-3 font-headline font-extrabold neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Todos os Moldes
          </button>
          <button className="bg-white text-black border-4 border-black rounded-xl px-6 py-3 font-headline font-extrabold neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Star Wars
          </button>
          <button className="bg-white text-black border-4 border-black rounded-xl px-6 py-3 font-headline font-extrabold neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Disney
          </button>
          <button className="bg-white text-black border-4 border-black rounded-xl px-6 py-3 font-headline font-extrabold neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            Anime
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOLDES_3D_SUBCATEGORIES.map(category => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onClick={() => onCategoryClick(category)} 
          />
        ))}
      </div>
    </>
  );
}
