import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home({GetData, data, setid}) {
  const [input, Setinput] = useState("")
  const navigate = useNavigate()

  function handleSubmit(user) {
    navigate(`/user`)
    setid(user.id)
  }

  useEffect(() => {
    GetData(1)
  }, [])

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="w-[60vw] h-[40vw] flex flex-row items-center justify-between">
        <h1 className='text-4xl hover:scale-90 transition-all duration-200 cursor-pointer' onClick={() => GetData(1)}>{"<"}</h1>
        <div className="w-[80%] h-[50%] flex flex-col items-center justify-center">
          <input onChange={(e) => Setinput(e.target.value)} type="text" className='w-[250px] h-[40px] mb-5 rounded-full outline-none bg-transparent border-b-[1px] border-b-black/50 text-black text-center' placeholder='Search User'/>
          <div className="w-[90%] h-[90%] grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {data
            .filter((user) => {
              if(input == "") {
                return user
              } else if (user.first_name.toLowerCase().includes(input.toLowerCase())) {
                return user
              }
            })
            .map((user) => (
              <div className='w-[150px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer' onClick={() => handleSubmit(user)}>
                <img src={user.avatar} alt="avatar" className='w-[100px] rounded-lg h-[100px]'/>
                <h1>{user.first_name} {user.last_name}</h1>
              </div>
            ))}
          </div>
        </div>
        <h1 className='text-4xl hover:scale-90 transition-all duration-200 cursor-pointer' onClick={() => GetData(2)}>{">"}</h1>
      </div>
    </div>
  )
}

export default Home