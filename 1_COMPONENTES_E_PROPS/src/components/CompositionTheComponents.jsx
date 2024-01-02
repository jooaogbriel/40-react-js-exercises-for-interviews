import { ComponentWith3Props } from "./ComponentWith3Props"
export const CompositionTheComponents = ({members}) => {
  return (
    <>
            {members.map((member, index)=> (
                <ComponentWith3Props 
                  key={index} 
                  name= {member.name}
                  age=  {member.age} 
                  job = {member.job}
                />
            ))}
    </>
  )
}

