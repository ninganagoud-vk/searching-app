import Link from 'next/link'
import Recipies from '../components/recipesList'
import PersonalForm from '@/components/form/personal'
import Skills from '@/components/skills/skills'
import Login from '@/components/login'
import Counter from '@/components/counter'
import WrapperComponent from '@/components/wrapper'
import Posts from '@/components/users/msw-posts'

export const metadata ={


}

export default function Home() {

  return (
    <WrapperComponent>
    <div style={{background:'gray', display:'flex',flexDirection:'column'}}>
      edd
      <Posts/>
      {/* <Login/>
      <Counter/>

      <Skills skills={[
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Python",
        "SQL",
        "Git",
        "Debugging",
        "Problem-Solving"
      ]}/> */}

      <PersonalForm/>
     {/* <Recipies/> */}

{/* <Link href={"/community"}>community</Link>
<Link href={"/meals/share"}>Share</Link>
<Link href={"/meals"}>Meals</Link> */}
     </div>
     </WrapperComponent>
  )
}