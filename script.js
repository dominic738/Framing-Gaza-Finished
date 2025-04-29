document.addEventListener('DOMContentLoaded', function() {

  // Lightbox functionality
  const images = document.querySelectorAll('.clickable-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Always check if lightbox elements exist!
  if (lightbox && lightboxImg && images.length > 0) {
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
        setTimeout(() => {
          lightbox.classList.add('show');
        }, 10); // small delay for CSS transition
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 400); // Match your CSS transition time
    });
  }

  // Observer for timeline animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.timeline-event').forEach(event => {
    observer.observe(event);
  });

  // Observer for media fade-in
  const mediaObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-media');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.hidden-media').forEach(el => mediaObserver.observe(el));

  // Observer for data fade-in
  const dataObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-data');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.hidden-data').forEach(el => dataObserver.observe(el));

});
