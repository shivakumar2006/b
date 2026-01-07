import { useEffect, useState, useRef } from "react";

export default function BirthdayFinal() {
    const [show, setShow] = useState(false);
    const audioRef = useRef(null);

    // useEffect(() => {
    //     const timer = setTimeout(() => setShow(true), 300);



    //     return () => clearTimeout(timer);
    // }, []);


    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 300);

        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.volume = 0.2;
                audioRef.current.play().catch(() => { });
            }
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen p-20 flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 px-4">
            <audio ref={audioRef} src="/music2.mp3" loop />

            <div
                className={`max-w-3xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-semibold text-center text-rose-700 mb-6">
                    Happy Birthday, My Love 🎉
                </h1>

                {/* Message */}
                <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                        Today is your birthday… but somehow, it feels like{" "}
                        <span className="font-medium text-rose-600">I’m the lucky one</span>.
                    </p>

                    <p>
                        I don’t know how to put everything into perfect words, but I hope you
                        can feel what I mean — because every line here comes straight from
                        my heart ❤️
                    </p>

                    <p>
                        You are not just someone I love. You are the person who makes my days
                        lighter, my silences softer, and my life feel a little more
                        meaningful 🌷
                    </p>

                    <p>
                        Sometimes I look at you and think…{" "}
                        <span className="italic">
                            how did I get so lucky?
                        </span>{" "}
                        Lucky to have your smile, your presence, and your way of making
                        everything feel okay — even when nothing is 💭
                    </p>

                    <p>
                        You don’t even realize it, but you change me in the best ways. You
                        make me want to be kinder, stronger, and better — not for the world,
                        but for <span className="font-medium text-rose-600">you</span>.
                    </p>

                    <p>
                        If there’s one thing I want you to always remember, it’s this:
                    </p>

                    <ul className="list-disc list-inside ml-2 text-rose-700">
                        <li>You matter.</li>
                        <li>You are enough.</li>
                        <li>You are deeply, truly loved.</li>
                    </ul>

                    <p>
                        On your birthday, I don’t wish you just happiness. I wish you peace
                        on hard days, strength when you feel tired, and someone who always
                        stands beside you — and I hope I get to be that person 🤍
                    </p>

                    <p>
                        No matter what the future holds, no matter where life takes us, this
                        moment — <span className="italic">you reading this</span> — will
                        always be special to me.
                    </p>

                    <p>
                        Thank you for being you. Thank you for existing. Thank you for
                        letting me love you.
                    </p>
                </div>

                {/* Closing */}
                <div className="mt-8 text-center text-rose-700 space-y-3">
                    <p className="font-medium">
                        Happy Birthday, Beautiful 💫
                    </p>

                    <p className="text-sm md:text-base text-gray-600">
                        May this year be gentle with your heart <br />
                        and kind to your soul.
                    </p>

                    <p className="mt-4 text-lg font-semibold">
                        I love you.
                    </p>

                    <p className="text-sm text-gray-600">
                        Quietly. Deeply. With all my heart ❤️
                    </p>

                    <p className="mt-4 font-medium">
                        Always yours
                    </p>
                </div>

                {/* Optional Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 rounded-full bg-rose-500 text-white text-sm md:text-base shadow-lg hover:bg-rose-600 transition"
                    >
                        Replay This Moment 💞
                    </button>
                </div>
            </div>
        </div>
    );
}
