document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('messageContainer').style.display = 'block';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    // Optional: Hide the 'No' button on hover
    this.style.display = 'none';
});

function submitResponse(response) {
    // You can send the response to your server here
    // For simplicity, we'll log it to the console
    console.log('User selected:', response);

    // If 'Other' is selected, get the text from the textarea
    if (response === 'Other') {
        const otherResponse = document.getElementById('otherResponse').value;
        console.log('Other response:', otherResponse);
    }

    // You can send the responses to your server using AJAX/fetch or any other method.
    // For now, we're just logging them to the console.
}
