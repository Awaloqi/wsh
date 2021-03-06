import * as React from 'react';

function SvgPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M20 16.6c0-.2-.2-.4-.4-.6l-3.3-1.9c-.2 0-.3-.1-.5-.1-.3 0-.5.1-.7.3l-1 1-.2.1s-1.1-.1-3.2-2.1c-2-2-2.1-3.2-2.1-3.2 0-.1.1-.2.1-.2l.8-.9c.3-.3.4-.8.2-1.1L7.9 4.4c-.1-.2-.4-.4-.6-.4-.2 0-.4.1-.6.2L4.5 6.5c-.3.2-.4.6-.5.9 0 .1-.4 3.6 4.3 8.3 4 4 7.1 4.3 8 4.3h.3c.3 0 .7-.2.9-.4l2.2-2.2c.2-.3.3-.5.3-.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhone;
