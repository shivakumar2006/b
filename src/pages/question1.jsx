import React from 'react';
import { useNavigate } from 'react-router-dom';

const question1 = () => {

    const navigate = useNavigate();

    const handleClickYes = () => {
        alert("Then you already know my heart 💖");
        navigate("/question2")
    }

    const handleClickNo = () => {
        alert("Then this is me telling you 🫶");
        navigate("/question2")
    }

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center'
            style={{ background: "linear-gradient(90deg,rgba(255, 232, 255, 1) 0%, rgba(237, 109, 224, 1) 57%, rgba(247, 139, 244, 1) 100%)" }}
        >
            <p className='text-4xl font-bold text-white'>Before we go ahead...</p>
            <p className='mt-10 text-white text-3xl'>Have I ever told you how special you are to me? 🌸</p>
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

export default question1