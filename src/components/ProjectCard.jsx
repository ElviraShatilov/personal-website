import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />

          <div className="proj-txtx">
            {/* <h3>{title}</h3> */}
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
