### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### tailwindcss 설치 및 적용
<tailwind 설치>\
npm i -D postcss autoprefixer tailwindcss daisyui\
npx tailwindcss init -p

<tailwind.config.js 수정>
module.exports = {\
	content: ['./arc/**/*.{js,jsx}'],\
	theme: {\
		extend: {},\
	},\
	plugins: [require('daisyui')],\
}

<index.css 수정>\
맨 윗줄에 추가\
@tailwind base;\
@tailwind components;\
@tailwind utilities;

### node_modules 수정
node_modules/daisyui/src/theming/themes.js 파일\
retro 내부 수정\
"base-100": "#ece3ca",\
"base-200": "#e4d8b4",\
"base-300": "#FFFEF6"
