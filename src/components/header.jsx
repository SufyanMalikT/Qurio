import { Search, Sparkles } from 'lucide-react';
import isAuthenticated  from '../services/auth';
import { Link } from 'react-router-dom';
export function Header(){
    const auth = isAuthenticated();
    console.log(typeof auth)
    return (
    <>
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
        <nav className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-violet-500" />
            <span className="text-3xl font-extrabold text-neutral-50 tracking-tighter">Qurio</span>
          </div>
          
          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
              <input 
                type="search" 
                placeholder="Search for communities, questions, or curiosity..." 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-2.5 pl-12 pr-4 text-sm text-neutral-200 placeholder:text-neutral-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition"
              />
            </div>
          </div>
        {auth?            
            (<div>
                <Link to={{'pathname':'/Home'}} >Home</Link>
            </div>)
        :
            (<div className="flex items-center gap-3">
                <button className="text-sm font-medium text-neutral-300 hover:text-white px-5 py-2.5 rounded-full transition">Log In</button>
                <button className="text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-violet-600/20 transition">Sign Up</button>
            </div>)
        }
          {/* <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-neutral-300 hover:text-white px-5 py-2.5 rounded-full transition">Log In</button>
            <button className="text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-violet-600/20 transition">Sign Up</button>
          </div> */}
        </nav>
    </header>
    </>
    )
}