

function closeModal1() {
    const modal = document.querySelector('.modal-overlay-1');
            modal.classList.toggle('pdf-hide-1')
        }
function closeModal2() {
    const modal2 = document.querySelector('.modal-overlay-2');
            modal2.classList.toggle('pdf-hide-2')
        }
function closeModal3() {
    const modal3 = document.querySelector('.modal-overlay-3');
            modal3.classList.toggle('pdf-hide-3')
        }
function closeModal4() {
    const modal4 = document.querySelector('.modal-overlay-4');
            modal4.classList.toggle('pdf-hide-4')
        }
function closeModal5() {
    const modal5 = document.querySelector('.modal-overlay-5');
            modal5.classList.toggle('pdf-hide-5')
        }
        
        function downloadFile() {
            // Untuk download file sesungguhnya, ganti URL di bawah dengan path file PDF Anda
            const fileUrl = '/informasi publik/peraturan/RESUME VIDEO INSPIRASI.pdf'; // Ganti dengan URL file PDF yang sebenarnya
            
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = '/informasi publik/peraturan/RESUME VIDEO INSPIRASI.pdf';
            link.target = '_blank'; // Buka di tab baru jika download gagal
            
            // Tambahkan link ke DOM, klik, lalu hapus
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            
            // Show download notification
            const btn = document.querySelector('.download-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>✓</span> Mengunduh...';
            btn.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '#17a2b8';
            }, 2000);
        }
        
        
        // pdf hide and show 
        const buttonPdf1 = document.querySelector('.action-btn-1')
        const buttonPdf2 = document.querySelector('.action-btn-2')
        const buttonPdf3 = document.querySelector('.action-btn-3')
        const buttonPdf4 = document.querySelector('.action-btn-4')
        const buttonPdf5 = document.querySelector('.action-btn-5')
        const pdf1 = document.querySelector('.modal-overlay-1')
        const pdf2 = document.querySelector('.modal-overlay-2')
        const pdf3 = document.querySelector('.modal-overlay-3')
        const pdf4 = document.querySelector('.modal-overlay-4')
        const pdf5 = document.querySelector('.modal-overlay-5')
        

        buttonPdf1.addEventListener('click', function(){
            pdf1.classList.toggle('pdf-hide-1');
        })
        buttonPdf2.addEventListener('click', function(){
            pdf2.classList.toggle('pdf-hide-2');
        })
        buttonPdf3.addEventListener('click', function(){
            pdf3.classList.toggle('pdf-hide-3');
        })
        buttonPdf4.addEventListener('click', function(){
            pdf4.classList.toggle('pdf-hide-4');
        })
        buttonPdf5.addEventListener('click', function(){
            pdf5.classList.toggle('pdf-hide-5');
        })

        