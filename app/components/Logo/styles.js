import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 1.5,
  $smallImageSize: imageWidth / 3,
  $defaultIconColor: '$primaryBlue',

  container: {
    alignItems: 'center',
  },
  logoContainer: {
    width: '$largeContainerSize',
    height: '$largeContainerSize',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    flex: 1,
    position: 'absolute',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logoForeground: {
    width: '$largeImageSize',
  },
  logoText: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: 'white',
  },
});

export default styles;
