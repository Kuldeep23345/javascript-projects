let qrInput = document.querySelector(".qr-input");
let qrButton = document.querySelector(".qr-button");
let qrImage = document.querySelector(".qr-image");
console.log(qrInput, qrImage, qrButton);
qrButton.addEventListener("click", () => {
  let inputValue = qrInput.value;
  if (!inputValue) {
    alert("Please Enter valid URL");
  } else {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  }
});
