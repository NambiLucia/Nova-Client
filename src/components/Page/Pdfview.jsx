import React from 'react'
import { styles } from './stylepdf';
import { Page, Text, View, Document, PDFViewer} from '@react-pdf/renderer';

 function Pdfview() {


  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
<Text>Nova Payment </Text>
          </View>
          <View>
<Text>Date:</Text>
          </View>
          <View>
<Text>Voucher No:</Text>
          </View>
          <View>
<Text>Payee:</Text>
          </View>
          <View>
<Text>Payment Details:</Text>
          </View>
          <View>
<Text>Account code:</Text>
          </View>
          <View>
<Text>Beneficiary code:</Text>
          </View>

          <View>
<Text>Budget code:</Text>
          </View>
          <View>
<Text>Exchange rate:</Text>
          </View>

          <View>
<Text>Amount-Figures:</Text>
          </View>

          <View>
<Text>Amount-Words:</Text>
          </View>
          <View>
<Text>Status:</Text>
          </View>
          <View>
<Text>Document Attached:</Text>
          </View>


        </View>
      </Page>
    </Document>
  );



  return (
    <div className="w-full h-[750px]">
      <PDFViewer width="100%" height="100%">
        {MyDocument}


      </PDFViewer>
      


     
    </div>
  )
}
export default Pdfview;
