import {trailerLinks} from './data.js';
// import {tralersBtns} from './getElements.js';

export const createElement = (tagName, attributesObj) => {
  const elem = document.createElement(tagName);

  Object.assign(elem, attributesObj);

  return elem;
};

export const btnAddDataSrc = (btn, i) => {
  btn.setAttribute('data-src', trailerLinks[i]);
};

export const isFirstElem = (index) => !index;

export const showBtnIsActive = (btn) => {
  btn.classList.add('trailers__btn--active');
};

export const hideBtnIsActive = (btn) => {
  btn.classList.remove('trailers__btn--active');
};

export const showVideo = (elem) => {
  elem.style.display = 'block';
};

export const hideVideo = (elem) => {
  elem.style.display = 'none';
};

export const keepVideoSrcdoc = (video) => {
  video.dataset.srcdoc = video.srcdoc;
};

export const stopVideo = (video) => {
  video.srcdoc = '';
};

export const restoreVideo = (video) => {
  if (video.dataset.srcdoc) {
    video.srcdoc = video.dataset.srcdoc;
  }
};

export const getAllVideoId = (trailerLinks) => {
  const idList = [];

  trailerLinks.forEach((link) => {
    const id = link.match(/\/embed\/([^/?]+)/)[1];
    idList.push(id);
  });

  return idList;
};
