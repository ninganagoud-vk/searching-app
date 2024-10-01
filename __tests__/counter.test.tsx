import '@testing-library/jest-dom'
import { findByText, fireEvent, getAllByRole, getByAltText, getByRole, getByText, logRoles, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '@/components/counter';
import exp from 'constants';


describe('Counter component', () => {
    it.skip('render count 1 after clicking the increment button',async () => {
        const { findByText,getByRole, container ,getByText} = render(<Counter />)
        const btnElement = getByRole('button', { name: 'Increment' })
          userEvent.click(btnElement)
        const ptag =await findByText('1')
        expect(ptag).toBeInTheDocument(); // Ensures that the element exists


    })
    it('render count 10 after clicking set button ',async () => {
        const { findByText,getByRole, container ,getByText} = render(<Counter />)
        const inputElement= getByRole('spinbutton')
        const btnElement = getByRole('button', { name: 'Set' })
    await userEvent.type(inputElement,'10')
    await userEvent.click(btnElement)
        const ptag =await findByText('10')
        // logRoles(container)
        expect(inputElement).toHaveValue(10)
        expect(ptag).toHaveTextContent('10')


    })

    it('elements focused in the right order on click of tab',async () => {
        const { getByRole, container } = render(<Counter />)
        const inputElement = getByRole('spinbutton')
        expect(inputElement).toHaveAttribute('name', 'count')
        logRoles(container)
        const btnElement = getByRole('button', { name: 'Increment' })
        const setbtnElement = getByRole('button', { name: 'Set' })


      await userEvent.tab()

expect(btnElement).toHaveFocus();
await userEvent.tab()

expect(inputElement).toHaveFocus();


await userEvent.tab()

expect(setbtnElement).toHaveFocus();

    
    })

    it('select dropdown value',async () => {
        const { getByRole, container } = render(<Counter />)
        const selectlement = getByRole('combobox')
       

logRoles(container)

await userEvent.selectOptions(selectlement,'A')
expect(selectlement).toHaveValue('A')

    })

    it('select dropdown multiple values',async () => {
        const { getByRole, container } = render(<Counter />)
        const selectlement = getByRole('listbox')
       

logRoles(container)

await userEvent.selectOptions(selectlement,['X'])
expect(selectlement).toHaveValue(['X'])

    })
})