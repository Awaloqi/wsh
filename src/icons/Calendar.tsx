import * as React from 'react';

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M7 3h6V1a1 1 0 012 0v2h3a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h3V1a1 1 0 112 0v2zm0 2v1a1 1 0 11-2 0V5H2v12h16V5h-3v1a1 1 0 01-2 0V5H7zm-1 6a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
}

export default SvgCalendar;
