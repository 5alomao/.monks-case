const availablePlatformsBox = document.getElementById("info-box");
const platformsImg = document.querySelectorAll(".available-platforms > img");

const availablePlatformsCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-top");
      observer.unobserve(entry.target);
    }
  });
};

const availableObserverOptions = {
  threshold: 0.2,
};

const availablePlatformsObserver = new IntersectionObserver(
  availablePlatformsCallback,
  availableObserverOptions
);

availablePlatformsObserver.observe(availablePlatformsBox);

setTimeout(() => {
  platformsImg.forEach((img) => {
    availablePlatformsObserver.observe(img);
  });
}, 1000);
