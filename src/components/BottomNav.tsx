import { Home } from 'lucide-react';

export function BottomNav({ onHome }: { onHome: () => void }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-center items-center pb-4 pt-2 bg-surface border-t-4 border-black rounded-t-3xl">
      <button 
        onClick={onHome}
        className="flex items-center justify-center bg-[#FF5733] text-white border-4 border-black rounded-full p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform active:translate-y-1 active:shadow-none cursor-pointer"
      >
        <Home className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </nav>
  );
}
