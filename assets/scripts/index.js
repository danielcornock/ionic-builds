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
