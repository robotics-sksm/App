function compressAndResizeImage(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 256, 256);
      const base64String = canvas.toDataURL('image/jpeg', 0.85);
      callback(base64String);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
