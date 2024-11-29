import _ from "lodash";
import React from "react";
import { Badge, Card, Image } from "@chakra-ui/react"

import getRandomColor from "@/utils/getRandomColor"

export interface Props {
  id: string;
  thumbnail: string;
  season: string | null;
  yearStart: number;
  title: string;
  type: string;
  actions?: React.ReactElement;
}

const Component: React.FC<Props> = ({ thumbnail, yearStart, season, title, type, actions }) => {

  return (<Card.Root maxW={'180px'} overflow="hidden">

    <Image
      src={thumbnail}
      alt="Green double couch with wooden legs"
    />

    <Card.Body gap="2">
      <Card.Title lineClamp="3">
        {yearStart && <Badge colorPalette={getRandomColor()}>{yearStart}</Badge>}
        {season && <Badge colorPalette={getRandomColor()}>{season}</Badge>}
      </Card.Title>
      <Card.Title lineClamp="3">{title}</Card.Title>
      {type && <Card.Description>{type}</Card.Description>}
    </Card.Body>

    {actions && <Card.Footer>
      {actions}
    </Card.Footer>}

  </Card.Root>)
}

export default Component;