import React from "react";

const Meaning = () => {
    return (
        <div className="mx-20 mt-5 flex gap-5">
            <h3 className="font-semibold">Noun</h3>
            <div>
                <p className="italic font-semibold">
                    A feeling of energetic interest in a particular subject or
                    activity and an eagerness to be involved in it
                </p>
                <div className="flex flex-row gap-3 mt-3">
                    <div className="bg-gray-500 mt-1 w-1 h-10"></div>
                    <div>
                        <p>
                            One of the good things about teaching young children
                            is their enthusiasm.
                        </p>
                        <p>
                            After the accident he lost his enthusiasm for the
                            sport.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meaning;
