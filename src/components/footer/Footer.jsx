import { Link, useLocation } from "react-router-dom";
import { useActiveRoute } from "../../hooks/useActiveRoute";

export const Footer = () => {

    const pages = [{ label: 'Home', path: "/" }, { label: 'favoritos', path: "/favorites" }, { label: 'Nuevo producto', path: "/create-product" }];
    const isActive = useActiveRoute();
    return (
        <footer className="bg-[#2e7d32] rounded-lg shadow-sm  m-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://www.revistaeyn.com/binrepository/1084x750/43c0/1000d750/none/26086/VVMA/moda-ropausada-americana-2023_5809344_20231018143322.jpg"
                            className="h-8"
                            alt="CHANGO MAS LOGO"
                        />
                        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
                            Supermarket
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        {pages.map((page) => {
                            return (
                                <Link key={page.path} to={page.path} >
                                    <li className={`hover:underline ${isActive(page.path) ? "underline" : "underline-none"} mr-4 md:mr-6 `}>

                                        {page.label}

                                    </li>
                                </Link>

                            )
                        })}

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto d lg:my-8" />
                <span className="block text-sm text-white sm:text-center ">
                    © 2025{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        GRUPO 15
                    </a>
                    . Programacion visual 2025.
                </span>
            </div>
        </footer>
    );
};
