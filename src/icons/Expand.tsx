import * as React from 'react';

function SvgExpand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        d="M25 23h10c.6 0 1 .4 1 1s-.4 1-1 1H25v10c0 .6-.4 1-1 1s-1-.4-1-1V25H13c-.6 0-1-.4-1-1s.4-1 1-1h10V13c0-.6.4-1 1-1s1 .4 1 1v10z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExpand;
