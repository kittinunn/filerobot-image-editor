import '../../../projects/js/index';

const config = {
  filerobotUploadKey: '7cc1f659309c480cbc8a608dc6ba5f03',
  filerobotContainer: 'scaleflex-tests-v5a',
  hideCloudimageSwitcher: false,
  processWithCloudimage: false,
  cloudimageToken: 'demo'
};

const onComplete = function(newUrl) {
  const resultModal = document.getElementById('result-modal');
  const image = document.getElementById('result-image');
  const resultLink = document.getElementById('result-link');

  image.src = newUrl;
  resultLink.innerText = newUrl;
  resultModal.style.display = 'block';

  FilerobotImageEditor.close();
}

FilerobotImageEditor.init(config, onComplete);

const image = document.getElementById('image');
const buttonEdit = document.getElementById('edit-btn');
const openImageEditor = function() {
  FilerobotImageEditor.open(image.src);
};

image.onclick = openImageEditor;
buttonEdit.onclick = openImageEditor;