import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    width: (width * 0.9),
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: '#707070',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  topContainer: {
    height: (height * 0.15),
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    backgroundColor: '#fff',
    fontWeight: '400',
    fontSize: 15,
    padding: 0,
    borderWidth: 3,
    borderRadius: 25,
  },
  recentGame: {
    marginBottom: 20,
    borderRadius: 4,
    borderLeftColor: '#000',
    borderLeftWidth: 5,
    paddingLeft: 5,
  },
});
export default styles;
