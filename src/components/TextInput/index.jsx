import './styles.css';

export const TextInput = ({ searchValue, handleSearch }) => {
  return (
    <input className="text-input" onChange={handleSearch} value={searchValue} type="search" placeholder="Type Your Search" />
  );
};