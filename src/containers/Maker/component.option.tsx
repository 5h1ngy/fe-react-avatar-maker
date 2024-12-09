import React from 'react';
import { createListCollection } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';
import { OptionKeys } from '@/store/containerMaker.types';
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from "@/components/Chakra/select"

import wicthContainer, { Bind } from "./container";

interface ComponentProps {
  id: string,
  list: Array<string | number>
}

const Component: React.FC<Bind & ComponentProps> = ({ actions, state, id, list }) => {
  const placeholder = _parseKey(id)

  const listCollection = createListCollection({
    items: list.map(element => ({
      label: typeof element === "string" ? _parseKey(element) : element,
      value: element
    }))
  });

  function onTypeChange(args: any) {
    const { value: type } = args as { items: typeof Proxy[]; value: string[] };

    const value = type[0]
    actions.updateOption({ id, value })
  }

  return <SelectRoot
    width={'10rem'} size={'sm'} collection={listCollection}
    defaultValue={
      Array.isArray(state[id as OptionKeys])
        ? state[id as OptionKeys] as string[]
        : undefined
    }
    onValueChange={onTypeChange}
  >

    {/* Title */}
    <SelectLabel>
      {placeholder}
    </SelectLabel>

    {/* Placeholder */}
    <SelectTrigger>
      <SelectValueText
        placeholder={
          Array.isArray(state[id as OptionKeys])
            ? (state[id as OptionKeys] as string[])?.join(', ') || 'Select'
            : String(state[id as OptionKeys] || 'Select')
        }
      />
    </SelectTrigger>

    {/* Items */}
    <SelectContent>
      {listCollection.items.map((item) =>
        <SelectItem item={item} key={item.value}>
          {item.label}
        </SelectItem>
      )}
    </SelectContent>

  </SelectRoot>
}

export default wicthContainer(Component);
