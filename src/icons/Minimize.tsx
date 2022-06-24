import * as React from 'react';

function SvgMinimize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        d="M13 23h22c.6 0 1 .4 1 1s-.4 1-1 1H13c-.6 0-1-.4-1-1s.4-1 1-1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinimize;
