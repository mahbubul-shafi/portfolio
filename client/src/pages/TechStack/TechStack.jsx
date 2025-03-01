import './TechStack.css'
import {TechstackList} from '../../utils/TechstackList'
import {Skill} from '../../components/Skill/Skill'
export const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
        <h2>Technologies Stack</h2>
        <div className="teckstack-row">
          {TechstackList.map((tech)=>(
            <Skill name={tech.name} icon={tech.icon}/>
          ))}
        </div>
    </div>
  )
}
