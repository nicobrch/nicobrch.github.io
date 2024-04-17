import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-2xl font-medium">
      {props.children}
    </h1>
  )
}

export function CustomMDX(props: any) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </Suspense>
  );
}