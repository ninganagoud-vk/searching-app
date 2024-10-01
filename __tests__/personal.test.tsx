import '@testing-library/jest-dom'
import { getByRole, getByText, render, screen } from '@testing-library/react'
import PersonalForm from '@/components/form/personal'

describe('Form', () => {
  it('renders form elements correctly', () => {
    const { getByText,getByRole,getByDisplayValue } = render(<PersonalForm />);
    
    const imageElement=getByRole('heading',{
        level:1,
        name:'Job Application Form'
    })
    expect(imageElement).toBeInTheDocument()
    const textElement=getByRole('textbox',{
        name:'Name' //it refers to label name in form 
    })
    expect(textElement).toBeInTheDocument()

    
    const selectElement=getByRole('combobox')
    expect(selectElement).toBeInTheDocument()

const inpouLele=getByDisplayValue('avinash')
expect(inpouLele).toBeInTheDocument()

    // expect(imageElement).toHaveAttribute('src','/loader.jpg')
    // expect(imageElement).toHaveAttribute('width','600')
  })
})