import '@testing-library/jest-dom'
import {  fireEvent, logRoles, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewCounter from '@/components/new-counter/newCounter';


describe('New Counter component', () => {
    it('render Counter correctly',async () => {
        const { findByText,getByRole, container ,getByText} = render(<NewCounter count={1}  />)
        const heading = getByRole('heading')
        expect(heading).toHaveTextContent('New Counter')
    })

    it('handler are called',async () => {
        userEvent.setup()
        const decrementHandler=jest.fn()
        const incrementHandler=jest.fn()

        const { findByText,getByRole, container ,getByText} = render(<NewCounter count={1}
            handleDecrement={decrementHandler}
            handleIncrement={incrementHandler}
            />)
            const incBtn = getByText('Increment')
        const decBtn = getByText('Decrement')

     await userEvent.dblClick(incBtn) // all user events are async
      await userEvent.click(decBtn)

      logRoles(container)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
        expect(incrementHandler).toHaveBeenCalledTimes(2) //note we are checkig mock functiin are called or not not button are clicked 
    })
})

