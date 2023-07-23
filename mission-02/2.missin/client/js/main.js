document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".nav li button");
  const mainVisualImage = document.querySelector(".visual img");
  const nickname = document.querySelector(".nickName");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const thumbnailImage = this.querySelector("img");
      mainVisualImage.src = thumbnailImage.src;

      const dataIndex = this.parentElement.getAttribute("data-index");
      const nicknameMap = {
        1: "EMBER",
        2: "WADE",
        3: "CLOD",
        4: "GALE",
      };
      nickname.textContent = nicknameMap[dataIndex];

      thumbnails.forEach((thumb) =>
        thumb.parentElement.classList.remove("is-active")
      );
      this.parentElement.classList.add("is-active");
    });
  });
});
