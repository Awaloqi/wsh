import * as React from 'react';

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="1em" height="1em" {...props}>
      <circle cx={11} cy={11} r={10.5} fill="none" stroke="currentColor" />
      <path
        d="M15.3 8.4c.4-.3.8-.7.9-1.3-.4.3-.9.4-1.4.6-.4-.4-1-.7-1.6-.7C12 7 11 8 11 9.3c0 .2 0 .4.1.5-1.8-.1-3.4-1-4.4-2.4-.2.4-.3.7-.3 1.2 0 .8.4 1.5 1 1.9-.4 0-.7-.1-1-.3 0 1.1.7 2 1.7 2.2-.2.1-.4.1-.6.1h-.4c.3.9 1.1 1.6 2 1.6-.7.6-1.7 1-2.7 1h-.5c1 .6 2.1 1 3.3 1 4 0 6.1-3.5 6.1-6.5v-.3c.4-.3.8-.7 1.1-1.2-.3.1-.7.3-1.1.3z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitter;
