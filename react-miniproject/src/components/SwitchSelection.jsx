import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SwitchSelection = ({ selected, setSelected }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Switch Type</InputLabel>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <MenuItem value="cherry_mx_brown">Cherry MX Brown</MenuItem>
        <MenuItem value="cherry_mx_red">Cherry MX Red</MenuItem>
        <MenuItem value="cherry_mx_blue">Cherry MX Blue</MenuItem>
        <MenuItem value="gateron_yellow">Gateron Yellow</MenuItem>
        <MenuItem value="kailh_box_white">Kailh Box White</MenuItem>
        <MenuItem value="holy_panda">Holy Panda</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SwitchSelection;
