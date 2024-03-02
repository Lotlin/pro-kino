import {trailerLinks, numOfTrailers, imgVideoLink, iframeStyle, iframeSvg,
  autoplayParam,
} from '../data.js';
import {
  createElement, isFirstElem, showVideo, getAllVideoId, keepVideoSrcdoc,
} from '../service.js';

const renderVideoItem = () => createElement('li', {
  className: 'trailers__video-item',
});

const renderVideoWrapper = () => createElement('div', {
  className: 'trailers__video-wrapper',
  style: 'display: none',
});

const renderVideo = (allVideoId, i) => {
  const video = createElement('iframe', {
    className: 'trailers__video',
    src: trailerLinks[i],
  });

  video.srcdoc = `
    ${iframeStyle}
    <a href=${trailerLinks[i]}${autoplayParam}>
      <img src="${imgVideoLink[0]}${allVideoId[i]}${imgVideoLink[1]}">
      <div id="button">
        ${iframeSvg}
      </div>
    </a>
  `;

  return video;
};

const renderFirstTrailer = (videoWrapper, indexOfVideoWrapper) => {
  if (isFirstElem(indexOfVideoWrapper)) {
    showVideo(videoWrapper);
  }
};

const renderVideoItemsList = () => {
  const videoItemsList = [];
  const allVideoId = getAllVideoId(trailerLinks);

  for (let i = 0; i < numOfTrailers; i++) {
    const item = renderVideoItem();
    const videoWrapper = renderVideoWrapper();
    const video = renderVideo(allVideoId, i);

    keepVideoSrcdoc(video);

    renderFirstTrailer(videoWrapper, i);

    videoWrapper.append(video);
    item.append(videoWrapper);
    videoItemsList.push(item);
  }

  return videoItemsList;
};

export const renderTrailersList = () => {
  const trailersList = createElement('ul', {
    className: 'trailers__video-list',
  });

  const videoItemsList = renderVideoItemsList();

  videoItemsList.forEach((elem) => {
    trailersList.append(elem);
  });

  return trailersList;
};
