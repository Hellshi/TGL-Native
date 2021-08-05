import {
  StyleSheet,
} from 'react-native';
import colors from '../../utils';

const { PRIMARY_COLOR } = colors;

const styles = StyleSheet.create({
  animatedBox: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  mainContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  close: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#707070',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    marginLeft: 10,
  },
  header: {
    marginRight: 20,
    flexDirection: 'row',
  },
  recentGame: {
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
    borderLeftColor: '#000',
    borderLeftWidth: 5,
    paddingLeft: 5,
  },
  saveButton: {
    alignSelf: 'stretch',
    height: 80,
    backgroundColor: '#EBEBEB',
    flexDirection: 'row-reverse',
  },
  safeTitle: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontStyle: 'italic',
  },
});
export default styles;
