export const trackTitleFilter = (searchTerm) => (song) => {
  return song.title?.toLowerCase().includes(searchTerm?.toLowerCase());
};

export const mantraTitleFilter = (searchTerm) => (mantra) => {
  return mantra.title?.toLowerCase().includes(searchTerm?.toLowerCase());
};
