import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 px-4">

            {/* Card */}
            <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                    Hiiii My Love 💖
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                    Before we begin…
                </h2>

                {/* Message */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                    I made something small for you today 🫶 <br />
                    It’s not perfect, <br />
                    but it’s made with a lot of love ❤️
                    <br /><br />
                    Just answer a few simple questions <br />
                    and let me show you how special you are to me ✨
                </p>

                {/* Warning */}
                <p className="text-sm text-rose-500 mb-8">
                    ⚠️ Warning: Clicking <span className="font-medium">Start</span> may cause smiling 😄💖
                </p>

                {/* Button */}
                <button
                    onClick={() => navigate("/question1")}
                    className="px-10 py-3 rounded-full bg-rose-500 text-white text-lg font-medium shadow-lg hover:bg-rose-600 hover:scale-105 transition-all duration-300"
                >
                    Start 💕
                </button>

            </div>
        </div>
    );
};

export default Home;
