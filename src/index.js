import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);
import myImage from './5070.png';

const image = document.createElement('img');
image.src = myImage;
document.body.appendChild(image);
