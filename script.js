// Function to handle the "Yes" button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide the current section
    document.getElementById('startPage').style.display = 'none';

    // Show the next section
    document.getElementById('questionPage').style.display = 'block';
});

// Function to handle teleportation
function teleport(destination) {
    // Hide the current section
    document.getElementById('questionPage').style.display = 'none';

    // Show the specified destination section
    document.getElementById(destination).style.display = 'block';
}

// Function to handle the form submission and show the thank you page
function submitResponse(response) {
    // Log responses to the console (replace with actual server submission)
    console.log('User selected:', response);

    if (response === 'Other') {
        const otherResponse = document.getElementById('otherResponse').value;
        console.log('Other response:', otherResponse);
    }

    // Hide the current section
    document.getElementById('messageContainer').style.display = 'none';

    // Show the question page
    document.getElementById('questionPage').style.display = 'block';
}

// Function to handle the thank you page
function showThankYou() {
    // Hide the current section
    document.getElementById('questionPage').style.display = 'none';

    // Show the thank you page
    document.getElementById('thankYouPage').style.display = 'block';
}
