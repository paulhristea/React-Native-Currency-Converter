import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class ThemesScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          iconColor={styles.$blue}
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Orange"
          iconColor={styles.$orange}
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Green"
          iconColor={styles.$green}
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Purple"
          iconColor={styles.$purple}
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={false}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(ThemesScreen);
