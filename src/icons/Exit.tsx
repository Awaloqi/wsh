import * as React from 'react';

function SvgExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        d="M24 22.6l7.1-7.1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L25.4 24l7.1 7.1c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L24 25.4l-7.1 7.1c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l7.1-7.1-7.1-7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7.1 7.1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExit;
