import React from 'react';
import { useNavigate } from 'react-router-dom';

const Question3 = () => {

    const navigate = useNavigate();

    const handleClickYes = () => {
        alert("That makes my heart so full 🥺💕");
        navigate("/bday");
    }

    // const handleClickNo = () => {
    //     alert("Okay… challenge accepted 😏");
    //     navigate("/question3");
    // }

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center'
            style={{ background: "linear-gradient(90deg,rgba(255, 232, 255, 1) 0%, rgba(237, 109, 224, 1) 57%, rgba(247, 139, 244, 1) 100%)" }}
        >
            <p className='text-4xl font-bold text-white'>One last thing…</p>
            <p className='mt-10 text-white text-3xl'>Can I keep choosing you, today and every day? 🌍❤️</p>
            <div className='w-120 mt-10 font-bold flex flex-row justify-between items-center'>
                <button onClick={handleClickYes} className='w-50 h-10 text-white rounded-3xl bg-green-500 hover:bg-green-600 transition-colors duration-400 cursor-pointer'>
                    Yup
                </button>
                <button onClick={handleClickYes} className='w-50 h-10 text-white rounded-3xl bg-red-500 hover:bg-red-600 transition-colors duration-400 cursor-pointer'>
                    yup
                </button>
            </div>

            <p className='text-white font-extrabold text-2xl mt-10'>There is not Nooo this time because you don't have that option so,  just forgot it 😏</p>
        </div>
    )
}

export default Question3