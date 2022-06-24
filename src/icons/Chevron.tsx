import * as React from 'react';

function SvgChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <path
        d="M31.3 19.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L24 29.4l-8.7-8.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7.3 7.3 7.3-7.3z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevron;
