export interface SearchProps {
  onSearch: (query: string) => void;
  count: number;
  placeholder: string;
  title: string;
  searchButtonLabel: string;
}
