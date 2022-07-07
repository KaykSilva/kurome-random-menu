const imageArray = [
	"https://telegra.ph/file/fe195a0a4097df9283c54.jpg",
	"https://telegra.ph/file/6f12fb42e1ab14e25264d.jpg",
	"https://telegra.ph/file/43ffb2c1ddc11035e9171.jpg",
	"https://telegra.ph/file/63f2f4bba611e0763b06d.jpg",
	"https://telegra.ph/file/6dc49612a08c88b6587bd.jpg",
	"https://telegra.ph/file/817a33fa4701bb8f629c8.jpg",
	"https://telegra.ph/file/2641fd3e4acc32442d569.jpg",

];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}