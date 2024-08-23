import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import RecipieCard from '@/components/recipeCard'

const mockHandleView=jest.fn()

const mockProps = {
  detailApi: 'https://api.example.com/recipe/1',
  cuisineType: 'Italian',
  calories: 500,
  recipeImg: 'https://example.com/recipe.jpg',
  label: 'Spaghetti Carbonara',
  source: 'Gordon Ramsay',
  handleView: mockHandleView,
};

describe('RecipieCard Component', () => {
  it('renders correctly with given props', () => {
    const { getByRole,getByText } = render(<RecipieCard {...mockProps}/>)
    
    const imageElement=getByRole('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('alt','recipe image')
  expect(getByText('Spaghetti Carbonara')).toBeInTheDocument()
  expect(getByText('Souce: Gordon Ramsay')).toBeInTheDocument()
  expect(imageElement).toHaveAttribute('src','https://example.com/recipe.jpg')
})

it('calls handleView function with the correct detailApi when the View recipe button is clicked', () => {
  const { getByText } = render(<RecipieCard {...mockProps}/>)

  const button=getByText('View recipe →');
  fireEvent.click(button)
expect(mockHandleView).toHaveBeenCalledWith('https://api.example.com/recipe/1')

  })

  it('should have the correct structure and classes', () => {
    const { getByRole } = render(<RecipieCard {...mockProps}/>)

    // Check the presence of the main container
    const card = getByRole('img').closest('div');
    expect(card).toHaveClass('flex ', 'p-1 ', 'align-center');

    // Check if button has correct classes
    const btn = getByRole('button').closest('div');
    expect(btn).toHaveClass('py-5 ', 'mt-2');
  });

})