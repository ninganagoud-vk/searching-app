import React from 'react';
import Select from 'react-select';
import {ISearchBar} from '../../interfaces/recipe'


const SearchBar:React.FC<ISearchBar> = ({ handleOnBlur, selectedValue, searchValue, handleChange, handleSelect }) => {

    return (
        <form className="mx-auto flex w-full justify-center mt-4">
            <div>
                <Select
                    isMulti
                    name="colors"
                    isClearable={true}
                    onChange={handleSelect}
                    placeholder="Cousin Type"
                    value={selectedValue}
                    options={[{ value: 'American', label: 'American' },
                    { value: 'Asian', label: 'Asian' },
                    { value: 'British', label: 'British' },
                    { value: 'Caribbean', label: 'Caribbean' },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div className="flex mx-2 w-1/3">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" style={{
                        borderRadius: '4px',
                        border: '1px solid hsl(0, 0%, 80%)'
                    }} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Recipies..." required
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <button
  type="button"
  onClick={handleOnBlur}
  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  <svg
    className="w-4 h-4"
    aria-hidden="true"
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  </svg>
  <span className="sr-only">Search</span>
</button>
                </div>
            </div>
        </form>
    )
}
export default SearchBar