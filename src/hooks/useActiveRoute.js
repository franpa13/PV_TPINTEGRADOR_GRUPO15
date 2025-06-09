import { useLocation } from "react-router-dom";

/**
 * Custom hook para verificar si una ruta está activa.
 * @returns {function} isActive - Función que compara la ruta actual con una ruta objetivo.
 */
export const useActiveRoute = () => {
  const { pathname } = useLocation();

  const isActive = (targetPath) => {
    if (targetPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(targetPath);
  };

  return isActive;
};
