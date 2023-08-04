const NamaSaya = "Adnan zainal"
const kelas = "XI PPLG 1"
const umur = '18'
let teman = 'Fahjri dan andika'

function PerkenalanKelas(){
    if(kelas == 'XI PPLG 1'){
        console.log('Sampean Pinter');
    } else{
        console.log('Anda Kurang pinter');
    }
    console.log(`Nama saya adalah ${NamaSaya} , dan saya berasal dari  ${kelas}`); 
}

function GeneretBiodata(){
    if (umur > 17 & 10){
        console.log('Anda Masih Kecil');
    }else if (umur > 30 ){
        console.log('Opo Mbuh Mau ');
    } else{
        console.log('anda Hebat');
    }
    console.log(`saya Berumur ${umur}`);
}


console.log(NamaSaya);
console.log(kelas);
console.log(teman);

GeneretBiodata()
PerkenalanKelas()
