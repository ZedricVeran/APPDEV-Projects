import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const KeycapSelection = ({ selected, setSelected }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Keycaps</InputLabel>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <MenuItem value="dcx">DCX</MenuItem>
        <MenuItem value="mt3">MT3</MenuItem>
        <MenuItem value="skylight">Skylight</MenuItem>
        <MenuItem value="artifact">Artifact</MenuItem>
      </Select>
    </FormControl>
  );
};

export default KeycapSelection;
