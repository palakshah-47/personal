export type AutoCompleteProps = {
  staticData?: string[];
  fetchSuggestions: (inputValue: string) => unknown;
  placeholder: string;
  customLoading?: string | JSX.Element;
  onSelect: (res: string) => void;
  onBlur: (res: unknown) => void;
  onFocus: (res: unknown) => void;
  //   onChange: (input: unknown) => void;
  customStyles?: object;
  dataKey?: string;
};

export type SuggestionsListProps = {
  suggestions: unknown[];
  onSuggestionClick: (suggestion: { [key: string]: unknown }) => void;
  onMouseEnter?: (suggestion: string) => void;
  onMouseLeave?: (suggestion: string) => void;
  selectedSuggestion?: string;
  customStyles?: object;
  dataKey: string;
  highlight: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
};
