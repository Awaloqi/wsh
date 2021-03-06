import * as React from 'react';

function SvgDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" width="1em" height="1em" {...props}>
      <path
        d="M7 8v13h10V8H7zm7.5-4c.8 0 1.5.7 1.5 1.5v1c0 .2 0 .3-.1.5h3.6c.3 0 .5.2.5.5s-.2.5-.5.5H18v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8H4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.6C8 6.8 8 6.7 8 6.5v-1C8 4.7 8.7 4 9.5 4h5zm0 1h-5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5zm-5 5c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5zm5 0c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDelete;
