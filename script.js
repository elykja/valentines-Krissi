document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide the current section
    document.getElementById('startPage').style.display = 'none';

    // Show the next section
    document.getElementById('messageContainer').style.display = 'block';
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

    // Hide the current section
    document.getElementById('messageContainer').style.display = 'none';

    // Show the thank you page
    document.getElementById('thankYouPage').style.display = 'block';
}
