import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question3 = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleYes = () => {
        setMessage("That makes my heart feel so full 🥺💕");
        setTimeout(() => navigate("/bday"), 2500);
    };

    const handleNo = () => {
        setMessage("There is not Noo my girl because, you don't have that option to choose 😏");
        setTimeout(() => navigate("/bday"), 2500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 px-4">

            {/* Card */}
            <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fadeIn">

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-semibold text-rose-600 mb-6">
                    One last thing…
                </h1>

                {/* Question */}
                <p className="text-lg md:text-2xl text-gray-700 font-medium mb-10">
                    Can I keep choosing you, today and every day? 🌍❤️
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-8">
                    <button
                        onClick={handleYes}
                        className="px-8 py-3 rounded-full bg-emerald-500 text-white text-lg font-medium shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
                    >
                        Yes 💖
                    </button>

                    <button
                        onClick={handleNo}
                        className="px-8 py-3 rounded-full bg-gray-300 text-gray-700 text-lg font-medium shadow-lg hover:bg-gray-400 hover:scale-105 transition-all duration-300"
                    >
                        Noo
                    </button>
                </div>

                {/* Soft Message */}
                {message && (
                    <p className="mt-8 text-rose-600 text-lg font-medium transition-opacity">
                        {message}
                    </p>
                )}

                {/* Small reassurance */}
                <p className="mt-6 text-sm text-gray-500">
                    (There’s no pressure — just honesty 💫)
                </p>
            </div>
        </div>
    );
};

export default Question3;
