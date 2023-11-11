/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBar } from './styled';
import actions from '../../store/services/tests/actions';

function NavBar() {
  const { filter } = useSelector((state) => state.testsReduser);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    console.log(e.target.value);
    dispatch(actions.filterAction(e.target.value));
    // Додайте обробник пошуку тут, щоб обробити `searchTerm`
  };

  return (
    <SearchBar>
      <TextField
        placeholder='Filter tests'
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleChangeFilter}
      />
      <IconButton onClick={handleChangeFilter}>
        <SearchIcon />
      </IconButton>
    </SearchBar>
  );
}

export default NavBar;
