class Routes<
  T extends {
    [key: string]: {
      path: string;
      params?: Array<keyof typeof routeParams>;
    };
  },
> {
  paths: T;

  constructor(paths: T) {
    this.paths = paths;
  }

  getRoute(
    path: keyof T,
    params?: { [key in keyof typeof routeParams]?: string },
  ) {
    const route = this.paths[path];

    let result = "";

    if (route.params && route.params.length > 0) {
      result = route.path;

      if (!params) throw `${route.path} requires parameters to be supplied`;

      route.params.map((param) => {
        const value = params[param];

        if (!value) {
          console.log(`${route.path} is missing a parameter for ${param}`);
          return;
        }

        result = result.replaceAll(param, value);
      });
    } else {
      result = route.path;
    }

    return result;
  }
}

const routeParams = {
  ":slug": ":slug",
  ":id": ":id",
  ":udprn": ":udprn",
  ":cuid": ":cuid",
};

type IRouteParams = Record<keyof typeof routeParams, string>;

const routePrefixes = {
  legal: "/legal",
  auth: "/auth",
  docs: "/docs",
  account: "/account",
  products: "/product",
};

const routes = new Routes({
  home: { path: "/" },
  contact: { path: "/contact" },
  pricing: { path: "/pricing" },
  docs: { path: routePrefixes.docs },
  auth_login: { path: `${routePrefixes.auth}/login` },
  auth_reset_password: { path: `${routePrefixes.auth}/reset-password` },
  auth_register: { path: `${routePrefixes.auth}/register` },
  account_dashboard: { path: `${routePrefixes.account}` },
  account_billing: { path: `${routePrefixes.account}/billing` },
  account_logs: { path: `${routePrefixes.account}/logs` },
  account_settings: { path: `${routePrefixes.account}/settings` },
  account_api_keys: { path: `${routePrefixes.account}/api-keys` },
  account_api_key_single: {
    path: `${routePrefixes.account}/api-keys/${routeParams[":cuid"]}`,
    params: [":cuid"],
  },
  account_support: { path: `${routePrefixes.account}/support` },
  product_single: {
    path: `${routePrefixes.products}/:slug`,
    params: [":slug"],
  },
  faqs: {
    path: "/faqs",
  },
  area: {
    path: `/area/${routeParams[":id"]}`,
    params: [":id"],
  },
  property: {
    path: `/property/${routeParams[":udprn"]}`,
    params: [":udprn"],
  },
  sandbox: {
    path: "/sandbox",
  },
  legal_privacy: { path: `${routePrefixes.legal}/privacy` },
  legal_terms: { path: `${routePrefixes.legal}/terms` },
  legal_cookies: { path: `${routePrefixes.legal}/cookies` },
});

export { routes, routeParams, routePrefixes };

export type { IRouteParams };
