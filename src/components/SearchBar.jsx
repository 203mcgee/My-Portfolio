import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';

// https://www.youtube.com/watch?v=sWVgMcz8Q44
// https://github.com/CodeCompleteYT/react-search-bar/blob/main/src/components/SearchResultsList.jsx

export const SearchBar = ({setResults}) => {
    let { id } = useParams();
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        fetch("https://api.github.com/users/203mcgee/repos")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.id &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="flex items-center w-50  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-2.5 shadow-sm">
            <FaSearch className="text-gray-400 dark:text-gray-300 mr-2 text-lg shrink-0" />
            <input
                type="text"
                placeholder="Search for Project..."
                className="search-bar w-full bg-transparent border-none outline-none text-base text-gray-800 dark:text-gray-100 placeholder-gray-400"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
