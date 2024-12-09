import React from 'react';
import { createAvatar, Options } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { Box, Flex } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';

import { Bind } from "./container";
import OptionList from "./component.optionList";
import Download from "./component.download";

const Component: React.FC<Bind> = ({ state }) => {

  const avatar = createAvatar(avataaars, {
    ...(state.selectedOptions as Partial<Options & avataaars.Options>),
  });

  console.log(state.selectedOptions)

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
        position={{ base: "unset", xl: 'sticky', "2xl": 'sticky' }} top={'20%'}
        alignItems={{ base: "center", xl: 'start', "2xl": 'start' }}
      >
        <Box dangerouslySetInnerHTML={{ __html: avatar.toString() }}
          width='25rem' height='25rem' overflow='hidden'
        />
        <Download avatar={avatar} />
      </Flex>
    </Flex>

    <Flex wrap={'wrap'} gap={'3rem'} justifyContent={"center"}>
      <OptionList title="Basic 🛠️" options={state.optionsBasic} />
      <OptionList title="Styles 🎨" options={state.optionsStyle} />
      <OptionList title="Colors 🌈" options={state.optionsColors} />
      <OptionList title="Face 😊" options={state.optionsFace} />
      <OptionList title="Clothes 👕" options={state.optionsClothes} />
    </Flex>

  </Flex>;
};

export default Component;
