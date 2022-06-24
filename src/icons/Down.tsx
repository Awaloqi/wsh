import * as React from 'react';

function SvgDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M7 10h9l-4.5 5z" />
    </svg>
  );
}

export default SvgDown;
