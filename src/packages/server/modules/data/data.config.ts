enum DataServiceNames {
  "alpha" = "alpha",
  "beta" = "beta",
}

const dataServices = {
  [DataServiceNames.alpha]: {
    baseUrl: "",
    headers: {
      Authorization: "",
    },
  },
  [DataServiceNames.beta]: {
    baseUrl: "",
    headers: {},
  },
};

export { dataServices, DataServiceNames };
