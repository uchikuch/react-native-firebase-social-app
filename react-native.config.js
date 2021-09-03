module.exports = {
  projects: {
    ios: {},
    android: {}, // grouped into "project"
  },
  dependencies: {
    '@react-native-community/google-signin': {
      platforms: {
        ios: null,
      },
    },
    'react-native-fbsdk': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: ['./assets/fonts/'],
};
