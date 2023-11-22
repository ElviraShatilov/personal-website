// eslint-disable-next-line react/prop-types
const CertificateCard = ({ title, source, date }) => {
  return (
    <div className="cert-bx">
      <h3>{title}</h3>
      <div className="cert-txtx">
        <p>{source} ({date})</p>
      </div>
    </div>
  );
};

export default CertificateCard;
