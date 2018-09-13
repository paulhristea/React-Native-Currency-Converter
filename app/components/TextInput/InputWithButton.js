import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const baseColor = color(styles.$buttonBackgroundColorBase);
  const underlayColor = baseColor.darken(styles.$buttonBackgroundColorModifier);

  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  buttonTextStyles.push({ color: props.textColor });

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={props.onPress}
      >
        <Text style={buttonTextStyles}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        {...props}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

InputWithButton.defaultProps = {
  editable: true,
  textColor: styles.$defaultTextColor,
};

export default InputWithButton;
