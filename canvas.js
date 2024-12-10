const canvas = document.getElementById("myCanvas");ct
      const ctx = canvas.getContext("2d");

      const numCubes = 18; // Количество кубов
      const cubeSize = 200; // Размер каждого куба
      const rotationIncrement = 5; // Угол вращения для каждого куба
      const pauseRotation = 90; // Пауза после 90 градусов вращения
      const speed = 4; // Скорость анимации

      let angle = 0; // Текущий угол вращения
      let cubes = [];

      for (let i = 0; i < numCubes; i++) {
        cubes.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          angle: 0,
        });
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < cubes.length; i++) {
          const cube = cubes[i];
          ctx.save();
          ctx.translate(cube.x, cube.y);
          ctx.rotate((cube.angle * Math.PI) / 180);
          ctx.fillStyle = "black";
          ctx.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);
          ctx.restore();

          cube.angle += rotationIncrement;
        }

        angle += rotationIncrement;

        if (angle >= pauseRotation) {
          angle = 0;
          setTimeout(() => {
            requestAnimationFrame(draw);
          }, 1000); // Пауза после 90 градусов вращения
        } else {
          setTimeout(() => {
            requestAnimationFrame(draw);
          }, 1000 / speed);
        }
}

      draw();