import { Download, ArrowRight } from 'lucide-react';
import { Category } from '../data';

interface CardProps {
  category: Category;
  onClick: () => void;
}

export function CategoryCard({ category, onClick }: CardProps) {
  if (category.isFeatured) {
    return (
      <div id={category.id} className="lg:col-span-2 lg:row-span-2 bg-surface-container-low border-4 border-black rounded-[2rem] p-6 flex flex-col justify-between neubrutalism-shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 z-10">
          <span className="bg-primary text-on-primary border-2 border-black font-black px-3 py-1 rounded-full text-xs uppercase tracking-widest">Destaque</span>
        </div>
        <div>
          <img 
            alt={category.title} 
            className="w-full h-64 object-cover border-4 border-black rounded-[1.5rem] mb-6 group-hover:scale-[1.02] transition-transform duration-300" 
            src={category.image}
            referrerPolicy="no-referrer"
          />
          <h3 className="font-headline font-black text-3xl mb-2 text-on-surface">{category.title}</h3>
          {category.description && (
            <p className="font-medium text-on-surface-variant mb-6 text-lg">{category.description}</p>
          )}
        </div>
        <button 
          onClick={onClick}
          className="w-full bg-primary text-on-primary border-4 border-black rounded-xl py-4 font-headline font-extrabold text-xl neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
        >
          {category.hasSubcategories ? <ArrowRight className="w-6 h-6" /> : <Download className="w-6 h-6" />}
          {category.buttonText || 'Baixar'}
        </button>
      </div>
    );
  }

  if (category.bgColor) {
    return (
      <div id={category.id} className={`lg:col-span-2 ${category.bgColor} border-4 border-black rounded-[2rem] p-6 flex items-center gap-6 neubrutalism-shadow relative overflow-hidden`}>
        <div className="flex-1">
          <h3 className="font-headline font-black text-3xl mb-2 text-on-surface">{category.title}</h3>
          {category.description && (
            <p className="font-medium text-on-surface-variant mb-4">{category.description}</p>
          )}
          <button 
            onClick={onClick}
            className="w-40 bg-white text-black border-4 border-black rounded-xl py-3 font-headline font-extrabold neubrutalism-shadow active-press flex items-center justify-center gap-2"
          >
            {category.hasSubcategories ? <ArrowRight className="w-5 h-5" /> : <Download className="w-5 h-5" />}
            {category.buttonText || 'Baixar'}
          </button>
        </div>
        <img 
          alt={category.title} 
          className="w-48 h-48 object-cover border-4 border-black rounded-[1.5rem]" 
          src={category.image}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div id={category.id} className="bg-white border-4 border-black rounded-[2rem] p-4 flex flex-col neubrutalism-shadow active-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
      <img 
        alt={category.title} 
        className="w-full h-40 object-cover border-4 border-black rounded-[1.5rem] mb-4" 
        src={category.image}
        referrerPolicy="no-referrer"
      />
      <h3 className="font-headline font-black text-xl mb-3 text-on-surface leading-tight">{category.title}</h3>
      <button 
        onClick={onClick}
        className="mt-auto w-full bg-secondary-container text-black border-4 border-black rounded-xl py-2 font-headline font-extrabold neubrutalism-shadow active-press flex items-center justify-center gap-2"
      >
        {category.hasSubcategories ? <ArrowRight className="w-5 h-5" /> : null}
        {category.buttonText || 'Baixar'}
      </button>
    </div>
  );
}
