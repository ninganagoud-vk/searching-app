import '@testing-library/jest-dom'
import { fireEvent, getAllByRole, getByPlaceholderText, queryByRole, render, screen } from '@testing-library/react'
import Login from '@/components/login/index';


describe('login',()=>{
   
    it('render login button',()=>{
     const {queryByRole}= render(<Login />)
const btn=queryByRole('button',{name:'Login'})
expect(btn).toBeInTheDocument()
expect(btn).toHaveTextContent('Login')

fireEvent.click(btn)
expect(btn).toHaveTextContent('Logout')

fireEvent.click(btn)
expect(btn).toHaveTextContent('Login')




    })

})