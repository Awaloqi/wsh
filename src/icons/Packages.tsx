import * as React from 'react';

function SvgPackages(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M6.1 5.2h6.4c.3 0 .5.1.7.3l6 6c.4.4.4 1 0 1.4l-6.4 6.4c-.4.4-1 .4-1.4 0l-6-6c-.2-.2-.3-.4-.3-.7V6.2c-.1-.5.4-.9 1-1-.1 0 0 0 0 0zM9.5 11c.8 0 1.5-.7 1.5-1.5S10.3 8 9.5 8 8 8.7 8 9.5 8.7 11 9.5 11z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPackages;
