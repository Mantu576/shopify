import React from 'react'
import  Button  from '@mui/material/Button';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { Link } from 'react-router-dom';
import  CategoryPanel  from './CategoryPanel.jsx';
import '../Navigation/Style.css'
const Navigation = () => {
    const[isOpenCatPanel, setisOpenCatPanel] = React.useState(false);
    const OpenCategoryPanel = () => {
        setisOpenCatPanel(!isOpenCatPanel);
    }
  return (

   <>
    <nav className='py-2'>
        <div className=' container flex items-center justify-between '>
            <div className='col_1 w-[20%] '>
                <Button  className='!text-black gap-2 w-full' onClick={OpenCategoryPanel}> <RiMenu2Fill className='text-[18px]' /> Shop By Categories
                <LiaAngleDownSolid className='text-[18px] mt-auto font-bold gap-3' />
                </Button>
            </div>
            <div className='col_2 w-[60%] '>
                <ul className='flex items-center gap-3 nav'>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Home</Button></Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Fashion</Button></Link>
                        <div className='submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                        <ul>
                            <li className='list-none w-full relative '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Men</Button>
                                </Link>
                                <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                            <li className='list-none w-full  '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>T-shirt</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Jeans</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Watch</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Shoe</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Sunglass</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3'>Women</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Kids</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Boys</Button>
                                </Link>
                            </li>
                            <li className='list-none w-full '>
                                <Link to='/' className='w-full'>
                                 <Button className='w-full !justify-start !text-[rgba(0,0,0,0.8)] !text-left !px-3 rounded-none'>Girls</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </li>
                    
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Electronics</Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Bags</Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Footware</Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Groceries
                        </Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Beauty
                        </Button></Link>
                    </li>
                    <li className='list-none'>
                        <Link to='/' className='text-[13px] link font-[500] transition'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,.8)] hover:!text-[#ff5252]'>
                        Jewellery
                        </Button></Link>
                    </li>
                </ul>
            </div>
            <div className='col_3 w-[20%] flex items-center justify-end'>
                <p className='text-[14px] link font-[500] transition flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px]' />
                    Free International Delivery</p>
                </div>
        </div>
    </nav>
    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setisOpenCatPanel={setisOpenCatPanel} />
   </>
  )
}

export default Navigation