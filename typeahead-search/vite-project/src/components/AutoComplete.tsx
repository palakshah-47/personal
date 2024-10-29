import {
  FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { AutoCompleteProps } from '../types';
import './styles.css';
import { SuggestionsList } from './SuggestionsList';
const AutoComplete: FunctionComponent<AutoCompleteProps> = ({
  staticData,
  fetchSuggestions,
  placeholder = '',
  customLoading = 'Loading...',
  onSelect = () => {},
  onBlur = () => {},
  onFocus = () => {},
  customStyles = {},
  dataKey = '',
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<object[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) setInputValue('');
    setInputValue(event.target.value);
  };

  const debounce = (
    callback: (...args1: string[]) => unknown,
    delay: number
  ) => {
    let timeoutId: number;
    return (...args: string[]) => {
      if (timeoutId) console.log('immediately debounce called');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(...args);
        callback(...args);
      }, delay);
    };
  };

  // useEffect(() => {
  const getSuggestions = async (query: string) => {
    setError('');
    setLoading(true);
    try {
      const result = (await fetchSuggestions(query)) ?? [];
      if (Array.isArray(result)) {
        setSuggestions(result);
      } else {
        throw new Error('Invalid suggestions format');
      }
    } catch (error) {
      setError('Failed to fetch suggestions');
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Create a debounced version of fetchData
  const debouncedFetchData = useCallback(debounce(getSuggestions, 3000), []);

  // useEffect to call debounced function when query changes
  useEffect(() => {
    if (inputValue) {
      debouncedFetchData(inputValue);
    }
  }, [inputValue, debouncedFetchData]);

  const handleSuggestionClick = (suggestion: { [key: string]: unknown }) => {
    setInputValue(
      dataKey
        ? ((suggestion as { [key: string]: unknown })?.[dataKey] as string)
        : ''
    );
    onSelect(suggestion?.[dataKey] as unknown as string);
    setSuggestions([]);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Escape':
        setSuggestions([]);
        break;
      case 'Tab':
        setSuggestions([]);
        break;
      case 'Enter':
        if (focusedIndex >= 0) {
          setInputValue(
            ((suggestions[focusedIndex] as { [key: string]: unknown })[
              dataKey
            ] as string) ?? ''
          );
          handleSuggestionClick(
            suggestions[focusedIndex] as { [key: string]: unknown }
          );
        }
        break;
      case 'ArrowUp':
        setFocusedIndex((prevIndex) =>
          prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
        );
        break;
      case 'ArrowDown':
        setFocusedIndex((prevIndex) =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
        );
        break;

      default:
        break;
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        id="search"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
      />
      {(error || loading || suggestions.length > 0) && (
        <>
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">Loading...</div>}
          <ul className="suggestions-list">
            <SuggestionsList
              suggestions={suggestions}
              highlight={inputValue}
              dataKey={dataKey}
              onSuggestionClick={handleSuggestionClick}
              focusedIndex={focusedIndex}
              setFocusedIndex={setFocusedIndex}
            />
          </ul>
        </>
      )}
    </div>
  );
};

export default AutoComplete;
