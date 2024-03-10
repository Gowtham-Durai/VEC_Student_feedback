
import PropTypes from "prop-types"
function FInput(props){

    return (<>
        <input placeholder={props.placeholder}  
            className="
            focus:border-2 focus:border-red-600        
            text-xl rounded-md m-2 p-3  text shadow-[0px_0px_5px_orange]
                         shadow-orange-600 placeholder-orange-400 focus:no-underline
                         focus:outline-none ease-in text-orange-500" spellCheck="false"
            type={props.type}/>
    </>);
}
FInput.propTypes={
    placeholder:PropTypes.string,
    type:PropTypes.string

}
FInput.defaultProps={
    type:"text"
}
export default FInput;
// prototypes={
//     placeholder:Prototypes.string,
//     type:Prototypes.string
// }