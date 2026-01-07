import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center'
            style={{ background: "linear-gradient(90deg,rgba(255, 232, 255, 1) 0%, rgba(237, 109, 224, 1) 57%, rgba(247, 139, 244, 1) 100%)" }}
        >
            <p className='text-4xl font-bold text-white'>Hiiii My Love 💖</p>
            <p className='text-2xl mt-5 font-bold text-white'>Before we begin...</p>
            <p className='text-xl font-white text-center text-white px-88 mt-10'>I made something small for you today 🫶
                It’s not perfect,
                but it’s made with a lot of love ❤️

                Just answer a few simple questions
                and let me show you how special you are to me ✨
            </p>
            <p className='text-red-700 mt-5'> Warning ⚠️
                Clicking “Start” may cause smiling 😄💖
            </p>
            <button onClick={() => navigate("/question1")} className='w-50 h-10 mt-10 bg-red-500 hover:bg-red-600 rounded-3xl text-white transition-color duration-400 cursor-pointer'>
                Start
            </button>
        </div>
    )
}

export default Home