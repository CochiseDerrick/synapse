import { useState } from "react";
import TextField from "@mui/material/TextField";
import './SearchBar.scss'
import ListNotice from "../ListNotice/ListNotice";

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [searchTerms, setSearchTerms] = useState<string[]>([])
  const [searchPlaceholder, setSearchPlaceholder] = useState<string>('Enter a search query')

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value)
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      setSearchTerms([...searchTerms, searchInput])
      setSearchInput('')
      setSearchPlaceholder('Refine your search')
    }
  };

  return (
    <div className="SearchBar">
      {searchTerms?.length ? (<div className="SearchBar-card"><h3>Queries</h3>{searchTerms.map((term) => <div className="SearchBar-terms">- {term}<hr /></div>)}</div>) : (<></>)}
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label={searchPlaceholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchInput}
      />
      {!!searchTerms.length && <ListNotice searchValue={searchValue} />}
    </div>
  );
}

export default SearchBar;