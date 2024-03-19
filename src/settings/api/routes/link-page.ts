export const routesAPILinkPage = {
  GET_ALL_RESTRICT: "/link-page/restrict/v1/",
  GET_ALL: "/link-page/v1/",
  CREATE: "/link-page/v1/",

  getDeleteRestrict: (id: string) => `/link-page/restrict/v1/${id}`,
  getUpdateRestrict: (id: string) => `/link-page/restrict/v1/${id}`,
};
