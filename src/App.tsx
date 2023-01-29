import React from "react";
import { getRandomNumber } from "./utils/random";
import { getRandomMatrix } from "./utils/random";
import { getRandomArrayElement } from "./utils/random";
import { getRandomDate } from "./utils/random";
function App() {
  console.log(getRandomNumber(5, 10));
  console.log(getRandomNumber(5, 10, false, true));
  console.log(getRandomNumber(10, 5));

  const matrix = getRandomMatrix(3, 4, 5, 10);
  console.log(matrix);

  const colors = ["red", "green", "blue", "purple"];
  console.log(getRandomArrayElement(colors));

  const date = getRandomDate(2000, 2023);
  console.log(date);
  return <div></div>;
}
export default App;