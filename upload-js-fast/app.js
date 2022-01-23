const d = document;

const $imgPrev = d.getElementById('img-preview');
const $imgUpload = d.getElementById('img-uploader');
const $card = d.querySelector('.card');
const $progress = d.getElementById('progress')

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/thouma/image/upload';

const CLOUDINARY_UPLOAD_PRESET = 'epwofrcx';

$imgUpload.addEventListener('change', async (e) => {
  const file = e.target.files[0];

  const formdata = new FormData();
  formdata.append('file', file);
  formdata.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const res = await axios.post(CLOUDINARY_URL, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    //* evento axios para capturar progress
    onUploadProgress(e) {
      const progress = ((e.loaded * 100) / e.total);
      $progress.setAttribute('value', progress);
    }
  });
  // console.log(res);

  //  cambio de dimensiones para contenedor de la img
  if (res.data.width > res.data.height) {
    $card.style.width = '30rem';
    $card.style.height = '25rem';
  }

  $imgPrev.src = `${res.data.url}`;//mostrar img

})