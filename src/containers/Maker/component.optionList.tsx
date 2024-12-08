import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';

import withContainer, { Bind } from "./container";
import Option from "./component.option";

interface SectionProps {
  title: string;
  options: Record<string, string[]>;
}

const OptionsSection: React.FC<SectionProps> = ({ title, options }) => (
  <Flex direction={'column'} gapY={"1rem"}>
    <Text textStyle="xl">{title}</Text>
    <Flex
      wrap={"wrap"}
      gap={"1rem"}
      padding={'1.5rem'}
      borderRadius={'10px'}
      borderWidth="1px"
      backgroundColor={"white"}
      _dark={{ backgroundColor: "black" }}
      justifyContent={'center'}
    >
      {Object.entries(options).map(([attribute, values]) =>
        Array.isArray(values) && <Option key={crypto.randomUUID()} id={attribute} list={values} />
      )}
    </Flex>
  </Flex>
);

const Component: React.FC<Bind> = ({ state }) => (
  <Flex wrap={'wrap'} gap={'1rem'}>
    <OptionsSection title="Basic" options={state.optionsBasic} />
    <OptionsSection title="Styles" options={state.optionsStyle} />
    <OptionsSection title="Colors" options={state.optionsColors} />
    <OptionsSection title="Face" options={state.optionsFace} />
    <OptionsSection title="Clothes" options={state.optionsClothes} />
  </Flex>
);

export default withContainer(Component);
