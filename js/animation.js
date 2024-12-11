const galleryItems = document.querySelectorAll('.gallery-item');

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {      
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

galleryItems.forEach(item => {
  observer.observe(item);
});
