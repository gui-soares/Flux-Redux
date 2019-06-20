import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorite';
import { addFavorite } from './favorite';

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
