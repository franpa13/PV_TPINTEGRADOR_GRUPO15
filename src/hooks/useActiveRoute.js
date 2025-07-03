import { useLocation } from "react-router-dom";

export const useActiveRoute = () => {
  const { pathname } = useLocation();

  const isActive = (targetPath, exact = true) => {
    return exact ? pathname === targetPath : pathname.startsWith(targetPath);
  };

  return isActive;
};
