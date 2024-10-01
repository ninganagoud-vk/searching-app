import '@testing-library/jest-dom'
import { getByText, render, screen } from '../test-utils'
import Loader from '@/components/loader'

describe('Wrapper component', () => {
  it('render wrapper text', () => {
    const { getByText } = render(<Loader />);
    
    const imageElement=getByText('Wrapper component')
    expect(imageElement).toBeInTheDocument()
  })
})