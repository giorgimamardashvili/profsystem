function formValid() {
  const form = document.getElementById("myForm");
  const wrong = document.querySelector(".branch__wrong");
  const psw = document.getElementById("psw");

  console.log(psw);
  form.addEventListener("submit", (e) => {
    console.log(e);
    if (psw.value == "") {
      e.preventDefault();
      wrong.classList.add("active");
    }
  });
}

formValid();
