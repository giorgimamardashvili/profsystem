function popUp() {
  const popUpTrigger = document.querySelectorAll(".photo-gallery__item"),
    popUp = document.getElementById("popUp");
  console.log(popUpTrigger);
  console.log(popUp);

  popUpTrigger.forEach((item) => {
    item.addEventListener("click", () => {
      popUp.classList.toggle("active");
      document.body.style.overflow = "hidden";
      console.log(item);
      if (!item.children[2]) {
        let photo = item.cloneNode(true);
        let leftDiv = document.createElement("div");
        let rightDiv = document.createElement("div");

        popUp.appendChild(photo);
        popUp.appendChild(leftDiv);
        popUp.appendChild(rightDiv);

        let height = popUp.children[0].offsetHeight;
        popUp.children[2].style.maxHeight = `${height}px`;
        popUp.children[1].style.maxHeight = `${height}px`;
        console.log(popUp.children[2].style.height);
      }
      if (item.children[2]) {
        let video = item.children[2].cloneNode(true);
        let name = item.children[1].cloneNode(true);
        video.style.display = "block";
        let wrapper = document.createElement("div");
        wrapper.classList.add("video");
        wrapper.appendChild(name);
        wrapper.appendChild(video);
        popUp.appendChild(wrapper);
      }
    });
  });

  popUp.addEventListener("click", (e) => {
    if (e.target === popUp) {
      popUp.classList.remove("active");
      document.body.style.overflow = "";
      popUp.innerHTML = "";
    }
  });
}

popUp();
