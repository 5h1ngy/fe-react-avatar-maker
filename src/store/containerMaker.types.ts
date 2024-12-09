// Form more infos about OptionKeys,see
// import { Options } from '@dicebear/core';
// import { Options } from '@dicebear/collection/avataaars';

export type OptionKeys =
    // Basic Options
    | 'seed' | 'flip' | 'rotate' | 'scale'
    | 'radius' | 'size' | 'backgroundColor' | 'backgroundType'
    | 'backgroundRotation' | 'translateX' | 'translateY' | 'clip'
    | 'randomizeIds'
    // Style Options
    | 'style' | 'base' | 'backgroundColor'
    // Colors Options
    | 'hairColor' | 'skinColor' | 'facialHairColor'
    // Face Options
    | 'mouth' | 'nose' | 'eyes' | 'eyebrows'
    | 'facialHair' | 'facialHairProbability'
    // Clothes Options
    | 'clothing' | 'top' | 'topProbability' | 'accessories'
    | 'accessoriesProbability' | 'clothingGraphic' | 'accessoriesColor' | 'clothesColor'
    | 'hatColor'

export type Options =
    Record<OptionKeys, Array<string> | number>;

export type SelectedOptions =
    Record<OptionKeys, Array<string> | number>;