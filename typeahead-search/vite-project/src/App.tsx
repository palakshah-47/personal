import { useCallback } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';

const staticData = [
  'memo',
  'mem',
  'memory',
  'son',
  'sonika',
  'sonikaaaa',
  'sonika mahe',
  'pra',
  'pranay',
  'memoooo',
];

function App() {
  const fetchSuggestions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${inputValue}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data?.recipes;
    } catch {
      const data = staticData.filter((item) => item.includes(inputValue));
      return data;
    }
  };

  return (
    <div>
      <h1> Autocomplete / Typeahead</h1>
      <AutoComplete
        placeholder={'Enter Recipe'}
        fetchSuggestions={fetchSuggestions}
        dataKey={'name'}
        customLoading={<>Loading Recipes..</>}
        onSelect={(res: any) => console.log(res)}
        onBlur={(res: any) => {}}
        onFocus={(res: any) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;

