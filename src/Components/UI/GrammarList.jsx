const GrammarList = ({ errors }) => {
  return (
    <div className="result-card">
      <h1>Grammatical <span>Mistakes</span></h1>

      <ul>
        {errors?.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    </div>
  );
};

export default GrammarList;