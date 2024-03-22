
import img from "../assets/VEC/admin.svg"
import Brand from "./Custom/Brand";
import FButton from "./Custom/FButton";
import LoginImg from "./Custom/LoginImg";
import FLink from "./Custom/FLink";
import { BsDatabaseSlash } from "react-icons/bs";
export default function AdminPortal() {
    return (
        <div className="login  h-[88%] max-sm:h-[90%]  sm:p-2 flex justify-center ">
        <div className="border-2 border-orange-300 overflow-hidden sm:shadow-[1px_1px_5px_orange] shadow-orange-500 h-full rounded-3xl w-full sm:w-[70%] flex relative ">
            <LoginImg img={img}/>
            <div className=" w-3/5 p-8 max-sm:p-5 max-md:w-full max-md:absolute ">                    
                    <form action="" className="grid grid-flow-row gap-2">
                        <FLink className=" bg-blue-400" icon ="staff" to="/stafflogin">Staff Authendication</FLink>
                        <FLink className=" bg-green-400" icon="reset" to="/admin">Change Admin password</FLink>
                        <FLink className=" bg-red-400" icon="add" to="/admin">Create Course & Dept</FLink>
                        <FLink className=" bg-orange-400" icon="feedback" to="/feedback"> Feeedback Result</FLink>
                        <FButton > <BsDatabaseSlash className=" text-3xl font-semibold" /> RESET</FButton>

    
                    </form>
            </div>
        </div>
        <Brand/>
            
</div>
    );    
}