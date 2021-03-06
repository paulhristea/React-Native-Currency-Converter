import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  static defaultProps = {
    tintColor: styles.$defaultIconColor,
  };

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide,
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyles = [
      styles.logoBackground,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyles = [
      styles.logoForeground,
      { width: this.imageWidth },
      this.props.tintColor
        ? { tintColor: this.props.tintColor }
        : styles.$defaultIconColor,
    ];

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.Image
            style={containerImageStyles}
            source={require('./images/background.png')}
            resizeMode="contain"
          />
          <Animated.Image
            style={imageStyles}
            source={require('./images/logo.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.logoText}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
