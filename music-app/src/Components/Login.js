import { useRef } from "react";
import { useDispatch } from "react-redux";
const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = ()=>{
        console.log(email.current.value);
        console.log(password.current.value);
        dispatch(email.current.value,password.current.value);
    }
    
    return (
        <div className="">
            <div className="bg-zinc-950 w-5/12 fixed shadow-2xl rounded-xl left-[29.5%] my-0 mx-auto">
            <form className=" px-20 py-24 text-white" onSubmit={(e)=>e.preventDefault()}>
            <img className="w-16 m-auto " src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"/>
            <h1 className="text-center text-3xl text-white font-semibold my-4 mx-auto mb-10">Log in to Spotify
            </h1>
            <label className="w-full text-white">Email</label>
            <input ref={email} className="w-full my-2 mb-4 p-2 py-3 rounded bg-zinc-950 border border-white text-lg focus:text-white"  type="text" placeholder="Email"/>
            <label className="w-full text-white my-2 ">Password</label>
            <input ref={password} className="w-full my-2 mb-4 p-2 py-3 rounded bg-zinc-950 border border-white text-lg focus:text-white" type="password" placeholder="Password" />
            <div className="flex justify-center">
            <button className="btn w-7/12 mx-auto my-5 bg-green-600 text-black font-bold px-6 py-4 text-center rounded-3xl" onClick={handleButtonClick}>Log In</button>

            </div>
            <p className="text-center">Forget Your Password?</p>
            <p className="text-center">Don't have an account? Sign up for Spotify</p>
        </form>
            </div>
        
    </div>
    )
   
}

export default Login