import * as React from 'react';

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M12 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-3 1h6c1.7 0 3 1.3 3 3v4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-4c0-1.7 1.3-3 3-3z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProfile;
