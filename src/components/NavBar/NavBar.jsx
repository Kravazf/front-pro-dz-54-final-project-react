/* eslint-disable no-console */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBar } from './styled';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Додайте обробник пошуку тут, щоб обробити `searchTerm`
    console.log('Пошук за терміном:', searchTerm);
  };

  return (
    <SearchBar>
      <TextField
        label="Пошук"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </SearchBar>
  );
}

export default NavBar;
