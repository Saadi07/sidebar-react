import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { MdPlumbing } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/taskers",
    name: "Taskers",
    icon: <MdPlumbing />,
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <BsCartCheck />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <BiCog />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 11,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h1 className="logo">Xpert NextDoor</h1>}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div class="profile">
          {isOpen && (
            <img
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
          )}
          {isOpen && <h3>Sameer Ahmed</h3>}
          {isOpen && <p>Software Developer</p>}
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">{route.icon}</div>
              <div className="link_text">{isOpen && route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
