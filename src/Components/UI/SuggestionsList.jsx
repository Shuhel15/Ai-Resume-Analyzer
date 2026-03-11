const SuggestionsList = ({ suggestions }) => {
  return (
    <div className="result-card">
      <h1>Sugge<span>stions</span></h1>

      <ul>
        {suggestions?.map((sug, i) => (
          <li key={i}>{sug.replace(/\*\*/g, "").trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;