import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
import User from "./User"
import { useState } from "react";

function App() {
  const [data, SetData] = useState([])
  const [page, setpage] = useState(1)
  const [id, Setid] = useState(1)

  const GetData = async page => {
    const {data} = await axios(`https://reqres.in/api/users?page=${page}/`)
    console.log(data.data);
    SetData(data.data)
    setpage(page)
  }

  return (
    <BrowserRouter>
      <div className="h-screen overflow-y-scroll bg-gray-500">
        <Routes>
            <Route index path="/" element={<Home setid={Setid} data={data} GetData={GetData}/>}/>
            <Route path="/user" element={<User id={id} page={page}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
