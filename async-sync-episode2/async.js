const getUser = (id, callback) => {
          let nama = '';
          let time = 0;
          if(id === 1){
            time = 3000;
          }else {
            time = 2000;
          }

          setTimeout(() => {
          if(id === 1){
            nama = 'jihyo';
          }else {
            nama = 'dahyun';
          }
          callback({ id: id, nama: nama});
          }, time)
 
}

const userSatu = getUser(1, (hasil) => {
          console.log(hasil);
});


const userDua = getUser(2, (hasil) =>{
          console.log(hasil);
});


const halo = 'hallo once, kami twice';
console.log(halo);

// penggunaan asyncronous berfungsi menjalankan fungsi 
// atau tugas secara non blocking (tanpa harus menunggu perintah/function yang lain. 
// langsung otomatis menjalankan perintah yg paling cepat).
// disini pembelajaran menggunakan callback 