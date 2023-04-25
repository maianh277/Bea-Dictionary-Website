import React from "react";

const Word = () => {
    return (
        <div className="mx-20 shadow-xl px-10 py-5 rounded-lg relative">
            <div className="flex gap-3">
                <div className="flex flex-row gap-3 mt-1">
                    <h1 className="text-yellow-400 font-bold text-xl"></h1>
                    <i class="fa-solid fa-volume-high mt-2"></i>
                </div>

                <div>
                    <h2 className="text-sm">/ɪnˈθjuː.zi.æz.əm/</h2>
                    <p>
                        A feeling of energetic interest in a particular subject
                        or activity and an eagerness to be involved in it{" "}
                    </p>
                </div>
            </div>
            <div className="absolute text-white font-bold bg-yellow-300 px-4 py-1 rounded-full -top-3">
                Liked
            </div>
        </div>
    );
};

export default Word;
