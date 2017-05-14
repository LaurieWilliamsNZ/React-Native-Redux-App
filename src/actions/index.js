// function is an action creator.
export const selectLibrary = (libraryID) => {
  return {
    type: 'select_library',
    payLoad: libraryID
  };
};
