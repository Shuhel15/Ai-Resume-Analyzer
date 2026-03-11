import * as pdfjsLib from "pdfjs-dist";
import worker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

export const extractPDFText = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        text += content.items.map((item) => item.str).join(" ");
      }

      resolve(text);
    };

    reader.readAsArrayBuffer(file);
  });
};