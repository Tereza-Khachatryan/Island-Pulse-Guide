const reviewBlocks = document.querySelectorAll(".reviews");

reviewBlocks.forEach((block) => {
  const slides = block.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function prevPage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1
    showSlide(currentIndex);
  }

  function nextPage(){
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
  }

  block.querySelector(".arrowLeft").addEventListener("click", () => {
    prevPage()
  });

  block.querySelector(".arrowRight").addEventListener("click", () => {
    nextPage()
  });

  showSlide(currentIndex);

  const intervalId = setInterval(nextPage, 5000, currentIndex)

    setTimeout(clearInterval,900000,intervalId)
});