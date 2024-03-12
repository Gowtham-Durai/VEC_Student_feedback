import img from "../assets/VEC/admin.svg"
import Brand from "./Custom/Brand";
import FInput from "./Custom/Finput";
import FButton from "./Custom/FButton";
import LoginImg from "./Custom/LoginImg";
import { useState } from "react";
import axios from "axios"

export default function AdminLogin(){

    const [inputs,setInputs]=useState({});

    const blocksubmit=(e)=>{
            e.preventDefault();
            console.log(inputs);
            axios.post("http://localhost/api/index.php",inputs);
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}));
        
    }

    return (
<div className="login  h-[88%] max-sm:h-[90%] p-3 sm:p-3 flex justify-center ">
        <div className="border-2 border-orange-300 overflow-hidden sm:shadow-[1px_1px_15px_orange] shadow-orange-500 h-full rounded-3xl w-full sm:w-[70%] flex relative ">
            <LoginImg img={img}/>
            <div className=" w-3/5 p-10 max-sm:p-5 max-md:w-full max-md:absolute ">                    
                    <form action="" onSubmit={blocksubmit}   className="flex flex-col h-full">
                    <h1 className="loghead mb-5 text-5xl text-center text-orange-400">Admin Login</h1>
                    <div className="h-full flex flex-col justify-center">
                        
                        <FInput placeholder="Username" onChange={handleChange} />
                        <FInput placeholder="Password" type="password"  onChange={handleChange} />
                        <FButton >LOGIN</FButton>
                    </div>
                    </form>
            </div>
        </div>
        <Brand/>
            
</div>
    );
}