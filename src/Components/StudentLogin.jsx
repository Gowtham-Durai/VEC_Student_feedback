import img from "../assets/VEC/student.svg"
import Brand from "./Custom/Brand";
import FInput from "./Custom/Finput";
import FButton from "./Custom/FButton";
import LoginImg from "./Custom/LoginImg";
import FSelect from "./Custom/FSelect";

export default function StudentLogin(){

const Dept=["CSE","EEE","ECE","IT"];
const Course=["BE","ME","B.TECH"];
const Sec=["A","B","C","D"];
const Sem=[1,2,3,4,5,6];

    return (
        <div className="login  h-[88%] max-sm:h-[90%]  sm:p-2 flex justify-center ">
                <div className="border-2 border-orange-300 overflow-hidden sm:shadow-[1px_1px_15px_orange] shadow-orange-500 h-full rounded-3xl w-full sm:w-[70%] flex relative ">
                    <LoginImg img={img}/>
                    <div className=" w-3/5 p-10 max-sm:p-5 max-md:w-full max-md:absolute ">                    
                            <form action="" className="flex flex-col h-full">
                            <h1 className="loghead  mb-5 text-5xl text-center text-orange-400">Student Login</h1>
                            <div className=" h-full flex flex-col justify-center ">
                                <FInput placeholder="Name" />
                                <FSelect placeholder="Course"  list={Course}/>
                                <div className="grid grid-cols-3">
                                <FSelect placeholder="Dept" list={Dept}/>
                                <FSelect placeholder="Sec" list={Sec}/>
                                <FSelect placeholder="Sem" list={Sem}/>  
                                </div>
                                <FButton >LOGIN</FButton>
                            </div>
                            </form>
                    </div>
                </div>
                <Brand/>
                    
        </div>
            );
}