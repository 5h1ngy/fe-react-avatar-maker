import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { Result } from '@dicebear/core';
import { BsFiletypeSvg, BsFiletypePng, BsFiletypeHtml, BsFiletypeJson } from "react-icons/bs";

import { _parseKey } from '@/shared/utils';

import withContainer, { Bind } from "./container";

interface ComponentProps {
  avatar: Result;
}

const Component: React.FC<ComponentProps & Bind> = ({ state, avatar }) => {

  const downloadSVG = () => {
    const svg = avatar.toString(); // L'avatar come stringa SVG
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    // Creazione e clic automatico su un link per il download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'avatar.svg';
    link.click();
    URL.revokeObjectURL(url); // Rilascia l'URL
  };

  const downloadPNG = () => {
    const svg = avatar.toString(); // L'avatar come stringa SVG

    // Crea un'immagine
    const img = new Image();
    const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 500; // Dimensione desiderata
      canvas.height = 500;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        // Scarica il PNG
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = pngUrl;
            link.download = 'avatar.png';
            link.click();
            URL.revokeObjectURL(pngUrl);
          }
        }, 'image/png');
      }
    };
    img.src = url;
  };

  const downloadHTML = () => {
    const svg = avatar.toString(); // L'avatar come stringa SVG
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Avatar</title>
      </head>
      <body>
        ${svg}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'avatar.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadJSON = () => {
    const json = JSON.stringify(state, null, 2); // Esporta le opzioni selezionate
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'avatar.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return <Flex direction="column" gap="1rem" justify="center" align={'center'}>
    <Text textStyle="xl" fontWeight="bold">
      Download
    </Text>

    <Flex wrap={'wrap'} direction="row" gap="1rem" justify="center" align={'center'}>

      <IconButton
        aria-label="Search database"
        variant="surface"
        size={"lg"}
        onClick={downloadSVG}>
        <BsFiletypeSvg />
      </IconButton>

      <IconButton
        aria-label="Search database"
        variant="surface"
        size={"lg"}
        onClick={downloadPNG}>
        <BsFiletypePng />
      </IconButton>

      <IconButton
        aria-label="Search database"
        variant="surface"
        size={"lg"}
        onClick={downloadHTML}>
        <BsFiletypeHtml />
      </IconButton>

      <IconButton
        aria-label="Search database"
        variant="surface"
        size={"lg"}
        onClick={downloadJSON}>
        <BsFiletypeJson />
      </IconButton>

    </Flex>
  </Flex>
}
export default withContainer(Component);
