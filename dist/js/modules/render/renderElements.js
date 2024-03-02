import {renderTrailersBtnsList} from './renderTrailerBtnsList.js';
import {renderTrailersList} from './renderTrailersList.js';
import {tralersContainer} from '../getElements.js';

export const renderElements = () => {
  const trailersBtnsList = renderTrailersBtnsList();
  const trailersList = renderTrailersList();

  tralersContainer.append(trailersBtnsList, trailersList);
};
