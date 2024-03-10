import wave from "../../assets/VEC/wave.png"

export default function LoginImg(props){
    return(
    <div className="h-full w-2/5 relative flex ">
                <img src={wave} alt="img"  className="h-full absolute z-0"/>
                <img src={props.img} alt="" className=" max-md:hidden h-full z-10 " />
    </div>);
}