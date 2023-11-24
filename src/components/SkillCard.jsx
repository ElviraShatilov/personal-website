const SkillCard = ({ imgURL, name, techItems }) => {
  return (
    <div className="item">
      <img src={imgURL} alt="Skill image" />
      <h3>{name}</h3>
      <ul className="tech-stack">
        {techItems.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillCard;
