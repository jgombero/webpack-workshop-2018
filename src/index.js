import nav from "./nav";
import { footer, top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageURL from "./webpack-logo.jpeg";

import "./button.css";
import "./footer.css";

const image = makeImage(imageURL);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("magenta");

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);

console.log(
  nav(),
  top,
  bottom,
  makeButton("My first button!"),
  makeColorStyle("cyan")
);
