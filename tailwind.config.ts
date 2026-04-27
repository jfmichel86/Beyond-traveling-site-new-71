import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { fontFamily: { serif: ["ui-serif","Georgia","Cambria","Times New Roman","Times","serif"], sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Helvetica","Arial","Apple Color Emoji","Segoe UI Emoji"] } } },
  plugins: []
};
export default config;
