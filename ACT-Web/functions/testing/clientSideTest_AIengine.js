async function generateResponse(prompt) {
    const response = await fetch("http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/aiGen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            prompt
        })
    });

    const text = await response.text();
    return text;
}

generateResponse("how many vowels are in the word 'kevin'?").then(response => {
    console.log(response);
});
