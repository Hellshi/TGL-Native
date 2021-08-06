import {
  StyleSheet, Dimensions,
} from 'react-native';
import colors from '../../utils';

const { PRIMARY_COLOR, BORDER_COLOR } = colors;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    width: (width * 0.9),
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 20,
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width,
    height: 250,
  },
  image: {
    flex: 1,
    width,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
  },

  info: {
    flexDirection: 'row-reverse',
    margin: 20,
  },
  mainContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    color: PRIMARY_COLOR,
  },
  form: {
    width: 250,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    padding: 10,
  },
  buttonEdit: {
    flexDirection: 'row-reverse',
    backgroundColor: 'transparent',
  },
});

export default styles;
