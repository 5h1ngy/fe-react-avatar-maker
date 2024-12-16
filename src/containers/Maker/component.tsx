import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createAvatar, Options } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { Box, Flex } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';

import { Bind } from "./container";
import OptionList, { options } from "./component.optionList";
import Download from "./component.download";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind> = ({ state }) => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const avatar = createAvatar(avataaars, {
    ...(state as Partial<Options & avataaars.Options>),
  });


  // Inizializza le animazioni GSAP al montaggio
  useEffect(() => {
    // Assicurati che ci siano elementi in cardsRef.current
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0, // Inizia trasparente
              y: 100, // Parte 100px sotto
            },
            {
              opacity: 1, // Diventa visibile
              y: 0, // Torna alla posizione originale
              duration: 0.8, // Durata dell'animazione
              ease: "bounce.out", // Effetto rimbalzo
              scrollTrigger: {
                trigger: card,
                start: "top 85%", // Trigger dell'animazione
                toggleActions: "play none none none", // Solo in avanti
              },
            }
          );
        }
      });
    }
  }, []); // Effettua l'animazione solo al montaggio

  return <Flex
    direction={{ base: "column", xl: 'row', "2xl": 'row' }}
    gap={'2rem'}
  >

    {/* Avatar preview & Downloads button */}
    <Flex
      position="relative" direction={"column"}
      wrap={'wrap'} gap={'2rem'}
      alignContent={{ base: "center", xl: 'start', "2xl": 'start' }}
      justifyContent={{ base: "center", xl: 'start', "2xl": 'start' }}
    >
      <Flex direction={"column"} gap={'2rem'}
        position={{ base: "unset", xl: 'sticky', "2xl": 'sticky' }} top={'10%'}
        alignItems={{ base: "center", xl: 'center', "2xl": 'center' }}
      >
        <Box dangerouslySetInnerHTML={{ __html: avatar.toString() }}
          width='25rem' height='25rem' overflow='hidden'
        />
        <Download avatar={avatar} />
      </Flex>
    </Flex>

    <Flex wrap={'wrap'} gap={'3rem'} justifyContent={"center"}>
      <OptionList
        ref={(el: any) => (cardsRef.current[0] = el!)}
        title="🛠️ Basic" options={options.optionsBasic}
      />
      <OptionList
        ref={(el: any) => (cardsRef.current[1] = el!)}
        title="🎨 Styles" options={options.optionsStyle}
      />
      <OptionList
        ref={(el: any) => (cardsRef.current[2] = el!)}
        title="🌈 Colors" options={options.optionsColors}
      />
      <OptionList
        ref={(el: any) => (cardsRef.current[3] = el!)}
        title="😊 Face" options={options.optionsFace}
      />
      <OptionList
        ref={(el: any) => (cardsRef.current[4] = el!)}
        title="👕 Clothes" options={options.optionsClothes}
      />
    </Flex>

  </Flex>;
};

export default Component;
