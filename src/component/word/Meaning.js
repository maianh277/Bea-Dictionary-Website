// import React from "react";
// import Search from "../search/Search";
// const Meaning = (props) => {
//     const definitions = props.definitions || [];
//     const partOfSpeech = props.partOfSpeech;
//     return (
//         <div className="mx-20 mt-5 flex gap-5">
//             {definitions &&
//                 definitions.map((item) => {
//                     return (
//                         <div key={item.partOfSpeech}>
//                             <h3 className="font-semibold text-black">
//                                 {item.partOfSpeech}
//                             </h3>
//                             {item.definitions.map((def) => {
//                                 return (
//                                     <div key={def.definition}>
//                                         <p className="italic font-semibold">
//                                             {def.definitions}
//                                         </p>
//                                         {/* {def.example && (
//                                             <div className="flex flex-row gap-3 mt-3">
//                                                 <div className="bg-gray-500 mt-1 w-1 h-10"></div>
//                                                 <div>
//                                                     <h1>
//                                                         Example:{def.example}
//                                                     </h1>
//                                                 </div>
//                                             </div>
//                                         )} */}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     );
//                 })}
//             <div></div>
//         </div>
//     );
// };

// export default Meaning;
import React from "react";
import SynoAnno from "./SynoAnno";

const Meaning = (props) => {
    const meanings = props.meanings || [];
    return (
        <div className="mx-10 mt-5  mb-5 gap-5">
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
