import { FunctionComponent, ChangeEvent, useState, useEffect, useCallback } from 'react';
import { AutoCompleteProps } from '../types';
import './styles.css';
import { SuggestionsList } from './SuggestionsList';
import { useAutocomplete } from '../hooks/useAutocomplete';

const AutoComplete: FunctionComponent<AutoCompleteProps> = ({
	placeholder = '',
	customLoading = 'Loading...',
	onSelect = () => {},
	onBlur = () => {},
	onFocus = () => {},
	customStyles = {},
	dataKey = '',
}) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.value) setInputValue('');
		setInputValue(event.target.value);
	};

	const {
		inputValue,
		setInputValue,
		suggestions,
		setSuggestions,
		loading,
		error,
		activeIndex,
		setActiveIndex,
	} = useAutocomplete();

	const handleSuggestionClick = (suggestion: { [key: string]: unknown }) => {
		setInputValue(
			dataKey ? ((suggestion as { [key: string]: unknown })?.[dataKey] as string) : '',
		);
		onSelect(suggestion?.[dataKey] as unknown as string);
		setSuggestions([]);
		setActiveIndex(-1);
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
				if (activeIndex >= 0) {
					setInputValue(
						((suggestions[activeIndex] as unknown as { [key: string]: unknown })[
							dataKey
						] as string) ?? '',
					);
					handleSuggestionClick(
						suggestions[activeIndex] as unknown as { [key: string]: unknown },
					);
				}
				break;
			case 'ArrowUp':
				setActiveIndex((prevIndex) =>
					prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1,
				);
				break;
			case 'ArrowDown':
				setActiveIndex((prevIndex) =>
					prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1,
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
							focusedIndex={activeIndex}
							setFocusedIndex={setActiveIndex}
						/>
					</ul>
				</>
			)}
		</div>
	);
};

export default AutoComplete;
