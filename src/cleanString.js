function cleanString(s) {
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

module.exports = cleanString;
