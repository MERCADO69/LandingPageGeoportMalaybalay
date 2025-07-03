// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {
  
  // Select all elements with class 'feature-card' and 'content-block'
  const animatedElements = document.querySelectorAll('.feature-card, .content-block');

  animatedElements.forEach(el => {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  });
});
