import React, { useState } from 'react';
import { createAvatar, Options } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { Box, Flex } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';
import { Button } from '@/components/Chakra/button';

import { Bind } from "./container";
import OptionList from "./component.optionList";
import Download from "./component.download";

const Component: React.FC<Bind> = ({ state }) => {
  const [seed, setSeed] = useState('random-seed');

  const avatar = createAvatar(avataaars, {
    ...(state.selectedOptions as Partial<Options & avataaars.Options>),
    seed,
  });

  return (
    <Flex direction={'column'} gap={'2rem'}>

      {/* Avatar Box */}
      <Box width='25rem' height='25rem' overflow='hidden' margin='0 auto'>
        <div dangerouslySetInnerHTML={{ __html: avatar.toString() }} />
      </Box>

      <OptionList />

      <Download avatar={avatar} />

      <Button
        onClick={() => setSeed(Math.random().toString(36).substring(2, 15))}
        marginTop='20px'
        padding='10px 20px'
        fontSize='16px'
        backgroundColor='#007bff'
        color='white'
        border='none'
        borderRadius='5px'
        cursor='pointer'
      >
        Generate Random Avatar
      </Button>
    </Flex>
  );
};

export default Component;
