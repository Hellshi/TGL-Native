/* eslint-disable no-unused-vars */
import {
  StyleSheet,
} from 'react-native';
import colors from '../../utils/index';

const { PRIMARY_COLOR, BORDER_COLOR, BACKGROUND_COLOR } = colors;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 350,
    justifyContent: 'space-between',

  },
  form: {
    width: 250,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    height: 110,
  },
  text: {
    fontSize: 30,
    color: '#707070',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    padding: 10,
  },
  fogotPass: {
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  button: {
    flexDirection: 'row-reverse', backgroundColor: 'transparent',
  },
});
export default styles;
