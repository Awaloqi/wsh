import React from 'react';

import { Button } from './Button';
import { ArrowRight, ChevronRight, ChevronLeft } from 'icons';
import { ButtonIcon } from './ButtonIcon';

export default { title: 'ui/Button' };

const renderButtons = (
  variant: 'primary' | 'accent' | 'outline-primary' | 'outline-accent',
  size?: 'sm' | 'md' | undefined,
) => (
  <div className="row">
    <div className="col-xs-3">
      <Button variant={variant} size={size}>
        Button
      </Button>
    </div>
    <div className="col-xs-3">
      <Button variant={variant} size={size}>
        Arrow
        <ArrowRight />
      </Button>
    </div>
    <div className="col-xs-3">
      <Button variant={variant} size={size} href="#">
        Link
      </Button>
    </div>
    <div className="col-xs-3">
      <Button variant={variant} size={size} disabled isBlock>
        Disabled
      </Button>
    </div>
  </div>
);

export const accent = () => (
  <div className="container">
    {renderButtons('accent', 'sm')}
    <br />
    {renderButtons('accent', 'md')}
    <br />
    {renderButtons('accent')}
    <br />
    {renderButtons('outline-accent', 'sm')}
    <br />
    {renderButtons('outline-accent', 'md')}
    <br />
    {renderButtons('outline-accent')}
  </div>
);
export const primary = () => (
  <div className="container">
    {renderButtons('primary', 'sm')}
    <br />
    {renderButtons('primary', 'md')}
    <br />
    {renderButtons('primary')}
    <br />
    {renderButtons('outline-primary', 'sm')}
    <br />
    {renderButtons('outline-primary', 'md')}
    <br />
    {renderButtons('outline-primary')}
  </div>
);

export const icon = () => (
  <div>
    <ButtonIcon variant="primary" label="Prev" Icon={ChevronLeft} />
    <ButtonIcon variant="outline-primary" label="Next" Icon={ChevronRight} />
  </div>
);
