import React from "react";

const UploadCard = ({ handleUpload, fileName, analyzeResume, loading }) => {
  return (
    <div className="card">
      <label className="upload-box">
        Upload Resume (PDF/DOCX)
        <input type="file" 
        accept=".pdf,.docx"
         onChange={handleUpload} 
         />
      </label>

      {fileName && <p className="file-name">Uploaded: {fileName}</p>}

      <button
        className="analyze-btn"
        onClick={analyzeResume}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
};

export default UploadCard;