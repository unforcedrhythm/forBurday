document.getElementById('magic-button').addEventListener('click', function() {
    // Toggle a magical effect on the image
    const magicImage = document.getElementById('magic-image');
    
    if (magicImage.classList.contains('magical')) {
        // Remove magical effect
        magicImage.classList.remove('magical');
    } else {
        // Add magical effect
        magicImage.classList.add('magical');
    }
});
