import './App.css';
import AutoComplete from './components/AutoComplete';

function App() {
	return (
		<div>
			<h1> Autocomplete / Typeahead</h1>
			<AutoComplete
				placeholder={'Enter Recipe'}
				// fetchSuggestions={fetchSuggestions}
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

