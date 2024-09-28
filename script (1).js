document.getElementById('runButton').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value;
    const outputElement = document.getElementById('output');

    try {
        const result = eval(code); // WARNING: eval can be dangerous!
        outputElement.textContent = result !== undefined ? result : 'No output';
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
});
