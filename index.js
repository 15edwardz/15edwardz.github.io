  const counter1 = document.getElementById("counter1");
  const counter2 = document.getElementById("counter2");

  const start1 = 0;
  const end1 = 620;

  const start2 = 0;
  const end2 = 1367;

  const duration = 5000; // in milliseconds
  const interval = 7; // in milliseconds

  const increment1 = (end1 - start1) / (duration / interval);
  const increment2 = (end2 - start2) / (duration / interval);

  let currentTime = 0;

  const animateCounters = () => {
    currentTime += interval;

    let newValue1 = Math.round(increment1 * currentTime + start1);
    let newValue2 = Math.round(increment2 * currentTime + start2);

    if (newValue1 > end1) {
      newValue1 = end1;
    }

    if (newValue2 > end2) {
      newValue2 = end2;
    }

    counter1.innerHTML = `${newValue1} kg`;
    counter2.innerHTML = `${newValue2} lbs`;

    if (currentTime >= duration) {
      clearInterval(timer);
      counter1.innerHTML = `${end1} kg`;
      counter2.innerHTML = `${end2} lbs`;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const timer = setInterval(animateCounters, interval);

        counter1.style.opacity = 1;
        counter2.style.opacity = 1;

        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector(".counter-wrapper"));

  const container = document.getElementById("intro");

  window.addEventListener("scroll", () => {
    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;

    if (containerTop < window.innerHeight && containerBottom > 0) {
      container.style.opacity = 1;
    }
  });


