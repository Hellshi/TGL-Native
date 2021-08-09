import {
  StyleSheet, Dimensions,
} from 'react-native';
import colors from '../../utils';

const { width } = Dimensions.get('window');
const { PRIMARY_COLOR } = colors;

const styles = StyleSheet.create({
  animatedBox: {
    alignSelf: 'flex-end',
    flex: 1,
    backgroundColor: '#fff',
    width: width * 0.70,
    justifyContent: 'space-between',
  },
  mainContainer: {
    margin: 20,
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
    marginRight: 60,
    marginTop: 20,
    marginBottom: 10,
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
  price: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#707070',
    margin: 10,
  },
  recentGameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default styles;
