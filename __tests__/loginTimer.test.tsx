import '@testing-library/jest-dom'
import { findByRole, fireEvent, getAllByRole, getByPlaceholderText, queryByRole, render, screen,logRoles } from '@testing-library/react'
import  { Logintimer } from '@/components/login/index';


describe('login',()=>{
    it('render login button with some delay',async()=>{
     const {findByRole,container}= render(<Logintimer />)
const btn=await findByRole('button',{
    name:'Logout',
},{
    timeout:3000
})

expect(btn).toBeInTheDocument()

    })

    

})

describe('Counter',()=>{
    it('render counter',async()=>{

        const {getByRole,container}= render(<Logintimer />)
        logRoles(container)

        const btn=getByRole('button',{
            name:'Increment'
        })
        expect(btn).toBeInTheDocument()

    })
    it('increment  counter',async()=>{
        const {getByRole,container}= render(<Logintimer />)
        const btn=getByRole('button',{
            name:'Increment'
        })
        fireEvent.click(btn)
        const ptag=getByRole('paragraph')
        logRoles(container)
        expect(ptag).toHaveTextContent('1')
    })
})