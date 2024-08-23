import React from 'react'
import { useState } from 'react';
import Logo from '../images/logo.png'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup';
import SignOut from '../SignOut/SignOut'
import { Link as LinkRoute } from 'react-router-dom'
const NavLink = (props) => {
  return (
    <LinkRoute to={props.dest} class='uppercase font-sans sm:text-[0.7rem] md:text-[0.9rem] font-[700] text-center text-white' style={{ scale: `${props.state === '0vh' ? '0' : '1'}`, opacity: `${props.state === '0vh' ? '0' : '1'}` }}>{props.text}</LinkRoute>
  );
}
const Navbar = (props) => {
  // const [seen, setSeen] = useState(false)
  const { currentUser, setCurrentUser } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  const [modal, setModal] = useState(false);
  // const [style, setStyle] = useState("");
  const handleClick = () => {
    if (currentUser) {
      setModal((prev) => !prev);
    } else {
      setOpenLogin(true);
    }
  };
  const navs_left = [{ text: 'events', type: 'route', dest: props.events === 'active' ? '#' : '/events' }, { text: 'about us', type: 'route', dest: props.about === 'active' ? '#' : '/about' },{ text: 'members', type: 'route', dest: props.members === 'active' ? '#' : '/members' },];
  const navs_right = [ { text: 'developers', type: 'route', dest: props.developers === 'active' ? '#' : '/developers' }, { text: 'resource hub', type: 'route', dest: '/resourcehub' }];
  const [mobileMenu, setMenu] = useState('0vh');
  return (
    <>
    {openLogin && (
        <Login
          setOpenLogin={setOpenLogin}
          setSignup={setSignup}
          setCurrentUser={setCurrentUser}
        />
      )}
      {openSignup && (
        <SignUp
          setOpenLogin={setOpenLogin}
          setSignup={setSignup}
          setCurrentUser={setCurrentUser}
        />
      )}
    <div style={{ overflowX: 'hidden' , position:`${mobileMenu === '0vh' ? '' : 'absolute'}`, top:`${mobileMenu === '0vh' ? '0px' : '4px'}` }}>
      <div className='flex visible justify-between pl-[1rem] pr-[1rem] h-[5rem] items-center md:invisible md:h-0 '>
        <LinkRoute to='/'><img src={Logo} alt="" className='h-10 w-24' /></LinkRoute>
        <img src={mobileMenu === '0vh' ? 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701946021/ecs-website/hamburger-menu_iqxqgn.png' : 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701946204/ecs-website/xmark-solid_m8hqyk_vb8jx6.svg'} alt="" className='h-7 w-7' onClick={() => mobileMenu === '0vh' ? setMenu('100vh') : setMenu('0vh')} style={{ filter: `invert(${mobileMenu === '0vh' ? '0%' : '100%'})` }} />
      </div>
      <div className='flex flex-col bg-[#000055dd] justify-between items-center p-[1rem] w-[50%] md:invisible md:h-0' style={{ zIndex: '5', backdropFilter: 'blur(2px)', left: '10vw', position: 'absolute', width: '90vw', opacity: `${mobileMenu === '0vh' ? '0' : '1'}`, height: `${mobileMenu}`, transition: '500ms ease' }}>
        <LinkRoute to='/'><img src='https://res.cloudinary.com/dhry5xscm/image/upload/v1701942813/ecs-website/ecs-profile_xilte1.svg' style={{ scale: `${mobileMenu === '0vh' ? '0' : '1'}` }} onClick={handleClick} /></LinkRoute>
        {navs_left.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} state={mobileMenu} />)}
        {navs_right.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} state={mobileMenu} />)}
      </div>
      <div className='invisible flex justify-around pl-7 pr-7 items-center h-0 md:visible md:h-[5rem]'>
        <div className='flex justify-between items-center w-[80%] z-4'>
          {navs_left.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}
          <LinkRoute to='/'><img src={Logo} alt="" className='h-0 w-0 md:h-10 md:w-24' /></LinkRoute>
          {navs_right.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}

          <LinkRoute to='/'><img src='https://res.cloudinary.com/dyuggtbjl/image/upload/v1705431987/ecs/avatar_txmdp1.png' style={{filter:'invert(100%)',width:'4rem',height:'4rem'}} onClick={handleClick}/></LinkRoute>
          {/* {seen ? <Login toggle={togglePop} /> : null} */}
          {currentUser && <p className="displayName text-white">{currentUser.displayName}</p>}
          {modal && <SignOut setModal={setModal} />}

        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
