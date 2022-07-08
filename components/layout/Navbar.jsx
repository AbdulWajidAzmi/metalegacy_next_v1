import Image from "next/image";
// import logo from '../../assets/imgs/logos/logo.png';
import logo1 from "../../assets/imgs/logos/logo1.png";
import Link from "next/link";
import navStyles from "./navbar.module.css";
import menuBar from "../../assets/imgs/icons/menu-bar.svg";
import closeIcon from "../../assets/imgs/icons/close.svg";

const Navbar = () => {
    
    const toggleMenu =()=> {
        document.getElementById("mob_menu").classList.toggle(navStyles.show_mob_nav)
    }
  return (
    <>
      <nav className={navStyles.nav}>
        <ul className={navStyles.first_nav_list}>
          <li>
            <Link passHref href="/">
              <Image alt="Meta Legacy" className="no-circle" src={logo1} />
            </Link>
          </li>
        </ul>
        <ul className={navStyles.second_nav_list}>
          {/* <li>
            <Link href="/agency">
              <a className="no-circle">Agency</a>
            </Link>
          </li> */}
          <li>
            <Link href="/services">
              <a className="no-circle">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="no-circle">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className="no-circle">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a className="no-circle">About Us</a>
            </Link>
          </li>
        </ul>
        {/* <ul className={navStyles.third_nav_list}>
                <li className='btn no-circle'>
                        <svg fill='#fff' width='18' height='18' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.629 201.629" style={{}} xmlSpace="preserve">
                <path d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019  c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757  c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172  s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935  c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795  c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479  c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265  c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104  c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478  c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989  c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008  c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z   M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4  c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4  c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765  C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006  c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z" />
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                             </svg>
                    
                    +92-3008203106
                </li>
            </ul> */}

        <div onClick={()=> toggleMenu()} className={`${navStyles.icon_img_div}`}>
          <a>
            <Image src={menuBar} alt={"icon"} />
          </a>
        </div>
      </nav>




      <nav className={navStyles.mob_nav} id="mob_menu">
        <ul className={navStyles.mob_first_nav_list}>
          <li>
            <Link passHref href="/">
              <Image alt="Meta Legacy" className="no-circle" src={logo1} />
            </Link>
          </li>
        </ul>
        <ul className={navStyles.mob_second_nav_list}>
          {/* <li>
            <Link href="/agency">
              <a className="no-circle">Agency</a>
            </Link>
          </li> */}
          <li>
            <Link href="/services">
              <a className="no-circle">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="no-circle">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className="no-circle">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a className="no-circle">About Us</a>
            </Link>
          </li>
        </ul>
         <div>
            
         </div>
        <div onClick={()=> toggleMenu()} className={`${navStyles.icon_img_div}`}>
          <a>
            <Image src={closeIcon} alt={"icon"} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
