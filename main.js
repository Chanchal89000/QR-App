let frm = document.querySelector("form");
let input = document.querySelector("input");
let slc = document.querySelector("#select1");
let image = document.querySelector("img");
let accessDropdown = document.querySelector("#select2");
// accessDropdown.value = "all";

const generateQR = async (e) => {
  let selectedAccess = accessDropdown.value;
  let data = `
    Title : ${input.value},
    Access : ${selectedAccess}  

  `;
  e.preventDefault();
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${slc.value}&data=${data}`
  );
  image.setAttribute("src", response.url);
  frm.reset();
};

frm.addEventListener("submit", generateQR);
