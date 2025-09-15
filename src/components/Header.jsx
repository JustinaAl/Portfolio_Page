import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {

  const [contactOpen, setContactOpen] = useState(false)
  const location = useLocation();
  const pages = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]

  return (
    <header className="flex flex-col md:flex-row justify-between p-6  sm:p-6 md:p-8">
      <div className="pt-2 pb-6 pr-6 font-roboto sm:text-xl md:text-2xl lg:text-4xl font-300 font-w-condensed italic w-fit whitespace-nowrap text-md
        text-amber-600
      ">
        Justina Alakvosciene
      </div>
      <nav className="w-[100%] md:w-fit flex items-end sm:justify-end lg:min-w-[600px]">
        <ul className="flex justify-between md:space-x-8 w-[100%] text-base md:text-lg font-robotoMono pr-4">
          
          <li className="">
            <button 
              className="hover:text-amber-600"
              onClick={()=>setContactOpen(!contactOpen)}
            >
              Contact
            </button>
            {contactOpen && 
              <ul className="absolute z-10 mt-4 bg-white border-2 border-red-400 p-2 space-y-2 cursor-pointer ">
                <li className="hover:underline hover:text-amber-600"><a target="_blank" 
                  href="https://www.linkedin.com/in/justina-alakvosciene?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJs%2Bfs9pJSaKomuSu%2F06tow%3D%3D">
                  LinkedIn  <i className="bi bi-linkedin"></i></a></li>
                <li className="hover:underline hover:text-amber-600"><a target="_blank" 
                href="https://github.com/JustinaAl">Github  <i className="bi bi-github"></i></a></li>
                <li className="hover:underline hover:text-amber-600">Email: juste.paskeviciute@gmail.com</li>
                <li className="hover:underline hover:text-amber-600">Phone: +46762654551</li>
              </ul>
            }
          </li>

          {pages.map((page) => (
            <li
              key={page.name}
              className={`hover:text-amber-600 hover:font-500 ${
                location.pathname === page.link ? 'text-red-400 font-600' : ''
              }`}
            >
              <Link to={page.link}>{page.name}</Link>
            </li>
          ))}

          {/* <li className="hover:text-amber-600">
            <span className="">EN<i className="fa-solid fa-chevron-down px-1"></i></span>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;