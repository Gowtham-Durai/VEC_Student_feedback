export default function FButton({children}){
        
    
    return (
       <button className="mt-auto text-white bg-orange-500 p-4 text-2xl tracking-wider rounded-xl
                        shadow-orange-400 shadow-md transition-all
                         hover:scale-105 hover:transition-all active:transition-all flex  gap-2  items-center justify-center
                        " type="submit">{children}</button>

    );
}