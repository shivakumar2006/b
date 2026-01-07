import React from 'react';
import { useNavigate } from 'react-router-dom';

const Question2 = () => {

    const navigate = useNavigate();

    const handleClickYes = () => {
        alert("That smile is my favorite 😌💖");
        navigate("/question3");
    }

    const handleClickNo = () => {
        alert("Okay… challenge accepted 😏");
        navigate("/question3");
    }

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center'
            style={{ background: "linear-gradient(90deg,rgba(255, 232, 255, 1) 0%, rgba(237, 109, 224, 1) 57%, rgba(247, 139, 244, 1) 100%)" }}
        >
            <p className='text-4xl font-bold text-white'>Another honest one…</p>
            <p className='mt-10 text-white text-3xl'>Do you smile a little when you think about us? 😊💕</p>
            <div className='w-120 mt-10 font-bold flex flex-row justify-between items-center'>
                <button onClick={handleClickYes} className='w-50 h-10 text-white rounded-3xl bg-green-500 hover:bg-green-600 transition-colors duration-400 cursor-pointer'>
                    Yup
                </button>
                <button onClick={handleClickNo} className='w-50 h-10 text-white rounded-3xl bg-red-500 hover:bg-red-600 transition-colors duration-400 cursor-pointer'>
                    Nope
                </button>
            </div>
        </div>
    )
}

export default Question2