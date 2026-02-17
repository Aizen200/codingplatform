async function runCode(code, input) {
  try {
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "b473bc42e9mshcb64f88ab0fce18p1cf05ejsne183fbecfba9",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: 71, 
          source_code: code,
          stdin: input || "",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Judge0 API Error: ${errorText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Judge0 Execution Error:", error.message);
    throw error;
  }
}

module.exports = runCode;
