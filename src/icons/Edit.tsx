import * as React from 'react';

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
      <path
        fill="#39B6ED"
        d="M6.226 17.941l3.3-.47 9.663-9.665-2.828-2.828-9.664 9.664-.471 3.3zm10.842-13.67l2.828 2.828a1 1 0 010 1.414l-9.9 9.9-3.629.518A1 1 0 015.236 17.8l.518-3.63 9.9-9.9a1 1 0 011.414 0zm-2.829 1.414l4.243 4.243-.707.707-4.243-4.243.707-.707z"
      />
    </svg>
  );
}

export default SvgEdit;
