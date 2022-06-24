import * as React from 'react';

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="1em" height="1em" {...props}>
      <path
        d="M13.5 3.7c-.2-.2-.6-.2-.9 0-.2.2-.2.6 0 .9L16.9 9H.6c-.3-.1-.6.2-.6.5s.3.6.6.6h16.3l-4.3 4.4c-.2.2-.2.6 0 .9.2.2.6.2.9 0l5.4-5.4c.2-.2.2-.6 0-.8l-5.4-5.5z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowRight;
