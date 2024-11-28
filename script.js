document.addEventListener("DOMContentLoaded", function() {

    const mouseCircle = document.createElement('div');
    mouseCircle.classList.add('mouse-circle');
    document.body.appendChild(mouseCircle);

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animate() {
        circleX += (mouseX - circleX) * 0.1;
        circleY += (mouseY - circleY) * 0.1;

        mouseCircle.style.transform = `translate(${circleX - 5}px, ${circleY - 5}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});