export const routesAPIAuth = {
  verifyUsername: (username: string) => `/auth/v1/username-search/${username}`,
  REGISTER: "/auth/v1/register",
  LOGIN: "/auth/v1/login",
  CURRENT_USER: "/auth/v1/current-user",
};
