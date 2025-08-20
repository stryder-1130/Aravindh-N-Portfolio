const counters = document.querySelectorAll('.count');
let animated = false;

function animateCounters() {
    if (animated) return;
    const section = document.querySelector('#whychoose');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        counters.forEach(counter => {
            let target = +counter.getAttribute('data-target');
            let count = 0;
            let speed = target / 100;

            function updateCount() {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
        animated = true;
    }
}

window.addEventListener('scroll', animateCounters);
