import React from 'react'
import { Filter, User } from 'lucide-react'
import { useNavigate ,Link} from 'react-router-dom';
import api from '../axios/axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Topics = () => {
  const {topic}=useParams()
  const navigate = useNavigate();
  const [topicquestion,setTopicquestion]=useState([])
  useEffect(()=>{
    api.get(`/questions/${topic}`).then((response)=>setTopicquestion(response.data)).catch((err)=>err)
  },[topic])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 px-4 sm:px-6 py-4">


      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">

        <button  onClick={()=>{navigate("/question")}}className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Algorythm
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search problems"
            className="flex-1 sm:flex-none bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
          />

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-lg">
            <Filter size={16} />
          </button>

          <button className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <User size={18} />
          </button>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-80 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">
            {topic}
          </h2>

          <div className="space-y-2 text-sm">
            <p className="text-green-400">Easy: 5 questions</p>
            <p className="text-yellow-400">Medium: 5 questions</p>
            <p className="text-red-400">Hard: 5 questions</p>
          </div>
        </div>


        <div className="flex-1 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              {
                topicquestion.map((x)=>
                <tr className="border-b border-slate-800 hover:bg-slate-800/40 transition">
                  <Link to="/Description"><td className="px-4 sm:px-6 py-4">
                  <div>{x.title}</div> <div>{x.difficulty}</div>
                </td></Link>
                </tr>)
              }
        
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Topics
