import React from 'react';
import { createListCollection } from '@chakra-ui/react';

import { _parseKey } from '@/shared/utils';
import { OptionKeys } from '@/store/containerMaker.types';
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from "@/components/Chakra/select"

import wicthContainer, { Bind } from "./container";

interface ComponentProps {
  id: string,
  list: Array<string>
}

const Component: React.FC<Bind & ComponentProps> = ({ actions, state, id, list }) => {
  const placeholder = _parseKey(id)

  const listCollection = createListCollection({
    items: list.map(element => ({
      label: _parseKey(element),
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
    defaultValue={state.selectedOptions[id as OptionKeys] || undefined}
    onValueChange={onTypeChange}
  >

    {/* Title */}
    <SelectLabel>
      {placeholder}
    </SelectLabel>

    {/* Placeholder */}
    <SelectTrigger>
      <SelectValueText placeholder={state.selectedOptions[id as OptionKeys]?.join(', ') || 'Select'} />
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
