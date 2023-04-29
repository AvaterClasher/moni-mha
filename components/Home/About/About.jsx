import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
            My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no
            Hīrō Akademia) is a Japanese superhero manga series written and
            illustrated by Kōhei Horikoshi.
          </h2>
          <p>
            The story of My Hero Academia is set in a world where currently most
            of the human population has gained the ability to develop
            superpowers called &quot; Quirks &quot; (個性, Kosei), which occur
            in children within the age of four: it is estimated that around 80%
            of the world population has a Quirk. There are an endless number of
            Quirks, and it is extremely unlikely to find two people who have the
            exact same power, unless they are closely related. Among the
            Quirk-enhanced individuals, a few of them earn the title of Heroes,
            who cooperate with the authorities in rescue operations and
            apprehending criminals who abuse their powers, commonly known as
            Villains.
          </p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Characters</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
