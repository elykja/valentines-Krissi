// Function to handle the "Yes" button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide the current section
    document.getElementById('startPage').style.display = 'none';

    // Show the next section
    document.getElementById('messageContainer').style.display = 'block';
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

    if (response === 'Single') {
        // Hide the current section
        document.getElementById('messageContainer').style.display = 'none';
        
        // Show the Single page
        document.getElementById('singlePage').style.display = 'block';
    } else if (response === 'Taken' || response === 'Other') {
        // Hide the current section
        document.getElementById('messageContainer').style.display = 'none';
        
        // Show the Taken or Others page
        document.getElementById('takenOthersPage').style.display = 'block';
    }
}

// Function to handle the Hehe ^-^ button click
function heheButtonClick() {
    // Hide the current section
    document.getElementById('takenOthersPage').style.display = 'none';

    // Show the Hehe ^-^ page
    document.getElementById('hehePage').style.display = 'block';
}

// Function to handle the Jeaa ^^ and Naa ^^ buttons
function jeaaNaaButtonClick(destination) {
    // Hide the current section
    document.getElementById('hehePage').style.display = 'none';

    // Show the specified destination section
    document.getElementById(destination).style.display = 'block';
}

// Existing code ...
