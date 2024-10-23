document.getElementById('certificateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const currentDate = new Date().toLocaleDateString();

    document.getElementById('certName').innerText = name;
    document.getElementById('certDate').innerText = currentDate;
    document.getElementById('certificate').style.display = 'block';
});
document.getElementById('downloadBtn').addEventListener('click', function() {
    html2canvas(document.querySelector("#certificate")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});