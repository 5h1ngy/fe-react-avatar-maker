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

  return (
    <Flex direction={'row'} wrap={"wrap"} gap={'2rem'}>

      {/* Avatar Box */}
      <Box width='25rem' height='25rem' overflow='hidden' position={'sticky'} top={'20%'}
        dangerouslySetInnerHTML={{ __html: avatar.toString() }}
      />

      <OptionList />

      <Download avatar={avatar} />

    </Flex>
  );
};

export default Component;
