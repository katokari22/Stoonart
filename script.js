var backgroundImageIndex = 0; // Current index of the background image

function toggleBackground() {
    console.log("Button clicked!");
    
    var container = document.querySelector('.container');
    console.log("Container:", container);

    backgroundImageIndex = (backgroundImageIndex + 1) % 2; // Toggle between 0 and 1

    // Change background image based on the index
    if (backgroundImageIndex === 0) {
        console.log("Setting background to background.jpg");
        container.style.backgroundImage = "url('Background1.jpg')";
    } else {
        console.log("Setting background to background2.jpg");
        container.style.backgroundImage = "url('Background3.jpg')";
    }
}
// Select the dropdown button
var dropdownButton = document.querySelector('.dropdown');


// Add a click event listener to the button
// Select the nav button
// Select the 'Products' nav button
var navButton = document.querySelector('.dropdown a');

// Add a click event listener to the nav button
navButton.addEventListener('click', function(event) {
    // Prevent the default action
    event.preventDefault();

    // Check if viewport width is 768px or less
    if (window.innerWidth <= 768) {
        // Select the dropdown content
        var dropdownContent = document.querySelector('.dropdown-content');

        // Toggle the display property of the dropdown content
        if (dropdownContent.style.display === 'none') {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    }
    // Add a click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if viewport width is 768px or less
        if (window.innerWidth <= 768) {
            // Select the dropdown content
            var dropdownContent = document.querySelector('.dropdown-content');
    
            // If the clicked element is not the nav button or within the dropdown content, hide the dropdown content
            if (!navButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        }
    });
});
