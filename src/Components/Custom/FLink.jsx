import { Link } from "react-router-dom";
// import { MdGroupAdd } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { MdOutlineLockReset } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
function LinkIcon(icon){
    const style={color:"red",fontSize:"1.5em"};
    switch(icon){
        case "staff":
            return <FaChalkboardTeacher   style={style} />;
        case "add":
            return  <IoBookOutline   style={style} />;
        case "feedback":
            return <CgNotes  style={style} />;
        case "reset":
            return  <MdOutlineLockReset   style={style} />
        
    }
}

 function FLink({className,style,children,icon}){
        
    return (
       <Link style={style} className={`mt-auto text-orange-500 border-2 border-orange-500 bg-white p-3 text-xl tracking-wider rounded-xl
                        shadow-orange-400 shadow-md transition-all text-center flex gap-10
                         hover:scale-105 hover:transition-all active:transition-all
                        ${className}`} type="submit" >
                        
                        {LinkIcon(icon)}
                          
                          
                         
                          
                          {children}</Link>


    );}

    FLink.defaultProps={
        style:{},
        children:{},
        icon:""
    };

    export default FLink;