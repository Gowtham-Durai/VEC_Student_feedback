import img from "../assets/VEC/student.svg"
import Brand from "./Custom/Brand";
import FInput from "./Custom/Finput";
import FButton from "./Custom/FButton";
import LoginImg from "./Custom/LoginImg";
import FSelect from "./Custom/FSelect";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
export default function StudentLogin(){


const [Dept,setDept]=useState();
const [Course,setCourse]=useState();
const [Sec,setSec]=useState();
const [Sem,setSem]=useState();
// const [inputs,setInputs]=useState({});
    const handleChange = (e) => {
    console.log(e.target.value);
}

useEffect((e)=>{
            
        axios.get("http://192.168.1.6/Api/getData/course/dept/sec/sem").then((response)=>{
            console.log("-----------------------",sessionStorage.getItem("AdminLogin"));

                        var data=response.data;
                        console.log(data);
                        setCourse(c=>data["course"]);
                        setDept(d=>data["dept"]);
                        setSec(d=>data["sec"]);
                        setSem(d=>data["sem"]);
                    }).catch((error)=>{
                        console.log(error);
                    })
                        
             },[]);
const blocksubmit=(e)=>{
        e.preventDefault();
// /Api/
        // axios.post("http://192.168.1.6/Api/CreateAdmin",inputs).then((response)=>{
            // console.log( response.data);
        // });

    

}
    return (
        <div className="login  h-[88%] max-sm:h-[90%]  sm:p-2 flex justify-center ">
                <div className="border-2 border-orange-300 overflow-hidden sm:shadow-[1px_1px_5px_orange] shadow-orange-500 h-full rounded-3xl w-full sm:w-[70%] flex relative ">
                    <LoginImg img={img}/>
                    <div className=" w-3/5 p-10 max-sm:p-5 max-md:w-full max-md:absolute ">                    
                            <form action="POST" onSubmit={blocksubmit} className="flex flex-col h-full">
                            <h1 className="loghead  mb-5 text-5xl text-center text-orange-400">Student Login</h1>
                            <div className=" h-full flex flex-col justify-center ">
                                <FInput placeholder="Name" onClick={handleChange}/>
                                <FSelect placeholder="Course"  list={Course}/>
                                <div className="grid grid-cols-3">
                                <FSelect placeholder="Dept" list={Dept}/>
                                <FSelect placeholder="Sec" list={Sec}/>
                                <FSelect placeholder="Sem" list={Sem}/>  
                                </div>
                                <FButton >
                            <Link to="/staff">
                                LOGIN
                            </Link>
                            
                                    
                                    </FButton>
                            </div>
                            </form>
                    </div>
                </div>
                <Brand/>
                    
        </div>
            );
}