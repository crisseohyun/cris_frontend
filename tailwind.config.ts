import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", // 글로벌 메인 색상 설정 (예: 트위터 파란색)
        secondary: "#14171A", // 서브 색상
        accent: "#FFAD1F", // 강조 색상
        background: "#F5F8FA", // 배경색
        darkBackground: "#15202B", // 다크 모드 배경색
        darkPrimary: "#1DA1F2", // 다크 모드 메인 색상
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // Tailwind의 기본 sans 폰트를 Pretendard로 교체
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
