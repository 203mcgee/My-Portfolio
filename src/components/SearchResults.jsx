
import React from 'react';
import { Result } from './Result';

export const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => (
        <Result key={result.id || result.name} result={result} />
      ))}
    </div>
  );
};