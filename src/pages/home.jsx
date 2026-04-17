import React from 'react';
import { ArrowBigUp, ArrowBigDown, MessageSquare, Search, Sparkles, Users, Zap } from 'lucide-react';

// --- Mock Data for the Feed Visualization ---
const mockPosts = [
  {
    id: 1,
    community: "q/SpaceExploration",
    author: "astro_sam",
    title: "Is the James Webb Telescope powerful enough to see alien city lights?",
    votes: 1285,
    comments: 234,
    tags: ["Science", "JWST", "Questions"],
  },
  {
    id: 2,
    community: "q/ReactDevs",
    author: "code_wizard",
    title: "What is your go-to state management library in 2026? State of the art discussion.",
    votes: 942,
    comments: 512,
    tags: ["Dev", "Frontend", "Poll"],
  },
  {
    id: 3,
    community: "q/AskPhilosophers",
    author: "thinker_deep",
    title: "If a tree falls in a forest and no one posts it on Qurio, did it really happen?",
    votes: -12, // Showing a downvoted example
    comments: 89,
    tags: ["Philosophy", "Meta"],
  },
];

// --- Sub-Component: Post Card (matches the styled design) ---
const PostCard = ({ post }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-violet-500/50 transition-all duration-300 shadow-xl group">
    <div className="flex gap-4">
      {/* Voting Column */}
      <div className="flex flex-col items-center gap-1 bg-neutral-950 border border-neutral-800 rounded-full p-2 h-fit mt-1">
        <button className="text-neutral-600 hover:text-violet-400 transition">
          <ArrowBigUp className="w-6 h-6" />
        </button>
        <span className={`font-bold text-sm ${post.votes >= 0 ? 'text-neutral-200' : 'text-red-400'}`}>
          {post.votes.toLocaleString()}
        </span>
        <button className="text-neutral-600 hover:text-orange-400 transition">
          <ArrowBigDown className="w-6 h-6" />
        </button>
      </div>

      {/* Content Column */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2 text-xs text-neutral-500">
          <span className="font-semibold text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded-full">{post.community}</span>
          <span>Posted by u/{post.author}</span>
          <span>• 2h ago</span>
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-violet-100 transition">
          {post.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 text-neutral-500 text-sm border-t border-neutral-800 pt-3">
          <div className="flex items-center gap-2 hover:text-neutral-300 cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>{post.comments} Comments</span>
          </div>
          <div className="hover:text-neutral-300 cursor-pointer">Share</div>
          <div className="hover:text-neutral-300 cursor-pointer">Save</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Sub-Component: Feature Card ---
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
    <div className="bg-violet-950 border border-violet-800 p-4 rounded-full mb-6">
      <Icon className="w-8 h-8 text-violet-300" />
    </div>
    <h3 className="text-2xl font-bold text-neutral-100 mb-3">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{description}</p>
  </div>
);

// --- MAIN LANDING PAGE COMPONENT ---
const QurioLandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-violet-500/30 selection:text-violet-200">
      
      

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/40 via-neutral-950 to-neutral-950">
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-full text-violet-300 text-sm mb-6 shadow-inner">
            <Zap className="w-4 h-4" />
            <span>The internet's new curiosity engine</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] text-neutral-50 mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-500">
            Ask. Vote. Discover.<br /> Unleash your <span className="text-violet-500">Qurio</span>sity.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-neutral-400 leading-relaxed mb-12">
            Dive into thousands of communities where curiosity thrives. Ask your toughest questions, upvote the brightest answers, and connect with people who share your passions.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="text-lg font-bold bg-violet-600 hover:bg-violet-500 text-white px-10 py-4 rounded-full shadow-xl shadow-violet-600/30 transition transform hover:scale-105">
              Explore Communities
            </button>
            <button className="text-lg font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-100 px-10 py-4 rounded-full border border-neutral-700 transition">
              How it Works
            </button>
          </div>
        </div>
      </section>

      {/* 3. The Feed (Live Visualization) */}
      <section className="max-w-[1500px] mx-auto px-6 py-24 border-t border-neutral-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,minmax(380px,auto)] gap-12">
          
          {/* Main Feed Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-100">Trending Curiosity</h2>
              <div className="flex gap-2 bg-neutral-900 p-1 rounded-full border border-neutral-800 text-sm">
                {["Hot", "New", "Rising"].map((tab, i) => (
                  <button key={tab} className={`px-5 py-2 rounded-full font-medium ${i === 0 ? 'bg-violet-600 text-white shadow' : 'text-neutral-400 hover:text-neutral-100'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {mockPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Sidebar Column */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-100 mb-5 flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                Top Communities
              </h3>
              <ul className="space-y-4">
                {["q/AskTechnology", "q/DeepLearning", "q/GamerHabit", "q/CreativeWriting", "q/SpaceExploration"].map((comm, i) => (
                  <li key={comm} className="flex items-center justify-between text-sm group cursor-pointer">
                    <span className="font-medium text-neutral-300 group-hover:text-violet-300 transition">{i+1}. {comm}</span>
                    <button className="text-xs font-bold border border-violet-700 text-violet-300 px-4 py-1.5 rounded-full hover:bg-violet-600 hover:text-white transition">Join</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-100 mb-4">Start Your Own</h3>
              <p className="text-neutral-400 text-sm mb-5 leading-relaxed">Got a niche passion? Create a community and find your people on Qurio.</p>
              <button className="w-full text-sm font-bold bg-neutral-800 hover:bg-neutral-700 text-neutral-100 py-3 rounded-full border border-neutral-700 transition">
                Create Community
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. Feature Section */}
      <section className="bg-neutral-900/50 py-28 border-y border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold tracking-tighter text-neutral-100 mb-5">The Hub for Human Knowledge</h2>
            <p className="max-w-xl mx-auto text-lg text-neutral-400 leading-relaxed">Built by curiosity, moderated by community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={MessageSquare} 
              title="Ask Anything" 
              description="From coding bugs to existential dread, tap into the internet’s collective mind."
            />
            <FeatureCard 
              icon={ArrowBigUp} 
              title="Community Driven" 
              description="Upvote brilliance. Downvote noise. The community decides what’s important."
            />
            <FeatureCard 
              icon={Users} 
              title="Find Your People" 
              description="Thousands of communities (‘q/’) cater to every obsession imaginable."
            />
          </div>
        </div>
      </section>

      {/* 5. Call-to-Action */}
      <section className="py-32 bg-violet-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
            Stop Searching.<br /> Start Discovering.
          </h2>
          <p className="text-xl text-violet-100 mb-12 max-w-xl mx-auto leading-relaxed">
            Join millions of curious minds already shaping the future of knowledge sharing on Qurio. Your next obsession is just one click away.
          </p>
          <button className="text-xl font-bold bg-white text-violet-700 px-12 py-5 rounded-full shadow-2xl shadow-black/10 transition transform hover:scale-105 hover:shadow-violet-950/20">
            Join Qurio Today (It’s Free)
          </button>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-16 text-neutral-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <span className="text-xl font-bold text-neutral-300">Qurio</span>
            </div>
            <p className="leading-relaxed">© 2026 Qurio Inc.<br /> All rights reserved.</p>
          </div>
          {[ "Company", "Product", "Resources", "Legal" ].map(section => (
            <div key={section}>
              <h5 className="font-semibold text-neutral-400 mb-4">{section}</h5>
              <ul className="space-y-2.5">
                {[ "About", "Careers", "Press", "Blog" ].map(link => (
                  <li key={link}><a href="#" className="hover:text-violet-400 transition">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default QurioLandingPage;