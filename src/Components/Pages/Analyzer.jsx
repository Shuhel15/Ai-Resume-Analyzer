import { useState } from "react";
import axios from "axios";



import { extractPDFText } from "../../Services/pdfParser";
import { extractDOCXText } from "../../Services/docxParser";
import Loading from "../UI/Loading";
import UploadCard from "../UI/UploadCard";
import ScoreCard from "../UI/ScoreCard";
import GrammarList from "../UI/GrammarList";
import SuggestionsList from "../UI/SuggestionsList";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Analyzer = () => {
  const [resumeText, setResumeText] = useState("");
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

const handleUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setFileName(file.name);

  const ext = file.name.split(".").pop().toLowerCase();

  let text = "";

  if (ext === "pdf") {
    text = await extractPDFText(file);
  } 
  else if (ext === "docx") {
    text = await extractDOCXText(file);
  } 
  else {
    alert("Only PDF or DOCX files are allowed");
    return;
  }

  setResumeText(text);
};

  const analyzeResume = async () => {
    if (!resumeText) return alert("Upload resume first");

    setLoading(true);

const prompt = `
You are an ATS resume analyzer.
You are an HR recruiter.

Return ONLY valid JSON. No explanation.

Format:

{
"score": number,
"grammar_errors": [],
"suggestions": []
}

Resume:
${resumeText.slice(0,2000)}
`;

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }]
        }
      );

      let text =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

      text = text.replace(/```json|```/g, "").trim();

      setResult(JSON.parse(text));
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        AI Resume <span>Analyzer</span>
      </h1>

      <UploadCard
        handleUpload={handleUpload}
        fileName={fileName}
        analyzeResume={analyzeResume}
        loading={loading}
      />

      {loading && <Loading />}

      {result && (
        <div className="result-section">
          <ScoreCard score={result.score} />
          <GrammarList errors={result.grammar_errors} />
          <SuggestionsList suggestions={result.suggestions} />
        </div>
      )}
    </div>
  );
};

export default Analyzer;