import { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";

export default function SnakeGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FollowCamera(
      "FollowCam",
      new BABYLON.Vector3(0, 10, -10),
      scene
    );
    camera.radius = 12;
    camera.heightOffset = 6;
    camera.rotationOffset = 0;
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    const ground = BABYLON.MeshBuilder.CreateGround(
      "ground",
      { width: 20, height: 20 },
      scene
    );

    let snake = [];
    let direction = "right";
    let food;

    const createCube = (x, z, color = new BABYLON.Color3(0, 1, 0)) => {
      const box = BABYLON.MeshBuilder.CreateBox("cube", { size: 1 }, scene);
      box.position.set(x, 0.5, z);
      const mat = new BABYLON.StandardMaterial("mat", scene);
      mat.diffuseColor = color;
      box.material = mat;
      return box;
    };

    const spawnFood = () => {
      const x = Math.floor(Math.random() * 20 - 10);
      const z = Math.floor(Math.random() * 20 - 10);
      if (food) food.dispose();
      food = createCube(x, z, new BABYLON.Color3(1, 0, 0));
    };

    snake.push(createCube(0, 0));
    spawnFood();

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") direction = "up";
      if (e.key === "ArrowDown") direction = "down";
      if (e.key === "ArrowLeft") direction = "left";
      if (e.key === "ArrowRight") direction = "right";
    });

    let stepTimer = 0;

    scene.onBeforeRenderObservable.add(() => {
      stepTimer++;
      if (stepTimer % 10 !== 0) return;

      const head = snake[0];
      const newHead = createCube(head.position.x, head.position.z);

      if (direction === "up") newHead.position.z -= 1;
      if (direction === "down") newHead.position.z += 1;
      if (direction === "left") newHead.position.x -= 1;
      if (direction === "right") newHead.position.x += 1;

      camera.lockedTarget = newHead;
      snake.unshift(newHead);

      if (
        Math.abs(newHead.position.x - food.position.x) < 1 &&
        Math.abs(newHead.position.z - food.position.z) < 1
      ) {
        spawnFood();
      } else {
        const tail = snake.pop();
        tail.dispose();
      }
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <div style={{ height: "100vh", background: "#111" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
