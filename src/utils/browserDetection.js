const browserDetection = () => {
  if (navigator.brave) {
    return 'BRAVE';
  }
  if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
    return 'OPERA';
  }
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'CHROME';
  }
  if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'SAFARI';
  }
  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'FIREFOX';
  }
  if (navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode === true) {
    // IF IE > 10
    return 'IE';
  }
  return 'UNKNOWN';
};

export default browserDetection;
