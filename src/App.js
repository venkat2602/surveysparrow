import { useState } from "react";
import "./App.css";
import background from "./assets/background.jpeg";
import profile from "./assets/HITMAN.jpeg";

function App() {
  const [followersCount, setFollowersCount] = useState(248);
  const [toggleFollow, setToggleFollow] = useState(true);

  function handleFollow() {
    if (toggleFollow) {
      setFollowersCount(followersCount + 1);
    } else {
      setFollowersCount(followersCount - 1);
    }
    setToggleFollow(!toggleFollow);
  }

  return (
    <div className='flex flex-col w-80 justify-center mx-auto my-auto shadow-lg rounded-2xl'>
      <div className='w-full relative'>
        <img
          className='w-full h-40'
          src={background}
          alt='backgroundimage'></img>
        <img
          src={profile}
          className='w-28 h-28 rounded-full absolute -bottom-12 left-1/3 right-1/3'
          alt='profile pic'></img>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center p-2 text-center'>
        <h1 className='text-2xl font-semibold text-violet-400'>Rohit</h1>
        <p className='text-slate-500'>UI/UX designer</p>
      </div>
      <div className='flex flex-row justify-around text-center border-y p-2 mx-2'>
        <div>
          <h3 className='text-slate-500'>Projects</h3>
          <p className='text-lg font-semibold'>7</p>
        </div>
        <div>
          <h3 className='text-slate-500'>Following</h3>
          <p className='text-lg font-semibold'>{followersCount}</p>
        </div>
        <div>
          <h3 className='text-slate-500'>Followers</h3>
          <p className='text-lg font-semibold'>162</p>
        </div>
      </div>
      <button
        className='text-white bg-violet-500 rounded-lg p-2 mx-10 my-7
        '
        onClick={handleFollow}>
        {toggleFollow ? "Follow" : "Unfollow"}
      </button>
    </div>
  );
}

export default App;
