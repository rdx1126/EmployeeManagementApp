import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {

    const handleAddEmployee=() =>{
        
    };
    
  return (
      
    <Box className='boxstyles' sx={{ flexGrow: 1}}>
      <AppBar position="fixed" style={{backgroundColor:'#293462'}}>
       
        <Toolbar style={{color:"white"}}>
       
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 , color:'white'  }}>
            Employee Management
          </Typography>
          <div  style={{ display :'flex' , flexDirection:'row' }}>
          {/* <div  onClick={handleAddEmployee} style={{marginRight:"2vw" , marginTop:"1vh", cursor:'pointer'}}> ADD EMPLOYEE</div> */}
          <Button onClick={handleAddEmployee} style={{ postion:'fixed',cursor:'pointer',color:'white' ,backgroundColor:'#00B4D8',marginRight:'1vw'}}  >ADD EMPLOYEE</Button>
          <Button style={{ postion:'fixed',fontSize:'1vw',backgroundColor:'#00B4D8',color:'white'}}>LOGOUT</Button>
          </div>
        </Toolbar>
      
      </AppBar>
    </Box>
    
  );
}
