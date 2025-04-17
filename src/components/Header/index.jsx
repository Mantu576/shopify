import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='top-strip py-2 border-top-1 border-b-2 border-[#eaeaea] bg-[#f8f8f8] text-center'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='col1 w-[50%]'>
              <p className='text-[14px] font-[500] pl-5'>Get upto 50% off new session styles, limited time only</p>
            </div>
            <div className='col2 flex items-center justify-end'>
              <ul className='flex items-center gap-4'>
                <li className='list-none '>
                  <Link to='/help-center' className='text-[13px] link font-[500] transition'>Help Center</Link>
                </li>
                <li className='list-none'>
                  <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div className='header py-4 border-b-[1px] border-gray-200'>
        <div className='flex items-center justify-between'>
          <div className='col1 w-[25%]' >
            <Link className="flex items-center pl-10" to={'/'} ><img src='/logo-1691412328.jpg' alt='logo' /></Link>
          </div>
          <div className='col2 w-[45%]'>
            <Search />
          </div>
          <div className='col3 w-[30%] flex items-center pl-10'>
            <ul className='flex items-center gap-4 w-full'>
              <li className='list-none'>
                <Link to='/login' className='text-[13px] link font-[500] transition'>Login</Link> &nbsp;|&nbsp;
                <Link to='/register' className='text-[13px] link font-[500] transition'>Register</Link>
              </li>
              <li>
                <Tooltip title="Compare" arrow placement="top">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoIosGitCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>  
              </li>
              <li>
                <Tooltip title="Wishlist" arrow placement="top">
                <IconButton aria-label="heart">
                  <StyledBadge badgeContent={2} color="secondary">
                    <IoMdHeartEmpty />
                  </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart" arrow placement="top">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <MdOutlineShoppingCart />
                </StyledBadge>
              </IconButton>
                </Tooltip>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}
export default Header