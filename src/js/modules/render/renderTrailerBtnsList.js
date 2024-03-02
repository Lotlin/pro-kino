
import {
  createElement, showBtnIsActive, isFirstElem, btnAddDataSrc,
} from '../service.js';
import {numOfTrailers} from '../data.js';

const btnRender = (index) => {
  const btn = createElement('button', {
    className: 'trailers__btn',
    textContent: `трейлер ${index + 1}`,
    ariaLabel: `трейлер ${index + 1}`,
  });

  if (isFirstElem(index)) {
    showBtnIsActive(btn);
  }

  return btn;
};

const btnItemRender = () => createElement('li', {
  className: 'trailers__btn-item',
});

export const renderTrailersBtnsList = () => {
  const trailersBtnsList = createElement('ul', {
    className: 'trailers__btn-list',
  });

  for (let i = 0; i < numOfTrailers; i++) {
    const btn = btnRender(i);
    btnAddDataSrc(btn, i);
    const btnItem = btnItemRender();

    btnItem.append(btn);
    trailersBtnsList.append(btnItem);
  }

  return trailersBtnsList;
};
