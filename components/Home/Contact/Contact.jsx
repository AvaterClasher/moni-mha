import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+91-6297....34"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +91-6297....34
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:@avater.clasher"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            mail@soumyadip.moni
          </a>
        </div>
        <address className="column contact-text">
          Bhubaneswar <br /> Orissa
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
