import { Nav } from "react-bootstrap";
import { FiHome, FiSearch, FiPlusSquare, FiBookOpen, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();
  const navItems = [
    ["/", <FiHome />],
    ["/search", <FiSearch />],
    ["/add", <FiPlusSquare />],
    ["/library", <FiBookOpen />],
    ["/profile", <FiUser />],
  ];

  return (
    <Nav className="bottom-nav fixed-bottom bg-white border-top d-flex justify-content-around py-2 d-lg-none">
      {navItems.map(([path, icon]) => (
        <Link
          key={path}
          to={path}
          className={`text-dark fs-4 ${pathname === path ? "text-primary" : ""}`}
        >
          {icon}
        </Link>
      ))}
    </Nav>
  );
}
