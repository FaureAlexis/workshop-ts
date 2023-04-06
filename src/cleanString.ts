function cleanString(s: string): string {
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

export default cleanString;
