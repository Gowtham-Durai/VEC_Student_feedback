 function FSelect(props){

   
    

    return (
       
        <select name={props.placeholder} required 
        className="
        text-nowrap
        text-lg rounded-md m-2 p-3   shadow-[0px_0px_5px_orange]
                         shadow-orange-600 placeholder-orange-400 focus:no-underline
                         focus:outline-none ease-in text-orange-500 ">
            <option hidden>{props.placeholder}</option>
         {
            props.list&& props.list.map((ele,idx)=>{
               return  <option value={idx} key={idx}>{ele}</option>
                
            })
         }
         
         </select>
        
    );
}


export default FSelect;