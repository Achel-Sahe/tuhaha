  const scriptURL = 'https://script.google.com/macros/s/AKfycbz3E6G2zE5Kkvp5sg1avAQJ3VahxUEUTmXmjvjIjvQHovvcxtpdVnvw2jxSq_1sCtei/exec'
  const form = document.forms['Masukan-negeri-tuhaha']
  const btnKirim = document.querySelector('.btn-kirim')
  const btnLoading = document.querySelector('.btn-loading')
  const alert = document.querySelector('.alert')

    form.addEventListener('submit', e => {
        e.preventDefault()
        btnLoading.classList.toggle('hidden');
        btnKirim.classList.toggle('hidden');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            btnLoading.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');
            alert.classList.toggle('hidden');
            form.reset();
            console.log('Success!', response)
        })
      .catch(error => console.error('Error!', error.message))
    })
  
const btnKontak = document.querySelector('#btnKontak');
btnKontak.addEventListener("click", function () {alert.classList.toggle('hidden');})