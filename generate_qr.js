const QRCode = require('qrcode');

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdGpi0iVAn9eo0CACdkAF7Q8Ab4anpEJbV1wTh8HphsicNBWw/viewform';
const fileName = 'เสนอชื่อศิษย์เก่าดีเด่น.png';

// สร้าง QR Code และบันทึกเป็นไฟล์
QRCode.toFile(fileName, url, {
  color: {
    dark: '#000000',  // สีของ QR Code
    light: '#FFFFFF' // สีพื้นหลัง
  },
  errorCorrectionLevel: 'H'
}, function (err) {
  if (err) throw err;
  console.log(`สร้าง QR Code สำเร็จ! ไฟล์ถูกบันทึกในชื่อ ${fileName}`);
});