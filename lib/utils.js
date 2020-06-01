function validateVersion(currentVersion, minimumVersion, throwError = false) {
  const isValid = minimumVersion <= currentVersion;
  if (!isValid && throwError) {
    throw new Error(`Required minumum version is ${minimumVersion} (currently using ${currentVersion}`);
  }
  return isValid;
}

module.exports = {
  validateVersion,
};
