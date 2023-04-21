import React from "react";
import book1 from "../assets/HomePage/book1.png";
import yellowline from "../assets/HomePage/yellowline.png";
import ReadingBook from "../assets/HomePage/ReadingBook.png";
import Globe from ".././assets/HomePage/Globe.png";
import Name from "../assets/HomePage/Name.png";
const Home = () => {
    return (
        <div className="scroll-smooth">
            <div className="relative">
                <img
                    src={yellowline}
                    alt="Bg"
                    className="w-full h-[600px] ease-out"
                />
                <img
                    src={Name}
                    alt="Website's name"
                    className="absolute top-20 left-10"
                />
                {/* <p className="absolute top-[15rem] left-20 text-green-500 font-bold">
                    One of the most suitable dictionary for English learner
                </p> */}
                <img
                    src={book1}
                    alt="Book1"
                    className="absolute top-20 right-2"
                />
            </div>
            <div className="flex m-20">
                <img src={ReadingBook} alt="Book2" className="ml-10" />
                <span className="m-10">
                    <h1 className="font-semibold text-lg mb-2">
                        WEB English - English Dictionary{" "}
                    </h1>
                    <p className="mb-3">
                        Từ điển Anh - Anh WEB được thiết kế dành riêng cho người
                        học tiếng Anh ở nhiều cấp bậc và những người cần sử dụng
                        tiếng Anh trong công việc.
                    </p>
                    <p className="mb-3">
                        Từ điển WEB được tích hợp cùng với các định nghĩa, từ
                        đồng nghĩa đơn giản dễ hiểu, giải thích ngữ pháp, phiên
                        âm, âm thanh giọng nói thực và các ví dụ thể hiện cách
                        dùng của từ, đặc biệt còn mở rộng hình ảnh liên quan đến
                        từ vựng.
                    </p>
                    <p className="mb-3">
                        Ngoài ra, bạn cũng có thể tạo riêng cho mình một “Danh
                        sách từ vựng yêu thích của tôi” để học.
                    </p>
                </span>
            </div>
            <div className="flex m-20">
                <span className="m-10">
                    <h1 className="font-semibold text-lg mb-2">
                        WEB English - English Dictionary{" "}
                    </h1>
                    <p className="mb-3">
                        Từ điển Anh - Anh WEB được thiết kế dành riêng cho người
                        học tiếng Anh ở nhiều cấp bậc và những người cần sử dụng
                        tiếng Anh trong công việc.
                    </p>
                    <p className="mb-3">
                        Từ điển WEB được tích hợp cùng với các định nghĩa, từ
                        đồng nghĩa đơn giản dễ hiểu, giải thích ngữ pháp, phiên
                        âm, âm thanh giọng nói thực và các ví dụ thể hiện cách
                        dùng của từ, đặc biệt còn mở rộng hình ảnh liên quan đến
                        từ vựng.
                    </p>
                    <p className="mb-3">
                        Ngoài ra, bạn cũng có thể tạo riêng cho mình một “Danh
                        sách từ vựng yêu thích của tôi” để học.
                    </p>
                </span>
                <img src={Globe} alt="Boy with the globe" className="w-1/3" />
            </div>
        </div>
    );
};

export default Home;
