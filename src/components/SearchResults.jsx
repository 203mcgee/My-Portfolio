
import React from 'react';
import { Result } from '../components/Result';

export const SearchResults = ({ results }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto mt-1 divide-y divide-gray-100">
      {results.map((result) => (
        <Result key={result.id || result.name} result={result} />
      ))}
    </div>
  );
};