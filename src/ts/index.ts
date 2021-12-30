import '../css/index.css';

const init = (): null => {
  const container = document.getElementById('app');

  const title = document.createElement('h1');
  title.innerHTML = 'Snake Games';

  container?.appendChild(title);
  return null;
};

document.body.onload = init();
