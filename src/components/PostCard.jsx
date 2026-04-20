import { ArrowBigUp, ArrowBigDown, MessageSquare} from 'lucide-react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
const PostCard = ({ post }) => {
    const posted_ago = dayjs(post.posted_at).fromNow()
    return (
  <div key={post.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-violet-500/50 transition-all duration-300 shadow-xl group">
    <div className="flex gap-4">
      {/* Voting Column */}
      <div className="flex flex-col items-center gap-1 bg-neutral-950 border border-neutral-800 rounded-full p-2 h-fit mt-1">
        <button className="text-neutral-600 hover:text-violet-400 transition">
          <ArrowBigUp className="w-6 h-6" />
        </button>
        <span className={`font-bold text-sm ${post.vote_score >= 0 ? 'text-neutral-200' : 'text-red-400'}`}>
          {post.vote_score.toLocaleString()}
        </span>
        <button className="text-neutral-600 hover:text-orange-400 transition">
          <ArrowBigDown className="w-6 h-6" />
        </button>
      </div>

      {/* Content Column */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2 text-xs text-neutral-500">
          <span className="font-semibold text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded-full">{post.community}</span>
          <span>Posted by u/{post.author?.username}</span>
          <span>• {posted_ago}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-violet-100 transition">
          {post.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag.id} className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700">
              {tag.name}
            </span>
          ))}
        </div>
        <div className='text-gray-500 max-h-64 overflow-hidden whitespace-pre-wrap'>{post.body}</div>

        <div className="flex items-center gap-6 text-neutral-500 text-sm border-t border-neutral-800 pt-3">
          <div className="flex items-center gap-2 hover:text-neutral-300 cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>{post.answers_count} Answers</span>
          </div>
          <div className="hover:text-neutral-300 cursor-pointer">Share</div>
          <div className="hover:text-neutral-300 cursor-pointer">Save</div>
        </div>
      </div>
    </div>
  </div>
);
}
export default PostCard;