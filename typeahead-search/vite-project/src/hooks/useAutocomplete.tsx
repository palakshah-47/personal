import { useState, useRef, useEffect } from 'react';
import { useDebounce } from './useDebounce';

type UseAutoCompleteOptions = {
	debounceMs?: number;
	minChars?: number;
	maxCacheSize?: number;
};

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

export function useAutocomplete({
	debounceMs = 300,
	minChars = 2,
	maxCacheSize = 50,
}: UseAutoCompleteOptions = {}) {
	const [inputValue, setInputValue] = useState('');
	const [suggestions, setSuggestions] = useState<{ [key: string]: unknown }[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [activeIndex, setActiveIndex] = useState(-1);

	const cacheRef = useRef<Map<string, { [key: string]: unknown }[]>>(new Map());
	
	const abortControllerRef = useRef<AbortController | null>(null);

	const debouncedQuery = useDebounce(inputValue, debounceMs);

	useEffect(() => {
		if (debouncedQuery.length < minChars) {
			setSuggestions([]);
			setActiveIndex(-1);
			return;
		}

		if (cacheRef.current.has(debouncedQuery)) {
			setSuggestions(cacheRef.current.get(debouncedQuery)!);
			return;
		}

		abortControllerRef.current?.abort();
		abortControllerRef.current = new AbortController();

		const fetchData = async () => {
			try {
				setLoading(true);
				setError('');
				const response = await fetch(
					'https://dummyjson.com/recipes/search?q=' + encodeURIComponent(debouncedQuery),
					{
						signal: abortControllerRef.current?.signal,
					},
				);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setSuggestions(data?.recipes);
				if (cacheRef.current.size >= maxCacheSize) {
					const firstKey = cacheRef.current.keys().next().value;
					if (firstKey) cacheRef.current.delete(firstKey);
				}
				cacheRef.current.set(debouncedQuery, data?.recipes);
			} catch (error: any) {
				if (error.name === 'AbortError') {
					return;
				}
				const data = staticData.filter((item) => item.includes(debouncedQuery));
				setSuggestions(data);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [debouncedQuery, minChars, maxCacheSize]);

	return {
		inputValue,
		setInputValue,
		suggestions,
		setSuggestions,
		loading,
		error,
		activeIndex,
		setActiveIndex,
	};
}
