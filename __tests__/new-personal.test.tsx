import '@testing-library/jest-dom'
import { getByRole, getByText, render, screen,logRoles, within, act } from '@testing-library/react'
import NewPersonalForm from '@/components/form/new-personal'
import userEvent from '@testing-library/user-event'

function renderComponent(){
  let users=[
    {name:'avi',email:'avi@gmail.com'},
    {name:'ravi',email:'ravi@gmail.com'},
    {name:'ram',email:'ram@gmail.com'}

  ]
  const { getByTestId } = render(<NewPersonalForm onUserAdd={()=>{}}/>);


  return {
    users
  }
}


describe('Form', () => {
  it.skip('renders form elements correctly', async() => {
    let argsList=[]
    const callback=(...args)=>{
      argsList.push(args)

    }



    const { getByRole,getAllByRole,getByDisplayValue,container } = render(<NewPersonalForm onUserAdd={callback}/>);


    const [nameElement,emailElement]= getAllByRole('textbox')
    expect(nameElement).toBeInTheDocument()
    expect(emailElement).toBeInTheDocument()
    const submitBtn =getByRole('button')
    expect(submitBtn).toBeInTheDocument()


    await userEvent.type(nameElement,'avi')
    await userEvent.type(emailElement,'vk@gmail.com')


    await userEvent.click(submitBtn)

    expect(argsList).toHaveLength(1)
    expect(argsList[0][0]).toEqual({name:'avi',email:'vk@gmail.com'})

    
    logRoles(container)


  })
  it('submit with right form data ', async() => {
   
const mockOnUserAdd=jest.fn()


    const { getByRole,getAllByRole,getByDisplayValue,container } = render(<NewPersonalForm onUserAdd={mockOnUserAdd}/>);


    const [nameElement,emailElement]= getAllByRole('textbox')
    expect(nameElement).toBeInTheDocument()
    expect(emailElement).toBeInTheDocument()
    const submitBtn =getByRole('button')
    expect(submitBtn).toBeInTheDocument()


    await userEvent.type(nameElement,'avi')
    await userEvent.type(emailElement,'vk@gmail.com')


    await userEvent.click(submitBtn)

   expect(mockOnUserAdd).toHaveBeenCalled()
   expect(mockOnUserAdd).toHaveBeenCalledWith({name:'avi',email:'vk@gmail.com'})

  })

  it('reset value on submit ', async() => {
   
    const mockOnUserAdd=jest.fn()
    
    
        const { getByRole,getAllByRole,getByDisplayValue,container } = render(<NewPersonalForm onUserAdd={mockOnUserAdd}/>);
    
    
        const [nameElement,emailElement]= getAllByRole('textbox')
        expect(nameElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        const submitBtn =getByRole('button')
        expect(submitBtn).toBeInTheDocument()
    
    
        await userEvent.type(nameElement,'avi')
        await userEvent.type(emailElement,'vk@gmail.com')
    
    
        await userEvent.click(submitBtn)
    
        act(()=>{
          expect(nameElement).toHaveValue('')
          expect(nameElement).toHaveValue('')
        })
     

    
      })

  it.skip('table rows logis ', async() => {
    const { getByTestId } = render(<NewPersonalForm onUserAdd={()=>{}}/>);

   const rows:any= within(getByTestId('2')).getAllByRole('row') //within get the elemnents inside with in the current data-testid 

    expect(rows).toHaveLength(2)
    
    
      })
      it.skip('lists rows logis ', async() => {
        const { getByTestId } = render(<NewPersonalForm onUserAdd={()=>{}}/>);

        let users=[
          {name:'avi',email:'avi@gmail.com'},
          {name:'ravi',email:'ravi@gmail.com'},
          {name:'ram',email:'ram@gmail.com'}

        ]
    
    
       for(let user of users){
        const name=screen.getByRole('cell',{name:user.name})
        const email=screen.getByRole('cell',{name:user.email})

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()

       }
        
        
          })
})