const { getDefaultConfig } = require("metro-config");

module.exports = (() => {
  const defaultConfig = getDefaultConfig.getDefaultValues();
  const { assetExts, sourceExts } = defaultConfig.resolver;

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
