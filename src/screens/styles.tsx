import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: 'white',
  },
  viewContent: {
    marginTop: 12,
    padding: 12,
  },
  TextHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  borderInactive: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  borderActive: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ed9325',
  },

  viewBtnSubmit: {
    marginTop: 20,
  },
  btnSubmit: {
    height: 50,
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed9325',
  },
  textBtnSubmit: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemLeaderboard: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 48,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewImageAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
