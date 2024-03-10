export default function FButton({children}){
        
    
    return (
       <button className="mt-auto text-white bg-orange-500 p-4 text-2xl tracking-wider rounded-xl
                        shadow-orange-400 shadow-md transition-all
                         hover:scale-105 hover:transition-all active:transition-all
                        ">{children}</button>

    );
}