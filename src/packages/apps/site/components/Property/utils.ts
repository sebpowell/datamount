type PropertyFeature = {
  title: string;
  value: string | number | null;
};

const createFeatureCards = <T extends object>(
  items: {
    key: keyof T;
    label: string;
    format(props: {
      key: keyof T;
      value: string | number | null;
      original: T;
    }): string | number | null;
  }[],
  object: T,
): PropertyFeature[] => {
  let response: PropertyFeature[] = [];

  items.map((item) => {
    response.push({
      title: item.label,
      value: item.format({
        key: item.key,
        value: object[item.key] as string | number | null, // Type assertion here
        original: object,
      }),
    });
  });

  return response;
};

export { createFeatureCards };
