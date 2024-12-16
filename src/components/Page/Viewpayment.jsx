import Display from "./Display";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 function Viewpayment() {
  return (
  <>
  <Box sx={{display:'flex'}}>
    <Display />
    <Box component="main" sx={{flexGrow:1,p:3,marginTop:"55px"}}>
      <Typography variant="h4">
        View all payments
      </Typography>
    </Box>






  </Box>
  
  
  
  
  
  </>

   
  


  )
}
export default Viewpayment;