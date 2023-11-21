import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const CertificateCard = ({ title, source, skills }) => {
  return (
    <Col sm={6} md={4}>
      <div className="cert-bx">
        <div className="cert-txtx">
          <h3>{title}</h3>
          <p>from {source}</p>
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default CertificateCard;
