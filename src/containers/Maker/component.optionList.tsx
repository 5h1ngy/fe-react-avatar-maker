import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';
import { popularColors, hairColors, skinTones, clothingColors } from '@/shared/colors';

import withContainer from "./container";
import Option from "./component.option";

export const options = {
  optionsBasic: {
    // seed?: string;
    // flip?: boolean;
    // rotate?: number;
    // scale?: number;
    // radius?: number;
    // size?: number;
    backgroundColor: popularColors,
    backgroundType: ['solid', 'gradientLinear'],
    // backgroundRotation?: number[];
    // translateX?: number;
    // translateY?: number;
    // clip?: boolean;
    // randomizeIds?: boolean;
  },
  optionsStyle: {
    style: ['circle', 'default'],
    base: ['default'],
    backgroundColor: popularColors,
  },
  optionsColors: {
    hairColor: hairColors,
    skinColor: skinTones,
    facialHairColor: hairColors,
  },
  optionsFace: {
    mouth: ['concerned', 'default', 'disbelief', 'eating', 'grimace', 'sad', 'screamOpen', 'serious', 'smile', 'tongue', 'twinkle', 'vomit'],
    nose: ['default'],
    eyes: ['closed', 'cry', 'default', 'eyeRoll', 'happy', 'hearts', 'side', 'squint', 'surprised', 'winkWacky', 'wink', 'xDizzy'],
    eyebrows: ['angryNatural', 'defaultNatural', 'flatNatural', 'frownNatural', 'raisedExcitedNatural', 'sadConcernedNatural', 'unibrowNatural', 'upDownNatural', 'angry', 'default', 'raisedExcited', 'sadConcerned', 'upDown'],
    facialHair: ['beardLight', 'beardMajestic', 'beardMedium', 'moustacheFancy', 'moustacheMagnum'],
    facialHairProbability: [0, 100],
  },
  optionsClothes: {
    clothing: ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtScoopNeck', 'shirtVNeck'],
    top: ['hat', 'hijab', 'turban', 'winterHat1', 'winterHat02', 'winterHat03', 'winterHat04', 'bob', 'bun', 'curly', 'curvy', 'dreads', 'frida', 'fro', 'froBand', 'longButNotTooLong', 'miaWallace', 'shavedSides', 'straight02', 'straight01', 'straightAndStrand', 'dreads01', 'dreads02', 'frizzle', 'shaggy', 'shaggyMullet', 'shortCurly', 'shortFlat', 'shortRound', 'shortWaved', 'sides', 'theCaesar', 'theCaesarAndSidePart', 'bigHair'],
    topProbability: [0, 100],
    accessories: ['kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers', 'eyepatch'],
    accessoriesProbability: [0, 100],
    clothingGraphic: ['bat', 'bear', 'cumbia', 'deer', 'diamond', 'hola', 'pizza', 'resist', 'skull', 'skullOutline'],
    accessoriesColor: popularColors,
    clothesColor: clothingColors,
    hatColor: popularColors,
  },
}

interface ComponentProps {
  title: string;
  options: Record<string, string[] | number[]>;
}

const Component: React.FC<ComponentProps> = ({ title, options }) =>
  <Flex direction={'column'} gapY={"1rem"} width={'30rem'}>

    <Text textStyle="xl" fontWeight="bold">
      {title}
    </Text>

    <Flex wrap={"wrap"}
      gap={"1rem"} padding={'1rem'}
      borderRadius={'10px'} borderWidth="1px"
      backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
      justifyContent={{ base: "start", xl: 'center', "2xl": 'center' }}
    >
      {Object.entries(options).map(([attribute, values]) =>
        Array.isArray(values) &&
        values.every(item => typeof item === 'string') &&
        <Option key={crypto.randomUUID()} id={attribute} list={values} />
      )}
      {Object.entries(options).map(([attribute, values]) =>
        Array.isArray(values) &&
        values.every(item => typeof item === 'number') &&
        <Option key={crypto.randomUUID()} id={attribute} list={values} />
      )}
    </Flex>

  </Flex>

export default withContainer(Component);
