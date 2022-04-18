// arrow function

const nama = 'jihyo';
const namaa = 'chaeyong';

const cetakNama = (nama) => {
  return `Hi, nama saya ${nama}`;
}

// pengisian nama menggunakan paramater function
console.log(cetakNama('nayeon'));
// end

// pengisian nama menggunakan variable ke function
console.log(cetakNama(nama));
//end

// arrow function 1 expresion / arrow function hanya 1 baris
const cetakNamaSimple = (nama) => `Hi, nama saya ${nama}`;
console.log(cetakNamaSimple(namaa));
//end