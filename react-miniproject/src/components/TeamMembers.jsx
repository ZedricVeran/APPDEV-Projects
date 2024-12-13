import { useLocation } from 'react-router-dom';
import './TeamMembers.css';
export default function TeamMembers() {
  const location = useLocation();  // Destructure the state from useLocation
  const member = location.state.member; // Safely access member data


  return (
    <div className="team-banner">
      <h1>Meet Our Team!</h1>
      <div key={member.id} className="team-member">
        <div className="member-info">
          <img src={member.image} alt={`${member.name}'s profile`} />
          <h2>{member.name}</h2>
          <p>{member.position}</p>
        </div>
        <div className="member-details">
          <h3>Things to know:</h3>
          <ul>
            <li>BirthDate: {member.birthDate}</li>
            <li>Location: {member.location}</li>
            <li>Email: {member.email}</li>
          </ul>

          <div className="skills">
            <h3>Skills:</h3>
            <ul>
              {member.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="about-me">
            <h3>About Me:</h3>
            <p>{member.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
