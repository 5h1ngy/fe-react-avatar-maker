import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';

import withContainer from "./container";
import Option from "./component.option";

interface SectionProps {
  title: string;
  options: Record<string, string[]>;
}

const Component: React.FC<SectionProps> = ({ title, options }) =>
  <Flex direction={'column'} gapY={"1rem"} maxWidth={'35rem'}>

    <Text textStyle="xl">
      {title}
    </Text>

    <Flex wrap={"wrap"}
      gap={"1rem"} padding={'1rem'}
      borderRadius={'10px'} borderWidth="1px"
      backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
      justifyContent={{ base: "start", xl: 'center', "2xl": 'center' }}
    >
      {Object.entries(options).map(([attribute, values]) =>
        Array.isArray(values) && <Option key={crypto.randomUUID()} id={attribute} list={values} />
      )}
    </Flex>

  </Flex>

export default withContainer(Component);
