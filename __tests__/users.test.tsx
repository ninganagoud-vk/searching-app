import '@testing-library/jest-dom'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import Users from '@/components/users/users'


// // Mocking fetch globally
// global.fetch=jest.fn(()=>Promise.resolve({
//   json:()=>Promise.resolve([{ name: 'John Doe' }, { name: 'Jane Doe' }])
// }))

// describe('Loader', () => {
//   it('render users component ', () => {
//     const { getByText } = render(<Users />);
    
//     const users=getByText('Users')
//     expect(users).toBeInTheDocument()
//   })

//   it('check nested text in component ', () => {
//     const { getByText } = render(<Users />);
    
//     const parent=getByText('parent')
//     const child=within(parent).getByText('child')
//         expect(child).toHaveTextContent('child')
//   })


//   it('check fetch api working in users component ', async() => {
//       render(<Users />);

//     await waitFor(()=>expect(screen.getByText('John Doe')).toBeInTheDocument())
//   })


  
// })

// describe('Mocking with msw package', () => {
// it('render list of users by mocking with  msw  ',async () => {
//   const { getAllByRole } = render(<Users />);

//  await waitFor(()=>expect(getAllByRole('listitem')).toHaveLength(3))
  
// })
// })