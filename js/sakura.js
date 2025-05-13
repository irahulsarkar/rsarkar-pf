document.addEventListener('DOMContentLoaded', function() {
  const sakuraContainer = document.getElementById('sakura-container');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas dimensions to match the container
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.width = sakuraContainer.offsetWidth;
  canvas.height = sakuraContainer.offsetHeight;
  sakuraContainer.appendChild(canvas);

  // Load sakura petal images
  const petalImg = new Image();
  petalImg.src = '/assets/img/sakura.png'; // Replace with your image

  const petals = [];
  const petalCount = 5;

  class Petal {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -100;
      this.size = Math.random() * 30 + 20;
      this.speed = Math.random() * 2 + 1;
      this.angle = Math.random() * 360;
      this.rotationSpeed = Math.random() * 2;
    }

    update() {
      this.y += this.speed;
      this.angle += this.rotationSpeed;
      if (this.y > canvas.height) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.angle * Math.PI) / 90);
      ctx.drawImage(petalImg, -this.size/2, -this.size/2, this.size, this.size);
      ctx.restore();
    }
  }

  petalImg.onload = function() {
    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(petal => {
        petal.update();
        petal.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  };

  // Handle resizing of the container
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      canvas.width = entry.contentRect.width;
      canvas.height = entry.contentRect.height;
    }
  });

  resizeObserver.observe(sakuraContainer);
});