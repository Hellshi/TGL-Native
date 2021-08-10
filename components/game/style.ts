import {
  StyleSheet, Dimensions,
} from 'react-native';
import colors from '../../utils';

const { BALL_COLOR, PRIMARY_COLOR } = colors;
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  main: {
  },
  header: {
    margin: 20,
    maxHeight: (0.45 * height),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#707070',
  },
  bodyText: {
    fontStyle: 'italic',
    color: '#707070',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    backgroundColor: '#fff',
    padding: 0,
    borderWidth: 3,
    borderRadius: 25,
  },
  numbers: {
    marginTop: 20,
    marginLeft: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  number: {
    width: 55,
    margin: 5,
    height: 55,
    borderRadius: 30,
    backgroundColor: BALL_COLOR,
  },
  choosed: {
    width: 55,
    margin: 5,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#000',
  },
  selected: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#000',
    margin: 5,
  },
  selectedContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actionButtons: {
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionSingle: {
    width: 100,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  actionAddToCart: {
    width: 100,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    backgroundColor: PRIMARY_COLOR,
  },
  actionsTitle: {
    color: PRIMARY_COLOR,
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default styles;
