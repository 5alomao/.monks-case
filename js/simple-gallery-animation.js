const galleryItems = document.querySelectorAll(".gallery-item");

const simpleGalleryObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-top");
      observer.unobserve(entry.target);
    }
  });
};

const simpleGalleryObserverOptions = {
  threshold: 0.2,
};

const simpleGalleryObserver = new IntersectionObserver(
  simpleGalleryObserverCallback,
  simpleGalleryObserverOptions
);

galleryItems.forEach((item) => {
  simpleGalleryObserver.observe(item);
});
