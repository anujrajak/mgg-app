// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: any, pathname: string): any => {
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if (!!route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (!!found) return found;
    }
    if (pathname?.match(route.path) && route) return route;
  }
};

export const getActiveRoute = (routes: any, pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || "Dashboard";
};

export const getActiveNavbar = (routes: any, pathname: string): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return route?.secondary;
};

export const getActiveNavbarText = (
  routes: any[],
  pathname: string
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};
