import { SuggestionsListProps } from '../types';
import './styles.css';

export const SuggestionsList = ({
  suggestions,
  highlight,
  dataKey,
  onSuggestionClick,
  focusedIndex,
  setFocusedIndex,
}: SuggestionsListProps) => {
  const getHighlightedText = (suggestion: string, highlight: string) => {
    const startIndex = suggestion
      .toLocaleLowerCase()
      .indexOf(highlight.toLocaleLowerCase());
    if (startIndex === -1) return;
    return (
      <>
        {suggestion.slice(0, startIndex)}
        <strong>
          {suggestion.slice(startIndex, startIndex + highlight.length)}
        </strong>
        {suggestion.slice(startIndex + highlight.length)}
      </>
    );
  };

  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currentSuggestion =
          (suggestion as { [key: string]: unknown })[dataKey] ?? '';
        return (
          <li
            key={index}
            onClick={() =>
              onSuggestionClick(suggestion as { [key: string]: unknown })
            }
            className="suggestions-item"
            aria-selected={index === focusedIndex}
            onMouseEnter={() => setFocusedIndex(index)}
            style={{
              background: index === focusedIndex ? '#e0e0e0' : undefined,
              cursor: 'pointer',
            }}
          >
            {typeof currentSuggestion === 'string'
              ? getHighlightedText(currentSuggestion, highlight)
              : (currentSuggestion as string)}
          </li>
        );
      })}
    </>
  );
};
