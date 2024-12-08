import React, { useState } from 'react';
// import { createAvatar } from '@dicebear/avatars';
// import * as style from '@dicebear/avatars-male-sprites';

import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { WithRouterProps } from '@/hocs/withRouter';
import { Bind } from './container';

const Component: React.FC<Bind & WithRouterProps> = ({ }) => {
  const [seed, setSeed] = useState('random-seed'); // La "seed" determina il design dell'avatar.

  // Genera l'avatar SVG
  const avatar = createAvatar(avataaars, {
    seed: seed, // La seed è usata per generare un avatar unico.
    // backgroundColor: '#f0f0f0', // Colore di sfondo.
    radius: 50, // Arrotondamento dei bordi (valore 0-50).
    size: 600, // Dimensioni SVG.
    accessories: [],
    
  });

  // Funzione per generare una nuova seed casuale
  const generateRandomSeed = () => {
    const randomSeed = Math.random().toString(36).substring(2, 15);
    setSeed(randomSeed);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div dangerouslySetInnerHTML={{ __html: avatar.toString() }} />
      <button onClick={generateRandomSeed} style={{ marginTop: '10px' }}>
        Generate New Avatar
      </button>
    </div>
  );
};

export default Component;
