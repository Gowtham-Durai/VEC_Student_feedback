import { Link } from "react-router-dom";

 function FLink({className,style,children}){
        
    return (
       <Link style={style} className={`mt-auto text-white bg-orange-500 p-3 text-xl tracking-wider rounded-xl
                        shadow-orange-400 shadow-md transition-all text-center
                         hover:scale-105 hover:transition-all active:transition-all
                        ${className}`} type="submit" >{children}</Link>

    );}

    FLink.defaultProps={
        style:{},
        children:{}
    };

    export default FLink;