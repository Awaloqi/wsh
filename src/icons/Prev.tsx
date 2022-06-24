import * as React from 'react';

function SvgPrev(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        d="M27.7 16.2l-7.2 7.2c-.3.3-.3.8 0 1.1h0l7.2 7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgPrev;
