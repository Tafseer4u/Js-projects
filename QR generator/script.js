let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
generateQR = () => {
  if (qrtext.value.length > 0) {
    console.log(qrtext.value);
    qrimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imgbox.classList.add("showimg");
  } else {
    qrtext.classList.add("error");
    qrtext.value = "Please Enter some Text";
    qrtext.style.color = "red";
    setTimeout(() => {
      qrtext.classList.remove("error");
      qrtext.value = "";
      qrtext.style.color = "black";
    }, 1000);
  }
};
