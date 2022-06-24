import React from 'react';
import Responsive from 'react-responsive';

// $screen-lg					:	1200px;
// $screen-md					:	992px;
// $screen-md-max				:	$screen-md - 1px;
// $screen-sm-max				:	799px;
// $screen-sm					:	768px;
// $screen-xs					:	767px;

const Mobile = (props) => <Responsive {...props} maxWidth={767} />;
const NotMobile = (props) => <Responsive {...props} minWidth={768} />;
const XL = (props) => <Responsive {...props} minWidth={1600} />;
const LG = (props) => <Responsive {...props} minWidth={1200} />;
const MD = (props) => <Responsive {...props} minWidth={992} />;
const SM = (props) => <Responsive {...props} maxWidth={799} />;
const XS = Mobile;

export { Mobile, NotMobile, LG, MD, SM, XS, XL };
