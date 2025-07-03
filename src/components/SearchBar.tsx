import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="w-full max-w-xl mx-auto mb-10 relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg transition-all bg-white placeholder-gray-400"
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
        <SearchIcon fontSize="medium" />
      </span>
    </div>
  );
};

export default SearchBar;
