document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    generatePDF();
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const firstName = document.querySelector('input[name="FirstName"]')?.value || '';
    const surname = document.querySelector('input[name="Sirname"]')?.value || '';
    const mobileOrEmail = document.querySelector('input[name="mobile/email"]')?.value || '';
    const password = document.querySelector('input[name="password"]')?.value || '';
    const dateOfBirth = document.querySelector('input[name="date"]')?.value || '';
    const monthOfBirth = document.querySelector('input[name="month"]')?.value || '';
    const yearOfBirth = document.querySelector('input[list="Year"]')?.value || '';
    const gender = document.querySelector('input[name="gender"]:checked')?.value ||
    document.querySelector('input[name="gender2"]:checked')?.value ||
    document.querySelector('input[name="gender3"]:checked')?.value || 'Not specified';

    doc.text('First Name: ' + firstName, 10, 10);
    doc.text('Surname: ' + surname, 10, 20);
    doc.text('Mobile or Email: ' + mobileOrEmail, 10, 30);
    doc.text('Password: ' + password, 10, 40);
    doc.text('Date of Birth: ' + dateOfBirth + ' ' + monthOfBirth + ' ' + yearOfBirth, 10, 50);
    doc.text('Gender: ' + gender, 10, 60);

    doc.save('form.pdf');
}