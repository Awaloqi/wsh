import * as React from 'react';

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="1em" height="1em" {...props}>
      <path
        d="M14.5 2.1l-9.6 9.6c-.4.4-.4 1 0 1.4 0 0 0 0 0 0l9.6 9.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgChevronLeft;
