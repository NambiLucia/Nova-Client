import Display from "../Page/Display";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 function Dashboard() {
  return (
  <>
  <Box sx={{display:'flex'}}>
    <Display />
    <Box component="main" sx={{flexGrow:1,p:3,marginTop:"55px"}}>
      <Typography variant="h4">
        Welcome to the Dashboard
      </Typography>
    </Box>






  </Box>
  
  
  
  
  
  </>

   
  


  )
}
export default Dashboard;