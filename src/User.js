import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from "axios"
import {useEffect} from "react"

function User({page, id}) {
  const [user, SetUser] = useState({})
  const navigate = useNavigate()

  const GetData = async () => {
    const {data} = await axios(`https://reqres.in/api/users/${id}`)
    console.log(data.data);
    SetUser(data.data)
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className='h-screen flex flex-col items-center gap-3 justify-center'>
      <img className="rounded-lg" src={user.avatar} alt="avatar"/>
      <h1 className='text-md'>{user.first_name} {user.last_name}</h1>
      <p className='text-sm'>{user.email}</p>
      <button className='hover:scale-90 transition-all duration-200 bg-black/80 text-white p-2 rounded-lg' onClick={() => navigate(`/`)}>Back Home</button>
    </div>
  )
}

export default User