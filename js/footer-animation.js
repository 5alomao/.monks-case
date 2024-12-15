const brands = document.querySelectorAll(".brands > a");

const footerObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(brands).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add("fade-top");
        observer.unobserve(entry.target);
      }, index * 100);
    }
  });
};

const footerObserverOptions = {
  threshold: 0.2,
};

const footerObserver = new IntersectionObserver(
  footerObserverCallback,
  footerObserverOptions
);

brands.forEach((brand) => {
  footerObserver.observe(brand);
});
