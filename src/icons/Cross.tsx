import * as React from 'react';

function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M27.4 23.8l3.5 3.5c1 1 1 2.6 0 3.5s-2.6 1-3.5 0l-3.5-3.5-3.5 3.5c-1 1-2.6 1-3.5 0s-1-2.6 0-3.5l3.5-3.5-3.5-3.5c-1-1-1-2.6 0-3.5s2.6-1 3.5 0l3.5 3.5 3.5-3.5c1-1 2.6-1 3.5 0s1 2.6 0 3.5l-3.5 3.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCross;
