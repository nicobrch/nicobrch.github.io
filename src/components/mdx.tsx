import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';

const components = {
  h1: (props) => (
    <h1 {...props} className="text-2xl font-medium">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className="text-xl font-medium">
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 {...props} className="text-lg font-medium">
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p {...props} className="text-sm">
      {props.children}
    </p>
  ),
}

export function CustomMDX(props) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </Suspense>
  );
}