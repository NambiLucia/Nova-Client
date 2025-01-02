import { useState, useEffect } from 'react';
import { styles } from './stylepdf';
import { useParams } from 'react-router-dom';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

function Pdfview() {
  const [paymentView, setPaymentView] = useState(null);
  const [error, setError] = useState(null);
  const { paymentId } = useParams(); // Extract paymentId from URL

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        console.log('Fetching data for paymentId:', paymentId); 
        
        // Using fetch instead of axios
        const response = await fetch(
          `http://localhost:3000/api/v1/payments/single-payment/${paymentId}`
        );
        
        console.log('Response status:', response.status); 
        if (!response.ok) {
          throw new Error('Failed to fetch payment details');
        }

        const data = await response.json(); 
        console.log('Fetched payment data:', data);

        if (data.payments) {
          setPaymentView(data.payments); 
        } else {
          setError("Payment data not found.");
        }
      } catch (error) {
        setError("Failed to fetch payment. Please try again.");
        console.error('Error fetching payment data:', error);
      }
    };

    fetchPayment();
  }, [paymentId]);

  // If paymentView is still null, display loading or error
  if (error) {
    return <div>{error}</div>;
  }

  if (!paymentView) {
    return <div>Loading...</div>;
  }
  

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Nova Payment</Text>
        </View>

        {/* Payment Details */}
        <View style={styles.detailsContainer}>
          {/* Left side */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.value}>
                {new Date(paymentView.date).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Voucher No:</Text>
              <Text style={styles.value}>{paymentView.voucherNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Payee:</Text>
              <Text style={styles.value}>{paymentView.payee}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Payment Details:</Text>
              <Text style={styles.value}>{paymentView.paymentDetails}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Account Code:</Text>
              <Text style={styles.value}>{paymentView.accountCode.code}</Text>
            </View>
          </View>

          {/* Right side */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Beneficiary Code:</Text>
              <Text style={styles.value}>{paymentView.beneficiaryCode.code}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Budget Code:</Text>
              <Text style={styles.value}>{paymentView.budgetCode.code}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Exchange Rate:</Text>
              <Text style={styles.value}>{paymentView.exchangeRate}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Amount (Figures):</Text>
              <Text style={styles.value}>{paymentView.amountFigures}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Amount (Words):</Text>
              <Text style={styles.value}>{paymentView.amountWords}</Text>
            </View>
          </View>
        </View>

        {/* Status and Footer */}
        <View style={styles.detailItem}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>{paymentView.status}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Document Attached:</Text>
          <Text style={styles.value}>{paymentView.Document[0].filename}</Text>
        </View>

        <View style={styles.footer}>
          <Text>Generated by Nova Payment System</Text>
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
  );
}

export default Pdfview;
