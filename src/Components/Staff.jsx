import img from "../assets/VEC/staff.svg"
import Brand from "./Custom/Brand";
import FInput from "./Custom/Finput";
import FButton from "./Custom/FButton";
import LoginImg from "./Custom/LoginImg";
import FSelect from "./Custom/FSelect";
import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { isObjectEmpty } from "./includes";
export default function StudentLogin(){

const [form,setForm]=useState({ Course:"",Sec:"",Sem:""});
const [PostForm,setPostForm]=useState({ "No of Subjects":"",Course:"",Sec:"",Sem:""});


// const [inputs,setInputs]=useState({});
    const handleChange = (e) => {
        var name=e.target.name;
        var value=e.target.value;
      
    //    console.log();
        if(name!="No of Subjects"){
            value=form[name][value];
        }
        
        setPostForm(f=>{return {...f ,[name]:value}});
}

useEffect(()=>{
            
        axios.get("http://192.168.1.6/Api/getData/course/dept/sec/sem").then((response)=>{
            console.log("-----------------------",sessionStorage.getItem("AdminLogin"));

                        var data=response.data;
                        console.log(data);
                        setForm({
                            Course:data["course"],
                            Sec:data["sec"],
                            Sem:data["sem"]
                        });
                        

                    }).catch((error)=>{
                        console.log(error);
                    })
                        
             },[]);
const blocksubmit=(e)=>{
    console.log("working");
        e.preventDefault();
// /Api/ catch
        // stringify

    if(isObjectEmpty(PostForm)){
        console.log(PostForm);
        window.location.href="/feedback?course="+PostForm["Course"]+"&&dept="+PostForm["Dept"]+"=&&sem="+PostForm["Sem"]+"&&sec="+PostForm["Sec"];
    }

}
    return (
        <div className="login  h-[88%] max-sm:h-[90%]  sm:p-2 flex justify-center ">
                <div className="border-2 border-orange-300 overflow-hidden sm:shadow-[1px_1px_5px_orange] shadow-orange-500 h-full rounded-3xl w-full sm:w-[70%] flex relative ">
                    <LoginImg img={img}/>
                    <div className=" w-3/5 p-10 max-sm:p-5 max-md:w-full max-md:absolute ">                    
                            <form action="POST" onSubmit={blocksubmit} className="flex flex-col h-full">
                            <h1 className="loghead  mb-5 text-5xl text-center text-orange-400">Staff Updation</h1>
                            <div className=" h-full flex flex-col justify-center ">
                                
                                <FInput placeholder="No of Subjects" onChange={handleChange} type="number" min="1" max={25} />
                                <div className="grid grid-cols-3">
                                <FSelect placeholder="Course" onChange={handleChange} list={form["Course"] }/>
                                <FSelect placeholder="Sec" onChange={handleChange} list={form["Sec"]}/>
                                <FSelect placeholder="Sem" onChange={handleChange} list={form["Sem"]}/>  
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