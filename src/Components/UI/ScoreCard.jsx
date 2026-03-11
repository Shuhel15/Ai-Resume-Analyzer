const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <div
        className="circle"
        style={{
          background: `conic-gradient(#3a5bff ${score * 3.6}deg, #e6e6e6 0deg)`
        }}
      >
        <div className="inner-circle">
          <h2>{score}%</h2>
        </div>
      </div>

      <p className="score-label">ATS Score</p>
    </div>
  );
};

export default ScoreCard;