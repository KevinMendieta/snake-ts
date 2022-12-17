import '../css/index.css';

const createCanvas = (): HTMLCanvasElement => {
  const container = document.getElementById('app');

  const canvas = document.createElement('canvas');
  container?.appendChild(canvas);
  return canvas;
};

const preInit = () => {
  const _canvas = createCanvas();
};

document.body.onload = preInit;
