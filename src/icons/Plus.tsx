import * as React from 'react';

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" {...props}>
      <path
        d="M7 0c.6 0 1 .4 1 1v5h5c.6 0 1 .4 1 1s-.4 1-1 1H8v5c0 .6-.4 1-1 1s-1-.4-1-1V8H1c-.6 0-1-.4-1-1s.4-1 1-1h5V1c0-.6.4-1 1-1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlus;
