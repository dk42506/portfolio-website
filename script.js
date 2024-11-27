document.addEventListener("DOMContentLoaded", function() {

    const mouseCircle = document.createElement('div');
    mouseCircle.classList.add('mouse-circle');
    document.body.appendChild(mouseCircle);

    const heroName = document.getElementById('hero-name');
    const heroText = heroName.textContent;
    heroName.innerHTML = heroText.split('').map(char => `<span class="char">${char}</span>`).join('');

    const chars = document.querySelectorAll('.char');

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;

        chars.forEach(char => {
            const rect = char.getBoundingClientRect();
            const charX = rect.left + rect.width / 2;
            const charY = rect.top + rect.height / 2;
            const distance = Math.sqrt((mouseX - charX) ** 2 + (mouseY - charY) ** 2);

            const maxDistance = 100; // Adjust the radius as needed
            const glowIntensity = Math.max(0, 1 - distance / maxDistance);
            char.style.textShadow = `0 0 ${glowIntensity * 10}px rgba(255, 255, 255, ${glowIntensity})`;
        });
    });

    function animate() {
        circleX += (mouseX - circleX) * 0.1; // Adjust the delay factor here
        circleY += (mouseY - circleY) * 0.1;

        mouseCircle.style.transform = `translate(${circleX - 5}px, ${circleY - 5}px)`; // Adjust the offset here

        requestAnimationFrame(animate);
    }

    animate();
});