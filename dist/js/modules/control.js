import {getTrailersBtns, getVideoWrappers, getVideos} from './getElements.js';
import {
  showBtnIsActive, hideBtnIsActive, showVideo, hideVideo,
  stopVideo, restoreVideo,
} from './service.js';

export const tralersBtnsControl = () => {
  const allTrailersBtns = getTrailersBtns();
  const allVideoWrappers = getVideoWrappers();
  const allVideos = getVideos();

  allTrailersBtns.forEach((btnClicked) => {
    btnClicked.addEventListener('click', () => {
      allTrailersBtns.forEach((btnRendered, i) => {
        if (btnClicked === btnRendered) {
          showBtnIsActive(btnRendered);
          restoreVideo(allVideos[i]);
          showVideo(allVideoWrappers[i]);
        } else {
          hideBtnIsActive(btnRendered);
          stopVideo(allVideos[i]);
          hideVideo(allVideoWrappers[i]);
        }
      });
    });
  });
};
