import { Link } from "react-router-dom";
import { useActiveRoute } from "../../hooks/useActiveRoute";
import icono from "../../assets/icono.jpg";

const pages = [
  { label: "Home", path: "/shop" },
  { label: "Favoritos", path: "/shop/favorites" },
  { label: "Nuevo producto", path: "/shop/create-product" },
];

export const Footer = () => {
  const isActive = useActiveRoute();

  return (
    <footer className="bg-[#FFF0F6] border-t-4 border-[#DF1074]">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 sm:flex sm:items-center sm:justify-between">
        {/* ———— Brand ———— */}
        <Link to="/shop" className="flex items-center space-x-3 mb-6 sm:mb-0">
          <img
            src={icono}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md hover:scale-105 transition"
          />
          <span className="self-center text-2xl font-semibold text-[#333]">
            FASHIONISTA
          </span>
        </Link>

        {/* ———— Links ———— */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          {pages.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${
                  isActive(path, true)
                    ? "underline text-[#DF1074]"
                    : "text-[#333]"
                } hover:text-[#DF1074] transition`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ———— Bottom bar ———— */}
      <div className="bg-[#FCE4EC]">
        <p className="text-center py-4 text-sm text-[#333]">
          © 2025 <span className="font-semibold">GRUPO 15</span>. Programación
          visual 2025.
        </p>
      </div>
    </footer>
  );
};
