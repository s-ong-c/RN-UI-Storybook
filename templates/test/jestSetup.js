import React from './node_modules/react';

/**
 * Temporarily test files that resolves https://github.com/facebook/react-native/issues/27721
 */

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity.js', () => {
  // eslint-disable-next-line
  const { View } = require('./node_modules/react-native');
  const MockTouchable = (props) => {
    return <View {...props} />;
  };

  MockTouchable.displayName = 'TouchableOpacity';

  return MockTouchable;
});

jest.mock('react-native/Libraries/Components/Touchable/TouchableHighlight.js', () => {
  // eslint-disable-next-line
  const { View } = require('./node_modules/react-native');
  const MockTouchable = (props) => {
    return <View {...props} />;
  };

  MockTouchable.displayName = 'TouchableHighlight';

  return MockTouchable;
});
