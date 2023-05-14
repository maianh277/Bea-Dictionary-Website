/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [require("tailwind-scrollbar")],
    theme: {
        fontSize: {
            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            lg: ["20px", "28px"],
            xl: ["24px", "32px"],
        },
        fontFamily: {
            Lilita: ['"LilitaOne"'],
            Manrope: ['"Manrope'],
            Comfortaa: ['"Comfortaa'],
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            2: "2px",
            3: "3px",
            4: "4px",
            6: "6px",
            8: "8px",
        },
    },
};
