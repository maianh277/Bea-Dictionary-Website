import React from "react";

const SynoAnno = () => {
    return (
        <div className="flex flex-row justify-around mx-20 my-5">
            <div className="flex flex-row gap-3">
                <div className="rounded-full w-full h-8 p-1 bg-[#72CCFF] font-semibold text-center">
                    Synonyms
                </div>
                <p>Excitement, interest, energy</p>
            </div>
            <div className="flex flex-row gap-3">
                <div className="rounded-full w-full h-8 p-1 bg-[#FFF175] font-semibold text-center">
                    Annonyms
                </div>
                <p>Excitement, interest, energy</p>
            </div>
        </div>
    );
};

export default SynoAnno;
