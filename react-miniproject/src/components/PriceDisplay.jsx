import React from 'react';

const PriceDisplay = ({ keyboard, keycap, switchType }) => {
  const calculatePrice = () => {
    let price = 100; // Base price

    // Keyboard prices
    if (keyboard === 'alt') price += 120;
    if (keyboard === 'control') price += 150;

    // Keycap prices
    if (keycap === 'dcx') price += 50;
    if (keycap === 'mt3') price += 60;
    if (keycap === 'skylight') price += 40;
    if (keycap === 'artifact') price += 45;

    // Switch prices
    if (switchType === 'cherry_mx_brown') price += 30;
    if (switchType === 'cherry_mx_red') price += 35;
    if (switchType === 'cherry_mx_blue') price += 30;
    if (switchType === 'gateron_yellow') price += 25;
    if (switchType === 'kailh_box_white') price += 28;
    if (switchType === 'holy_panda') price += 50;

    return price;
  };

  return (
    <div>
      <h3>Total Price: ${calculatePrice()}</h3>
    </div>
  );
};

export default PriceDisplay;
