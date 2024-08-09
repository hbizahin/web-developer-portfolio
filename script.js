function downloadCV() {
  const link = document.createElement("a");
  link.href = "My CV.pdf"; // Replace with the actual path to your PDF file
  link.download = "Hamza_Bin_Islam's CV.pdf"; // This will be the name of the downloaded file
  link.click();
}
function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
}