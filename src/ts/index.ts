import '../css/index.css';

import { $ } from './helpers/dom';

const preInit = () => {
  const _canvas = $.getElement('#main-canvas');
};

document.body.onload = preInit;
