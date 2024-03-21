
import PropTypes from "prop-types"
function FInput(props){

    return (<>
        <input placeholder={props.placeholder}  
            className="
             focus:outline-red-600        
            text-xl rounded-md m-2 p-3  text shadow-[0px_0px_5px_orange]
                         shadow-orange-600 placeholder-orange-400 focus:no-underline
                          ease-in text-orange-500" spellCheck="false"
            onChange={props.onChange}
            onClick={props.onClick}
            autoComplete={props.autoComplete!=""?"ON":"OFF"}
            required
            title={props.placeholder}
            type={props.type}
            name={props.placeholder}
            />
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