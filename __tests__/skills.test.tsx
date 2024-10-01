import '@testing-library/jest-dom'
import { fireEvent, getAllByRole, getByPlaceholderText, render, screen } from '@testing-library/react'
import Skills from '@/components/skills/skills';


describe('skills',()=>{
    const skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
      ]

    it('load skills',()=>{
     const {getByRole,getAllByRole}= render(<Skills skills={skills}/>)
const listItem=getByRole('list')
expect(listItem).toBeInTheDocument()

const listElements=getAllByRole('listitem')
expect(listElements).toHaveLength(skills.length)

    })

})