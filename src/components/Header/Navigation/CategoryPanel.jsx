import React,{useState} from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CategoryPanel = (props) => {
    
       const[submenuIndex, setSubmenuIndex] = useState(null);
        const[InnerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
      
        const toggleDrawer = (newOpen) => () => {
          props.setisOpenCatPanel(newOpen);
        };
        const openSubmenu=(index)=>{
          if(submenuIndex===index){
            setSubmenuIndex(null);
            }else{
          setSubmenuIndex(index);
          }
        }
        const openInnerSubmenu=(index)=>{
          if(InnerSubmenuIndex===index){
            setInnerSubmenuIndex(null);
            }else{
          setInnerSubmenuIndex(index);
          }
        }
        const DrawerList = (
          <Box sx={{ width: 350 }} role="presentation" className='CategoryPanel' >
            <h3 className='p-3 text-[16px] font-[600] flex items-center justify-between'>Shop By Categories <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/></h3>
            
           <div className='scroll'>
            <ul className='w-full'>
              <li className='list-none flex items-center relative flex-col'>
                <Link to='/' className='w-full'>
                <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Fashion</Button>
                </Link>
                {submenuIndex===0 ? (<FaRegMinusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openSubmenu(0)}/>)
                : (<FaRegPlusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openSubmenu(0)}/>)
                }
               
                  {submenuIndex===0 &&( <ul className=' submenu  w-full pl-5'>
                  <li className='list-none relative'>
                  <Link to='/' className='w-full'>
                  <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Apparel</Button>
                  </Link>
                  {InnerSubmenuIndex===0 ? (<FaRegMinusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>)
                : (<FaRegPlusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>)
                }
                  
                    {InnerSubmenuIndex===0 && ( <ul className=' InnerSubmenu  w-full pl-5'>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Smart Tablet</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Crepe T-shirt</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Leather Watch</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Rolling Diamond</Link>
                  </li>
                  </ul>
                  )}
                 
                  </li>
                  </ul>
                )}
                
               
              </li>
              <li className='list-none flex items-center relative flex-col'>
                <Link to='/' className='w-full'>
                <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Jewellery</Button>
                </Link>
                {submenuIndex===1 ? (<FaRegMinusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openSubmenu(1)}/>)
                : (<FaRegPlusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openSubmenu(1)}/>)
                }
               
                  {submenuIndex===1 &&( <ul className=' submenu  w-full pl-5'>
                  <li className='list-none relative'>
                  <Link to='/' className='w-full'>
                  <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Apparel</Button>
                  </Link>
                  {InnerSubmenuIndex===1 ? (<FaRegMinusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>)
                : (<FaRegPlusSquare className='absolute right-[15px] top-[10px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>)
                }
                  
                    {InnerSubmenuIndex===1 && ( <ul className=' InnerSubmenu  w-full pl-5'>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Smart Tablet</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Crepe T-shirt</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Leather Watch</Link>
                  </li>
                  <li className='list-none relative mb-1'>
                  <Link to='/' className='w-full !justify-start  !text-left text-[14px] !px-3 transition'>Rolling Diamond</Link>
                  </li>
                  </ul>
                  )}
                 
                  </li>
                  </ul>
                )}
                
               
              </li>
              
            </ul>
           </div>
           
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