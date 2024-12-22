import React from 'react'
import { styles } from './stylepdf';
import { Page, Text, View, Document, PDFViewer} from '@react-pdf/renderer';

 function Pdfview() {


  <Document>
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
    <View style={styles.section}>
      <Text>Section #2</Text>
    </View>
  </Page>
</Document>




  return (
    <div className="w-full h-[750px]">
      
      <Pdfview />


     
    </div>
  )
}
export default Pdfview;
