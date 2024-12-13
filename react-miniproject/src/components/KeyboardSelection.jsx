import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const KeyboardSelection = ({ selected, setSelected }) => {
  return (
    <FormControl fullWidth className="keyboard-selection">
      <InputLabel className="keyboard-selection-label">Keyboard</InputLabel>
      <Select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="keyboard-selection-select"
      >
        <MenuItem value="alt" className="keyboard-selection-item">ALT</MenuItem>
        <MenuItem value="control" className="keyboard-selection-item">CTRL</MenuItem>
      </Select>
    </FormControl>
  );
};

export default KeyboardSelection;
