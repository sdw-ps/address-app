export type Guid = string;

export let route = {
  home: {
    path: "/",
    to: () => route.home.path,
  },
  users: {
    path: "/users",
    to: () => route.users.path,
  },
  newUser: {
    path: "/newUser",
    to: () => route.newUser.path,
  },
  users2: {
    path: "/users2",
    to: () => route.users2.path,
  },
  newUser2: {
    path: "/newUser2",
    to: () => route.newUser2.path,
  },
};

export type routeParams<Key extends keyof typeof route> = Parameters<
  (typeof route)[Key]["to"]
>[0];
