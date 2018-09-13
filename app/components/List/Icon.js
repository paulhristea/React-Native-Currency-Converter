import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({
  color = styles.$primaryBlue,
  checkmark = false,
  visible = false,
}) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
    iconStyles.push({ backgroundColor: color });
  }

  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require('./images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

Icon.defaultProps = {
  color: styles.$primaryBlue,
  checkmark: false,
  visible: false,
};

export default Icon;
