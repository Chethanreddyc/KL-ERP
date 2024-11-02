import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Student from "./components/Student";
import Faculty from "./components/Faculty";
import Timetable from "./components/Timetable";
import { useState } from "react";
import Refreshhandler from "./Refreshhandler";

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) =>{
    return isAuthenticated ? element : <Navigate to = "/login"/>

  }

  return (
      <div className="App">
        <Refreshhandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>   
          <Route path="/" element={<Navigate to = "/login"/>} />
          <Route path="/login" element={<Login />} />          
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<PrivateRoute element={<Home/>}/>} />
          <Route path="/student" element={<Student />} />   
          <Route path="/Faculty" element={<Faculty />} />   
          <Route path="/Timetable" element={<Timetable />} />   

        </Routes>
      </div>
  );
}

export default App;