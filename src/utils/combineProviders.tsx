import React, { ComponentType, ProviderProps, ReactElement, ReactNode } from 'react';

type Provider<T = any> = ComponentType<T>;

type Props = { children?: ReactNode };

export const combineProviders = (providers: Provider[]) => ({ children }: Props) =>
  providers.reduce<ReactElement<ProviderProps<any>>>(
    (tree, Provider) => <Provider>{tree}</Provider>,
    children as ReactElement,
  );
