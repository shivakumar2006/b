import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question2 = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleYes = () => {
        setMessage("That smile is my favorite 😌💖");
        setTimeout(() => navigate("/question3"), 2500);
    };

    const handleNo = () => {
        setMessage("Okay… challenge accepted 😏");
        setTimeout(() => navigate("/question3"), 2500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 px-4">

            {/* Card */}
            <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn">

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-semibold text-rose-600 mb-6">
                    Another honest one…
                </h1>

                {/* Question */}
                <p className="text-lg md:text-2xl text-gray-700 font-medium mb-10">
                    Do you smile a little when you think about us? 😊💕
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-8">
                    <button
                        onClick={handleYes}
                        className="px-8 py-3 rounded-full bg-emerald-500 text-white text-lg font-medium shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
                    >
                        Yup 💕
                    </button>

                    <button
                        onClick={handleNo}
                        className="px-8 py-3 rounded-full bg-rose-500 text-white text-lg font-medium shadow-lg hover:bg-rose-600 hover:scale-105 transition-all duration-300"
                    >
                        Nope 🙈
                    </button>
                </div>

                {/* Soft Message */}
                {message && (
                    <p className="mt-8 text-rose-600 text-lg font-medium transition-opacity">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Question2;
