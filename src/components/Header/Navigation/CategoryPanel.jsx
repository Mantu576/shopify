import React,{useState} from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IoCloseSharp } from "react-icons/io5";
import ListItemText from '@mui/material/ListItemText';

const CategoryPanel = (props) => {
    
       
      
        const toggleDrawer = (newOpen) => () => {
          props.setisOpenCatPanel(newOpen);
        };
      
        const DrawerList = (
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>Shop By Categories <IoCloseSharp onClick={toggleDrawer(false)}/></h3>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                   
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        );
  return (
   <>
    <div>
      
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
   </>
  )
}

export default CategoryPanel