import '@testing-library/jest-dom'
import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react'
import SearchBar from '@/components/searchBar/search';

const mockHandleOnBlur=jest.fn()
const mockHandleSelect=jest.fn()
const mockHandleChange=jest.fn()


const mockProps = {
  searchValue: '',
  selectedValue: [],
  handleOnBlur: mockHandleOnBlur,
  handleSelect: mockHandleSelect,
  handleChange: mockHandleChange,

};

describe('SearchBar Component', () => {
  it('renders the search input field', () => {
    const {getByRole}=render(<SearchBar {...mockProps}/>)

    const inputElement=getByRole('searchbox')
expect(inputElement).toBeInTheDocument()
expect(inputElement).toHaveAttribute('type', 'search');
expect(inputElement).toHaveAttribute('name', 'search');
expect(inputElement).toHaveAttribute('id', 'search-dropdown');
expect(inputElement).toHaveClass('block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500');

fireEvent.change(inputElement,{target:{value:'chicken'}})
expect(mockHandleChange).toHaveBeenCalledTimes(1)
})

it('renders the select dropdown', () => {
  const {getByText}=render(<SearchBar {...mockProps}/>)
  const selectElement=getByText('Cuisine Type')
expect(selectElement).toBeInTheDocument()
})

it('calls handleSelect when an option is selected from the dropdown', () => {
  const {getByText}=render(<SearchBar {...mockProps}/>)
  const selectElement=getByText('Cuisine Type')
  fireEvent.keyDown(selectElement, { key: 'ArrowDown', code: 'ArrowDown' });
  fireEvent.click(screen.getByText('American'));
  expect(mockHandleSelect).toHaveBeenCalledTimes(1);
})


})