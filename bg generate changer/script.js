const genRandomColor = () => {
  let hexVal = "AB012CDEF3456789";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexVal[Math.floor(Math.random() * 5)];
  }
  return color;
};
document.querySelector("button").addEventListener("click", () => {
  let randomcolor = genRandomColor();
  document.querySelector("h1").innerText = randomcolor;
  document.body.style.backgroundColor = randomcolor;
});
