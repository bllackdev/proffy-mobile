import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'IndieFlower_400Regular',
    color: '#fff',
    fontSize: 30,
    lineHeight: 36,
    maxWidth: 160,
    marginVertical: 20,
  }
});

export default styles;