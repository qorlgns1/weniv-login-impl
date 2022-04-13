const loginBtn = document.querySelector(".login-form > .submit-login");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.querySelector(".login-form > .input-id");
  const pw = document.querySelector(".login-form > .input-pw");
  let idMessage = document.querySelector(".login-form p:first-of-type");
  let pwMessage = document.querySelector(".login-form p:last-of-type");

  if (!id.value) {
    id.style.borderColor = "#f4492e";
    idMessage.style.display = "block";
  } else {
    id.style.borderColor = "#c4c4c4";
    idMessage.style.display = "none";

    if (!pw.value) {
      pwMessage.style.display = "block";
    } else {
      pwMessage.style.display = "none";
      alert("로그인 성공");
    }
  }
});
