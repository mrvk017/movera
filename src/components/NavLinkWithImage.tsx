import { Link, useLocation } from "react-router-dom";

const NavLinkWithImage = ({ to, label, image }: any) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative group flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors ${
        isActive ? "text-teal-800 font-semibold" : ""
      }`}
    >
      <img
        src={image}
        alt={label}
        className={`absolute left-[-25px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-md shadow-lg pointer-events-none transition-all duration-500 ease-out
          ${
            isActive
              ? "opacity-100 translate-x-2"
              : "opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
          }`}
      />
      <span>{label}</span>
    </Link>
  );
};
export default NavLinkWithImage;