
  
  interface SkillsType{
    skills:string[]
  }

  const Skills = ({skills}:SkillsType) => <ul className="flex justify-center align-center mt-10">
    {skills?.map(item=>
        <li className="flex justify-center align-center mt-10  " key={item}>
           {item}
        </li>
    )}
    </ul>

export default Skills
  