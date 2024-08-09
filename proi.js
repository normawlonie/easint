const subtitleFontWeight = 'bold'; // This could also be undefined or some other value

const style = {
  fontSize: '16px',
  color: 'blue',
  ...(subtitleFontWeight ? { fontWeight: subtitleFontWeight } : {}),
};

console.log(style);
