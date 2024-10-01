import '@testing-library/jest-dom'
import { act, getByText, render, screen } from '@testing-library/react'
import NewSearch from '@/components/newSearch/newSearch'
import userEvent from '@testing-library/user-event'

describe('Loader', () => {
  it('renders the loader image with correct attributes', () => {
    const { getByRole } = render(<NewSearch />);
    
    const imageElement=getByRole('heading')
    expect(imageElement).toBeInTheDocument()
  })

  it('onchange event testing',async () => {
    userEvent.setup()
    const { getByRole,getByText } = render(<NewSearch />);

    const input=getByRole('textbox')
    await act(async()=>{
        await userEvent.type(input,'avinash')
    })

    expect(getByText('avinash')).toBeInTheDocument()
  })
})