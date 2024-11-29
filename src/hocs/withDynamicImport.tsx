import React, { Suspense, lazy, ComponentType } from 'react';

interface DynamicImportProps {
  containers: (props?: object) => JSX.Element;
  pages: (props?: object) => JSX.Element;
}

export default function withDynamicImport(path: string, loader: React.ReactElement): DynamicImportProps {

  function containers(props?: object) {
    const Content = lazy<ComponentType<unknown>>(async () => await import(`./../containers/${path}/index.ts`));

    return (
      <Suspense fallback={loader}>
        <Content {...props} />
      </Suspense>
    );
  }

  function pages(props?: object) {
    const Page = lazy<ComponentType<unknown>>(async () => await import(`./../pages/${path}/index.ts`));

    return (
      <Suspense fallback={loader}>
        <Page {...props} />
      </Suspense>
    );
  }

  return {
    containers,
    pages
  };
}
