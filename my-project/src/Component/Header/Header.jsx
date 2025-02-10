import React,{useState, useEffect, useRef} from 'react'
import {NavLink, Link, useNavigate, useLocation} from 'react-router-dom'
import './Header.css'

/*import images */
import Logo from '../../assets/logo.png'


/*import icon */
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const navRef = useRef()

  const navigae = useNavigate()
  const location = useLocation();

  const [sticky, setSticky] = useState(false);

  const openMenu = () => navRef.current.classList.add('active-menu')

  const closeMenu = () => navRef.current.classList.remove('active-menu')

  const isCurrentPage = (pathname) => {
    return location.pathname === pathname ? 'current-page' : '';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
        setSticky(window.scrollY > 50);
    });
}, []);


  const getInTouch = () => {
    navigae('/contact')
    closeMenu()
     window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  const closeActiveBar = () => {
    closeMenu()
     window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  return (
    <section className={`header ${sticky ? 'dark-nav' : ''}`}>
      <Link to="/" onClick={closeActiveBar}>
        <img src={Logo} alt='logo' className='w-[180px] '/>
      </Link>

      <div className='navbar' ref={navRef}>
        <ul>
        <li>
             <div className='flex items-center justify-between gap-1'>
              <NavLink>About Us</NavLink>
              <IoMdArrowDropdown className='Dicon'/>
            </div> 
          <ul>
            <li>
              <NavLink to="/ourCompany" className={`services-icon ${isCurrentPage('/ourCompany')}`} onClick={closeActiveBar}>
                <span className='btn'>Our Company</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/managementTeam" className={`services-icon ${isCurrentPage('/managementTeam')}`} onClick={closeActiveBar}>
                <span className='btn'>Management Team</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/boardOfDirector" className={`services-icon ${isCurrentPage('/boardOfDirector')}`} onClick={closeActiveBar}>
                <span className='btn'>Board Of Director</span>
              </NavLink>
            </li>
          </ul>

          </li>

          <li>
             <div  className='flex items-center justify-between gap-1'>
              <NavLink>The Group</NavLink>
              <IoMdArrowDropdown className='Dicon'/>
            </div> 
          <ul>
            <li>
              <NavLink to="/gtd" className={`services-icon ${isCurrentPage('/gtd')}`} onClick={closeActiveBar}>
                <span className='btn'>Gas Terminalling and Distribution Limited</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/apl" className={`services-icon ${isCurrentPage('/apl')}`} onClick={closeActiveBar}>
                <span className='btn'>Asiko Power Limited</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/gtscl" className={`services-icon ${isCurrentPage('/gtscl')}`} onClick={closeActiveBar}>
                <span className='btn'>Gas Terminalling  Storage Company Limited</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/gtgop" className={`services-icon ${isCurrentPage('/gtgop')}`} onClick={closeActiveBar}>
                <span className='btn'>Gas Terminalling Global Operations Limited (GTGOL)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/azcl" className={`services-icon ${isCurrentPage('/azcl')}`} onClick={closeActiveBar}>
                <span className='btn'>Asiko Zero Carbon Limited</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ahcl" className={`services-icon ${isCurrentPage('/ahcl')}`} onClick={closeActiveBar}>
                <span className='btn'>Asiko Hydrocarbon Company Limited</span>
              </NavLink>
            </li>
          </ul>

          </li>


        <li><NavLink to="/investorRelations" onClick={closeActiveBar} className={isCurrentPage('/investorRelations')}>Investor Relations</NavLink></li>
        <li><NavLink to="/newsMedia" onClick={closeActiveBar} className={isCurrentPage('/newsMedia')}>News & Media</NavLink></li>
          <li>
             <div  className='flex items-center justify-between gap-1'>
              <NavLink>Sustainabillity</NavLink>
              <IoMdArrowDropdown className='Dicon'/>
            </div> 
          <ul>
            <li>
              <NavLink to="/sustainability" className={`services-icon ${isCurrentPage('/sustainability')}`} onClick={closeActiveBar}>
                <span className='btn'>Stakeholder Engagement</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/csr" className={`services-icon ${isCurrentPage('/csr')}`} onClick={closeActiveBar}>
                <span className='btn'>CSR</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/hes" className={`services-icon ${isCurrentPage('/hes')}`} onClick={closeActiveBar}>
                <span className='btn'>Heath, Safety and Environment</span>
              </NavLink>
            </li>
          </ul>
          </li>

          <li><NavLink to="/careers" onClick={closeActiveBar} className={isCurrentPage('/careers')}>Careers</NavLink></li>
          <div className='close-icon' onClick={closeMenu}>
          <IoMdClose />
          </div>
        </ul>
        <button
      onClick={getInTouch}
      className="small bg-[#AC231E] text-[14px] text-secondary font-semibold px-6 py-[19px] rounded-full flex items-center gap-2  transition-all duration-300 hover:bg-[#8a1c18]"
      >
       Get In Touch
        <IoIosArrowForward className="text-lg" />
      </button>
      </div>

      <button
      onClick={getInTouch}
      className="big bg-[#AC231E] text-[14px] text-secondary font-semibold px-6 py-[19px] rounded-full flex items-center gap-2  transition-all duration-300 hover:bg-[#8a1c18]"
      >
       Get In Touch
        <IoIosArrowForward className="text-lg" />
      </button>


      <div className='open-icon' onClick={openMenu}>
      <BiMenu />
      </div>

    </section>
  )
}

export default Header