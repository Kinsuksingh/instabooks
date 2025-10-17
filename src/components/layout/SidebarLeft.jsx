import { FiHome, FiSearch, FiPlusSquare, FiBookOpen, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function SidebarLeft() {
  const { pathname } = useLocation();
  const links = [
    { to: "/", icon: <FiHome />, label: "Home" },
    { to: "/search", icon: <FiSearch />, label: "Search" },
    { to: "/add", icon: <FiPlusSquare />, label: "Add" },
    { to: "/library", icon: <FiBookOpen />, label: "Library" },
    { to: "/profile", icon: <FiUser />, label: "Profile" },
  ];

  return (
    <aside className="sidebar-left d-none d-lg-flex flex-column p-3 border-end bg-white">
      <h4 className="fw-bold mb-4">📚 InstaBooks</h4>
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className={`d-flex align-items-center gap-2 text-decoration-none py-2 fs-5 ${
            pathname === l.to ? "fw-semibold text-primary" : "text-dark"
          }`}
        >
          {l.icon} {l.label}
        </Link>
      ))}
    </aside>
  );
}
