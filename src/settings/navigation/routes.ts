type NameRoutes = "home" | "login" | "register" | "panel" | "linkPages";

type NavigationRoutes = Record<
  NameRoutes,
  {
    route: string;
    title: string;
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
    title: "Onlinks",
    security: false,
    permissions: [],
  },
  login: {
    route: "/login",
    title: "Se Logar",
    security: {
      redirect: "/panel",
      type: "exit",
    },
    permissions: ["view-panel"],
  },
  register: {
    route: "/register",
    title: "Se Registrar",
    security: {
      redirect: "/panel",
      type: "exit",
    },
    permissions: ["view-panel"],
  },
  panel: {
    title: "Painel",
    route: "/panel",
    security: {
      redirect: "/login",
      type: "entrance",
    },
    permissions: ["view-panel"],
  },
  linkPages: {
    title: "Página de links",
    route: "/panel/link-pages",
    security: {
      redirect: "/login",
      type: "entrance",
    },
    permissions: ["view-panel"],
  },
};
