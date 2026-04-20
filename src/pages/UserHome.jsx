import { useState, useEffect } from "react";
import {getQuestions} from '../services/questions'
import PostCard from "../components/PostCard";
function UserHome(){
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        async function fetchQuestions(){
            const res_data = await getQuestions();

            setQuestions(res_data.results)
        }
        fetchQuestions()
    },[])
    return (
        <>  <div className='grid grid-cols-4 bg-slate-950 min-h-screen'>
                <div className='col-span-1'>
                    sd
                </div>
                <div className='col-span-2 p-4 border-x-1 border-x-gray-700'>
                    <div className='flex flex-row justify-between'>
                        <h1 className="text-3xl font-black text-white px-4 pb-4">Posts</h1>
                        <div className='flex flex-row justify-evenly w-48 h-8 items-center'>
                            <button className='bg-none rounded-2xl text-white border border-gray-600 py-1 px-4 cursor-pointer transition hover:bg-amber-200 hover:text-black hover:border-none hover:shadow-sm shadow-amber-200'>Latest</button>
                            <button className='bg-none rounded-2xl text-white border border-gray-600 py-1 px-4  cursor-pointer transition hover:bg-amber-200 hover:text-black hover:border-none hover:shadow-sm shadow-amber-200' >Popular</button>
                        </div>
                    </div>
                    {questions.map((e) => (
                        <PostCard post={e} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default UserHome;