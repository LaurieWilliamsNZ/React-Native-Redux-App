import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
// contains a list of libraries to show to the user
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer
});

