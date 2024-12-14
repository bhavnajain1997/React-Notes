const Header = () => {
    return(
        <div className="header flex justify-between px-14 ">
             <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" className="w-20 max-h-28 p-4" alt="logo"/>
             </div>
             <div className="Search">
                <form className="relative px-3">
                <i className="fa-solid fa-magnifying-glass absolute top-[35%] left-[5%]"></i>
                    <input type="text"className="border border-black text-left py-2 pl-10   rounded-3xl" placeholder=" Search Songs" size="70"/>
                </form>
                
             </div>
             <div>
                <div>
                    <button className="btn border border-white py-2 px-10 font-bold text-white">Login</button>

                </div>
             </div>
        </div>
    )
}
export default Header