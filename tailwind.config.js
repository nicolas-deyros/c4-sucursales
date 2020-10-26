module.exports = {
  purge: ['./**/*.html', './src/**/*.js', './**/*.hbs'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
