async function runCrewAI() {
    try {
        const response = await fetch('https://runpythonscript-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to execute CrewAI');
        }

        console.log('CrewAI output:', data.output);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Use it
runCrewAI()
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Failed:', error));