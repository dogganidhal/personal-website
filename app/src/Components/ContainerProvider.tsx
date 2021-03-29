import React, { useContext } from 'react';
import { Container, interfaces } from 'inversify';
import CONTAINER from "../Container";

const InversifyContext = React.createContext<{ container: Container | null }>({ container: null });

type Props = {
  container: Container;
};

const ContainerProvider: React.FC<Props> = ({ children, container }) => {
  return (
    <InversifyContext.Provider value={{ container }}>
      {children}
    </InversifyContext.Provider>
  );
};

export function useInstance<T>(identifier: interfaces.ServiceIdentifier<T>) {
  // const { container } = useContext(InversifyContext);
  // console.log({ container: CONTAINER })
  // if (!container) { throw new Error(); }
  return CONTAINER.get<T>(identifier);
}

export default ContainerProvider;
