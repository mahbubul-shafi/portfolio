import './ProfilePic.css'
import profile_pic from '../../assets/images/pro-pic.jpg'
export const ProfilePic = () => {
  return (
    <div className="profilePic">
        <img src={profile_pic} alt="" />
    </div>
  )
}
