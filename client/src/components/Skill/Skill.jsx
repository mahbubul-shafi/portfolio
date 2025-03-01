import './Skill.css'
export const Skill = (props) => {
    const IconComponent = props.icon;
  return (
    <div className="skill">
        <p>{props.name}</p>
        <IconComponent size={30} color="#007bff"/>
    </div>
  )
}
