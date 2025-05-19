import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image.webp';
import Button from '@mui/material/Button';
import SearchBox from '../SearchBox';
import { CiLight } from 'react-icons/ci';
import { IoNotifications } from 'react-icons/io5';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';
import Divider from '@mui/material/Divider';
import { FiLogIn } from 'react-icons/fi';  // <-- added icon import

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMyAccDrop = () => setAnchorEl(null);

  const [notify, setNotify] = React.useState(null);
  const opentf = Boolean(notify);
  const handleOpenntfDrop = (event) => setNotify(event.currentTarget);
  const handleClosentfDrop = () => setNotify(null);

  return (
    <header className='d-flex align-items-center'>
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-3 part1">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>

          <div className="col-sm-0 d-flex align-items-center part2 pl-4">
            <SearchBox />
          </div>

          <div className="col-sm-5 d-flex align-items-center justify-content-end part3">
            <Button className='rounded-circle mr-3'><CiLight /></Button>

            <div className="myntf">
              <Button className='rounded-circle mr-3' onClick={handleOpenntfDrop}><IoNotifications /></Button>
              <Menu
                anchorEl={notify}
                id="ntf-menu"
                className='ntf-dropdown pl-4'
                open={opentf}
                onClose={handleClosentfDrop}
                onClick={handleClosentfDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <div className="scroll">
                  <h4 className='btnheader pl-2'>Notifications(12)</h4>
                  <Divider className='pb-1' />
                  {[...Array(5)].map((_, index) => (
                    <MenuItem key={index} onClick={handleClosentfDrop}>
                      <div className="d-flex">
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="avatar" />
                          </span>
                        </div>
                        <div className="userInfontf">
                          <h4>
                            <span><b>Ramkrishna</b> added to his favorite <p>leather formal shoe</p></span>
                          </h4>
                          <p className='txt-sky mb-0'>few min ago...</p>
                        </div>
                      </div>
                    </MenuItem>
                  ))}
                </div>
              </Menu>
            </div>

            <div className="myAccWrapper d-flex align-items-center">
              <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="user" />
                  </span>
                </div>
                <div className="userInfo">
                  <h4>ranajit sekh</h4>
                  <p className="mb-0">@ranajit</p>
                </div>
              </Button>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseMyAccDrop();
                    navigate('/admin/profile'); // Navigate to admin profile
                  }}
                >
                  <ListItemIcon>
                    <RiAccountPinCircleFill fontSize="x-large" color='green' />
                  </ListItemIcon>
                  My Account
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleCloseMyAccDrop();
                    navigate('/reset-password'); // Navigate to reset password
                  }}
                >
                  <ListItemIcon>
                    <MdOutlineSecurity fontSize="x-large" color='blue' />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // Clear user session data
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('user');

                    handleCloseMyAccDrop();

                    // Redirect to login page
                    navigate('/login');
                  }}
                >
                  <ListItemIcon>
                    <IoIosLogOut fontSize="x-large" color='red' />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

              {/* Styled Login Link */}
              <Link
                to="/login"
                className="login-link d-flex align-items-center"
                style={{
                  marginLeft: '15px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  color: '#000000',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <FiLogIn size={20} style={{ marginRight: '6px' }} />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
