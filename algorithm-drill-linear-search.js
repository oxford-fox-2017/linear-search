//release 0
//PSEUDOCODE
//lakukan pengulangan untuk pengecekan kesamaan nilai yang di cari dengan nilai yang ada di dalam Array
//tampilkan posisi dalam array pada saat ditemukan kesamaan
//jika tidak ditemukan kesamaan tulis -1

function linierSearch(angkaPembanding,random_numbers){
	for(let i = 0;i<random_numbers.length;i++){
		if(random_numbers[i] == angkaPembanding){
			return i;
		}
	}
	return -1;
}

console.log(linierSearch(18,[6,29,18,2,72,19,18,10,37]))//2;
console.log(linierSearch(9,[6,29,18,2,72,19,18,10,37]))//-1;

//release 1 
//PSEUDOCODE
//buat varialbel tampung
//lakukan pengulangan untuk pengecekan kesamaan nilai yang di cari dengan nilai yang ada di dalam Array
//push posisi dalam array pada saat ditemukan kesamaan
//tampilkan tampung

function globalLinierSearch(hurufDicari,kata){
	let posisiAngkaDicari = [];
	for(let i = 0;i<kata.length;i++){
		if(kata[i] === hurufDicari){
			posisiAngkaDicari.push(i);
		}
	}
	return posisiAngkaDicari;
}

console.log(globalLinierSearch('a','banana'));
console.log(globalLinierSearch('c','cucakcabe'));
