const getUserSync = (id) => {
          let nama = '';
          if(id === 1){
              nama = 'jihyo';
          }else {
              nama = 'dahyun';
          }
          return { id: id, nama: nama}
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'hallo once, kami twice';
console.log(halo);

// penggunaan syncronous berfungsi menjalankan fungsi 
// atau tugas secara blocking(saling tunggu menunggu)