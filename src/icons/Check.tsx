import * as React from 'react';

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M19.5 26.1l8.9-8.9c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5L21.5 31.2c-.2.2-.5.4-.7.5-.9.6-2.2.5-3-.3L12.6 26c-.9-.9-.9-2.5 0-3.4s2.5-.9 3.4 0l3.5 3.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCheck;
