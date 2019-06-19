function slugify(words) {
  return words
    .replace(/\s+/g, '-')
    .toLowerCase();
}
