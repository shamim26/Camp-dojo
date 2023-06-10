import { useState } from "react";
import logo from "../../assets/logo(2).png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "@material-tailwind/react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((err) => console.error(err));
  };

  const variants = {
    open: { opacity: 0, x: '-100%' },
    closed: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-custom1 fixed top-0 right-0 left-0 z-10 bg-opacity-50 uppercase py-1 flex justify-between items-center px-10">
      <img
        className="md:w-[280px] w-[200px] md:h-[90px] object-contain cursor-pointer  "
        src={logo}
        alt=""
      />
      <div
        className={`flex flex-col absolute
       md:static md:flex-row gap-4
       transition-all duration-300
        md:gap-8 font-medium text-white
         h-screen md:h-auto bg-custom1
          md:bg-transparent top-0  w-1/2
           md:w-auto items-start md:items-center
           py-10 px-10 md:p-0 ${isOpen ? "left-0" : "-left-72"} `}
      >
        <button className="md:hidden" onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link to="/">Home</Link>
        <Link to="/instructors"> Instructors</Link>
        <Link to="/classes">Classes</Link>
        {user && (
          <>
            {isAdmin?.admin ? (
              <Link to="/dashboard/manage-classes">Dashboard</Link>
            ) : isInstructor?.instructor ? (
              <Link to="/dashboard/add-class">Dashboard</Link>
            ) : (
              <Link to="/dashboard/selected-classes">Dashboard</Link>
            )}
          </>
        )}
        {!user && <Link to="/login">Login</Link>}

        {user && !loading && (
          <div className="flex flex-col md:flex-row gap-3 items-center md:ml-[18rem]">
            <Tooltip content={user?.displayName}>
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={user?.photoURL}
                alt="profile"
                referrerPolicy="no-referrer"
              />
            </Tooltip>
            <button
              onClick={handleLogout}
              className="font-medium text-white uppercase"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      <motion.button
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Navbar;
