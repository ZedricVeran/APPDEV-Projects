import React, { useState } from 'react';
import KeyboardSelection from './KeyboardSelection';
import KeycapSelection from './KeycapSelection';
import SwitchSelection from './SwitchSelection';
import PriceDisplay from './PriceDisplay';
import { Container, Grid2 } from '@mui/material';

export default function KeyboardBuilder() {
  const [keyboard, setKeyboard] = useState('alt');
  const [keycap, setKeycap] = useState('dcx');
  const [switchType, setSwitchType] = useState('cherry_mx_brown');

  const images = {
    alt: {
      dcx: 'https://i.imgur.com/f5puthI.png',
      mt3: 'https://i.imgur.com/OXBxnra.png',
      skylight: 'https://i.imgur.com/hEJD0a3.png',
      artifact: 'https://i.imgur.com/HsX5Xa0.png',
    },
    control: {
      dcx: 'https://i.imgur.com/qrfkOOT.png',
      mt3: 'https://i.imgur.com/PRaEL5s.png',
      skylight: 'https://i.imgur.com/BRMY9rS.png',
      artifact: 'https://i.imgur.com/fNvy133.png',
    },
  };

  const imageSrc = images[keyboard]?.[keycap] || 'https://via.placeholder.com/650x350';

  return (
    <Container className="container">
      <h1 className="keyboard-builder-header">Keyboard Builder</h1>
      <Grid2 container spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Left side: Image display */}
        <Grid2 item xs={12} md={6}>
          <div className="keyboard-image">
            <img
              src={imageSrc}
              alt="Keyboard"
              style={{
                width: '100%',
                maxWidth: '550px',  // Limit image size
                height: 'auto',
                margin: '0 auto',   // Center the image
                display: 'block',    // Make sure the image is block-level
              }}
            />
          </div>
        </Grid2>

        {/* Right side: Selections */}
        <Grid2 item xs={12} md={6}>
          <div className="selections">
            <KeyboardSelection selected={keyboard} setSelected={setKeyboard} />
            <KeycapSelection selected={keycap} setSelected={setKeycap} />
            <SwitchSelection selected={switchType} setSelected={setSwitchType} />
            <button className="keyboard-builder-button">Add to cart</button>
          </div>
        </Grid2>
      </Grid2>

      {/* Price Display */}
      <div className="price-display">
        <PriceDisplay keyboard={keyboard} keycap={keycap} switchType={switchType} />
      </div>
    </Container>
  );
}
