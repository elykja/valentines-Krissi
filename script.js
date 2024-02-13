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

    // Hide the current section
    document.getElementById('messageContainer').style.display = 'none';

    // Show the appropriate page based on the response
    if (response === 'Single' || response === 'Taken' || response === 'Other') {
        document.getElementById('takenOthersPage').style.display = 'block';
    } else {
        // If you have specific handling for other responses, add it here
        console.log('Unhandled response:', response);
    }
}

// Function to handle the Hehe ^-^ button click
function heheButtonClick() {
    // Hide the current section
    document.getElementById('takenOthersPage').style.display = 'none';

    // Show the Hehe ^-^ page
    document.getElementById('hehePage').style.display = 'block';
}

// Function to handle the Humans button click
function humansButtonClick() {
    // Hide the current section
    document.getElementById('takenOthersPage').style.display = 'none';

    // Show the Humans page
    document.getElementById('humansPage').style.display = 'block';
}

// Function to handle the People button click
function peopleButtonClick() {
    // Hide the current section
    document.getElementById('takenOthersPage').style.display = 'none';

    // Show the People page
    document.getElementById('peoplePage').style.display = 'block';
}

// Function to handle the Jeaa ^^ and Naa ^^ buttons
function jeaaNaaButtonClick(destination) {
    // Hide the current section
    document.getElementById('hehePage').style.display = 'none';

    // Show the specified destination section
    document.getElementById(destination).style.display = 'block';
}
