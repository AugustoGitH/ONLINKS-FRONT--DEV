type NameRoutes = "home" | "login" | "register" | "panel";

type NavigationRoutes = Record<
  NameRoutes,
  {
    route: string;
    security:
      | false
      | {
          redirect: string;
          type?: "entrance" | "exit";
        };
    permissions: string[];
  }
>;

export const navigationRoutes: NavigationRoutes = {
  home: {
    route: "/",
    security: false,
    permissions: [],
  },
  login: {
    route: "/login",
    security: {
      redirect: "/panel",
      type: "exit",
    },
    permissions: [],
  },
  register: {
    route: "/register",
    security: {
      redirect: "/panel",
      type: "exit",
    },
    permissions: [],
  },
  panel: {
    route: "/panel",
    security: {
      redirect: "/login",
      type: "entrance",
    },
    permissions: [],
  },
};
