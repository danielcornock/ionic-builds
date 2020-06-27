const coloriseFeatures = () => {
  const featureTitles = document.querySelectorAll('.features-itemHeading');

  featureTitles.forEach((title) => {
    const content = title.textContent,
      splitContent = content.split(' '),
      firstWord = splitContent[0];

    splitContent[0] = `<span class="features-itemHeading--highlight">${firstWord}</span>`;

    title.innerHTML = splitContent.join(' ');
  });
};

coloriseFeatures();

const slider = () => {
  const carousel = document.querySelector('.testimonials-carousel');

  if (!carousel) return;

  const clientWidth = carousel.clientWidth;
  const slider = document.querySelector('.testimonials-carouselContent');
  const testimonials = document.querySelectorAll('.testimonials-item');

  const bubbleContainer = document.querySelector('.testimonials-bubbles');

  for (let i = 0; i < testimonials.length; i++) {
    const el = document.createElement('div');
    el.classList.add('testimonials-bubble');
    el.addEventListener('click', () => {
      const diff = -(i * clientWidth);
      slider.style.left = `${diff}px`;
    });

    bubbleContainer.appendChild(el);
  }
};

slider();
