document.getElementById('sign-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;

    fetch('/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('signature-result').innerText = 'Signature: ' + data.signature;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('signature-result').innerText = 'Error signing the message.';
    });
});
