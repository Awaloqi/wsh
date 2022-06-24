import React, { Fragment, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

import { Section } from './Section';
import { Chevron, Exit } from 'icons';
import './faq.scss';
import { contacts } from '../../constants';
import { sections } from './sections';
import { ContactsNew } from 'components/ContactsNew';
import { Button } from 'ui';
import { BadgeContainer } from 'components/BadgeContainer';

export const Faq = () => {
  const [selectedSection, setSelectedSection] = useState<number | undefined>(0);
  const [selectedQuestion, setSelectedQuestion] = useState<number>();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const handleSectionSelect = useCallback(
    (index: number) => {
      setSelectedSection(selectedSection === index ? undefined : index);
      setSelectedQuestion(undefined);
    },
    [setSelectedSection, setSelectedQuestion, selectedSection],
  );
  const handleQuestionClick = useCallback(
    (index: number) => {
      setSelectedQuestion(selectedQuestion === index ? undefined : index);
    },
    [setSelectedQuestion, selectedQuestion],
  );

  return (
    <>
      <div className="container faqs-page">
        <Helmet>
          <title>WashMix — Frequently Asked Questions</title>
          <meta name="description" content="Frequently Asked Questions" />
        </Helmet>
        <h2>Frequently Asked Questions</h2>
        <div className="row page-description">
          <div className="col-lg-8 col-sm-12">
            <p>
              If your questions are not answered by the information on this page, please feel free to email us at{' '}
              <a href={contacts.emailCSLink}>{contacts.emailCS}</a> OR Text us at&nbsp;
              <a href={contacts.phoneLink}>
                {contacts.phoneLiteral} ({contacts.phoneNumber})
              </a>
              .
            </p>
          </div>
        </div>
        <div className="page-content">
          {!isMobile ? (
            <>
              <div className="section-headings">
                <ul>
                  {sections.map((sec, index) => (
                    <li
                      key={sec.name}
                      className={selectedSection === index ? 'active' : ''}
                      onClick={() => handleSectionSelect(index)}
                    >
                      {sec.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-content">
                {selectedSection != null && (
                  <>
                    {sections[selectedSection].info && (
                      <div className="section-info">{sections[selectedSection].info}</div>
                    )}
                    {sections[selectedSection].questions.map((question, index) => (
                      <Section
                        key={question.title}
                        index={index}
                        isOpen={index === selectedQuestion}
                        onClick={handleQuestionClick}
                        title={question.title}
                        description={question.description}
                        sectionClass="question"
                        openIcon={<Exit width="38px" height="38px" style={{ transform: 'rotate(45deg)' }} />}
                        closeIcon={<Exit width="38px" height="38px" />}
                      />
                    ))}
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="col-sm-12 col-xs-12 section-content">
              <div className="list">
                {sections.map((sec, index) => (
                  <div className="list-item" key={sec.name}>
                    {sec.info && <div className="section-info">{sec.info}</div>}
                    <Section
                      index={index}
                      title={sec.name}
                      sectionClass="section-item"
                      openIcon={<Chevron width="38px" height="38px" style={{ color: '#003459' }} />}
                      closeIcon={
                        <Chevron width="38px" height="38px" style={{ transform: 'rotate(180deg)', color: '#fff' }} />
                      }
                      isOpen={index === selectedSection}
                      onClick={handleSectionSelect}
                      description={
                        <div className="list">
                          {sec.questions.map((question, index) => (
                            <Fragment key={question.title}>
                              <div className="list-item">
                                <Section
                                  index={index}
                                  title={question.title}
                                  description={question.description}
                                  sectionClass="question"
                                  openIcon={<Exit width="38px" height="38px" style={{ transform: 'rotate(45deg)' }} />}
                                  closeIcon={<Exit width="38px" height="38px" />}
                                  isOpen={index === selectedQuestion}
                                  onClick={handleQuestionClick}
                                />
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ContactsNew />
        <div className={'ready'}>
          <h2 className={'ready_title'}>So, You Ready?</h2>
          <Button variant="accent" to="/registration">
            Request Pickup
          </Button>
        </div>
        <BadgeContainer />
      </div>
    </>
  );
};
