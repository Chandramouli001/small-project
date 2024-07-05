function generateMailtoLink() {
    // Get the form values
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Display the mailto link in the outputText paragraph
    document.getElementById('outputText').innerText = mailtoLink;
    // Optionally, you can also set it as an actual link
    document.getElementById('outputText').innerHTML = `<a href="${mailtoLink}">${mailtoLink}</a>`;
}
function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("outputText").textContent;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText).then(() => {
        // Change button text to "Copied!"
        const copyButton = document.getElementById('copy-btn-1');
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 1500); // Reset button text after 1.5 seconds
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}