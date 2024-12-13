import { Link } from "react-router-dom";

export default function About() {
  // Array of team members
  const teamMembers = [
    {
      id: 1,
      name: "Ron Zildjian Veran",
      position: "Designer",
      image:
        "https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/342737728_2257907631047500_8777614817986051821_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFGLGcSbokwQpwA8acB2RcIj7H7vTrjFG-Psfu9OuMUbz3xQPTdw1M3wVvZxPY4k9_JVSzvog4LJVDeqM0N7kjM&_nc_ohc=H9dGMX_V34UQ7kNvgEjBoGv&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=Ap0uk7d9cdecSm7PuEnyy0r&oh=00_AYB9v8vNazhi2MmkPYUcHcie4ZaLmO_OIfbdSaid5dxkLA&oe=6760DA45",
      location: "Manila, Philippines",
      birthDate: "February 10, 1990",
      email: "ron.zildian.veran@example.com",
      skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
      about:
        "Ron Zildjian Veran is a passionate designer with a keen eye for detail and a love for crafting seamless user experiences. With a strong foundation in both web design and development, he strives to blend creativity with functionality. Ron is driven by the challenge of creating intuitive and visually appealing designs that make a lasting impact, always focused on delivering high-quality, user-centered solutions.",
    },

    {
      id: 2,
      name: "Alice Keys",
      position: "Graphic design",
      image:
        "https://images.stockcake.com/public/7/b/5/7b5a72a6-79f7-4fb1-aa8e-3ee4e124352e_medium/radiant-smiling-woman-stockcake.jpg",
      location: "Quezon City, Philippines",
      birthDate: "March 15, 1995",
      email: "alice.keys@example.com",
      skills: ["Photoshop", "Illustrator", "Figma", "InDesign"],
      about:
        "Alice is a passionate graphic designer with an eye for aesthetics and functionality. She has years of experience in creating visually compelling designs that meet both artistic and marketing objectives.",
    },
    {
      id: 3,
      name: "Bob Smith",
      position: "Owner",
      image:
        "https://www.electriccalifornia.com/cdn/shop/files/OR-SanJuanIslands-Final-387.jpg?v=1713976735",
      birthDate: "July 30, 1988",
      location: "Manila, Philippines",
      email: "bob.smith@example.com",
      skills: ["Business Development", "Marketing", "Brand Strategy"],
      about:
        "Bob is the founder and owner of our company. He has been in the business for over a decade, building and nurturing relationships with clients and guiding the company's vision and mission.",
    },
  ];

  return (
    <>
      <div className="mission-section">
        <img
          src="https://d1q3zw97enxzq2.cloudfront.net/images/K65_PLUS_WIRELESS_14_2.width-1000.format-webp.webp"
          alt=""
        />
        <h1>Mission</h1>
        <p>
          To craft high-quality, functional, and visually stunning keyboards
          that enhance the typing experience for everyone—from professionals to
          PC enthusiasts—while fostering creativity and individuality.
        </p>
      </div>
      <div className="vision-section">
        <img
          src="https://hhkeyboard.us/-/media/project/hhkeyboard/guide/custom-keyboard/hero_custom_keyboards_lg.jpg?mw=1440&hash=E705E6AE864231F5594DC0FAA2E6AFA1"
          alt=""
        />
        <h1>Vision</h1>
        <p>
          To become the leading brand in personalized and artisan keyboards,
          inspiring a global community to elevate their work and gaming setups
          with our innovative designs.
        </p>
      </div>

      <div className="employee-section">
        <h1>Meet the team</h1>
        {teamMembers.map((member) => (
          <div key={member.id} className={`employee${member.id}`}>
            <img src={member.image} alt={member.name} />
            <h1>{member.name}</h1>
            <h4>{member.position}</h4>
            <Link to={`/About/${member.id}`} state={{ member }}>
              <button type="button">Check Resume</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
