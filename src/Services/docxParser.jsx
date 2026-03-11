import mammoth from "mammoth";

export const extractDOCXText = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      try {
        const arrayBuffer = reader.result;

        const result = await mammoth.extractRawText({
          arrayBuffer: arrayBuffer,
        });

        resolve(result.value);
      } catch (error) {
        reject(error);
      }
    };

    reader.readAsArrayBuffer(file);
  });
};