import { StyleSheet} from '@react-pdf/renderer';


export const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f9f9f9',
    //fontFamily: 'Helevetica',
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
    marginBottom: 5,
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    flexWrap: 'wrap',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd',
    borderRadius: 5,
  },
  detailSectiona: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft:20,
    padding: 10,
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd',
    borderRadius: 5,
  },
  detailBlock: {
    width: '50%', // Half width for side-by-side layout
    padding: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
  },
  value: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    fontSize: 10,
    textAlign: 'center',
    color: '#777777',
  },
});

