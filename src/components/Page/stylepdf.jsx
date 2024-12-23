import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1px solid #cccccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  column: {
    width: '45%',
  },
  detailItem: {
    marginBottom:40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
    width: '50%',
  },
  value: {
    fontSize: 12,
    color: '#333333',
    width: '50%',
    textAlign: 'right',
  },
  footer: {
    marginTop: 40,
    fontSize: 10,
    textAlign: 'center',
    color: '#777777',
  },
});
