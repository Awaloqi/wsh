import * as React from 'react';

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" {...props}>
      <path
        d="M1 6h12c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinus;
