import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'bg-img': "url('/torre.jpg')"
		},
		colors:{
			azulBg: '#10101C',
      azulpopup:'#0c0c15',
		},
	},
},
  		
  plugins: [],
};  
export default  config;
