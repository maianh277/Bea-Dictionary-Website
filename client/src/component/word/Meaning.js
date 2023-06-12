import React from "react";
import SynoAnno from "./SynoAnno";

const Meaning = (props) => {
    const meanings = props.meanings || [];
    return (
      <div className="mx-10 md:mx-7 sm:mx-0 mt-5  mb-5 gap-5">
            {meanings &&
                meanings.map((item) => {
                    return (
                        <div key={item.partOfSpeech}>
                            <h3 className="font-semibold text-blue-500 text-lg flex mt-3 uppercase">
                            {item.partOfSpeech}
                            </h3>
                            <hr></hr>
                            {item.definitions.map((def) => {
                                return (
                                    <div
                                        key={def.definition}
                                        className="flex flex-col"
                                    >
                                        <p className="font-semibold">
                                            {def.definition}
                                        </p>
                                        <ul className="mb-2 ml-2 italic">
                                            <li>
                                                {def.example
                                                    ? `"${def.example}"`
                                                    : ""}
                                            </li>
                                        </ul>
                                    </div>
                                );
                            })}
                            <hr></hr>
                        </div>
                    );
                })}
            <SynoAnno meanings={meanings} />
        </div>
    );
};

export default Meaning;
