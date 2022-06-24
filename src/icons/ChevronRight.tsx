import * as React from 'react';

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="1em" height="1em" {...props}>
      <path
        d="M10.1 2.2l9.6 9.6c.4.4.4 1 0 1.4 0 0 0 0 0 0l-9.6 9.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgChevronRight;
