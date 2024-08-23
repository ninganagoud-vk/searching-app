import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loader from '@/components/loader'
import exp from 'constants'

describe('Loader', () => {
  it('renders the loader image with correct attributes', () => {
    const { getByRole } = render(<Loader />);
    
    const imageElement=getByRole('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src','/loader.jpg')
    expect(imageElement).toHaveAttribute('width','600')
  })
})