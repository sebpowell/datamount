import {
  ReactElement,
  ReactNode,
  useContext,
  createContext,
  Context,
} from "react";

export type EntitySectionProps = {
  title?: string;
  component?: ReactElement;
  children?: { title: string; component: ReactElement }[];
};

type EntityContextProps<T extends object> = {
  data: T;
};

const EntityContext = createContext<EntityContextProps<object>>({ data: {} });

function useEntityContext<Data extends object>() {
  const context = useContext(
    // @ts-ignore
    EntityContext as Context<EntityContextProps<Data>>,
  );

  if (context === undefined) {
    throw new Error(
      "useReportContext must be used within a ReportContextProvider",
    );
  }

  return context;
}

type EntityContextProviderProps<Entity extends object> = {
  children: ReactNode;
  fetch: () => { data: Entity | null; isLoading: boolean };
};

const EntityContextProvider = <T extends object>(
  props: EntityContextProviderProps<T>,
) => {
  const { children, fetch } = props;

  const { data, isLoading } = fetch();

  if (isLoading) return <>Loading...</>;

  if (isLoading && !data) return <>No data</>;

  if (data !== null) {
    return (
      <EntityContext.Provider
        value={{
          data,
        }}
      >
        {children}
      </EntityContext.Provider>
    );
  }
};

export { EntityContext, EntityContextProvider, useEntityContext };
