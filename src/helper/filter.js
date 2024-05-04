export const trackTitleFilter = (searchTerm) => (song) => {
  return song.title?.toLowerCase().includes(searchTerm?.toLowerCase());
};
