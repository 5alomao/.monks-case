const formItem = document.querySelector("#forms-box #form");
const formImg = document.querySelector("#forms-box #form-img");

const formImgObserverCallback = (entries, observer2) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-right");
      formImgObserver.unobserve(entry.target);
    }
  });
};

const formObserverCallback = (entries, observer3) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-left");
      formObserver.unobserve(entry.target);
    }
  });
};

const formObserverOptions = {
  threshold: 0.3,
};

const formImgObserver = new IntersectionObserver(
  formImgObserverCallback,
  formObserverOptions
);
const formObserver = new IntersectionObserver(
  formObserverCallback,
  formObserverOptions
);

formImgObserver.observe(formImg);
formObserver.observe(formItem);
