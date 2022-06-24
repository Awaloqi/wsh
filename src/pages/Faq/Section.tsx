import React, { ReactNode, useCallback } from 'react';
import Collapse from '@kunukn/react-collapse';

type Props = {
  index: number;
  isOpen: boolean;
  title: string;
  description: ReactNode;
  sectionClass: string;
  openIcon: ReactNode;
  closeIcon: ReactNode;
  onClick: (index: number) => void;
};

export const Section = ({ index, isOpen, title, description, sectionClass, openIcon, closeIcon, onClick }: Props) => {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  return (
    <div className={`wm-collapse ${sectionClass}`}>
      <div className={`heading ${isOpen ? 'is-open' : 'is-close'}`} onClick={handleClick}>
        <span className="title" aria-controls={`collapse-text-${index}`} aria-expanded={isOpen}>
          {title}
        </span>
        <span className={`trigger-icon ${isOpen ? 'is-open' : 'is-close'}`}>{isOpen ? closeIcon : openIcon}</span>
      </div>

      <Collapse isOpen={isOpen}>
        {typeof description === 'string' ? (
          <div
            id={`collapse-text-${index}`}
            className={`description ${isOpen ? 'is-open' : 'is-close'}`}
            // @ts-ignore
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div id={`collapse-text-${index}`} className={`description ${isOpen ? 'is-open' : 'is-close'}`}>
            {description}
          </div>
        )}
      </Collapse>
    </div>
  );
};
