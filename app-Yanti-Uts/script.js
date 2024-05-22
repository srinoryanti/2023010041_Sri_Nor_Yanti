var dataMahasiswa = [];

function tampilNilai() {
  var nim = document.getElementById('nim').value;
  var nama = document.getElementById('nama').value;
  var nilai = parseInt(document.getElementById('nilai').value);
  var mataKuliah = document.getElementById('mataKuliah').value;
  if (nilai >= 85 && nilai <=100) {
    nilaiHuruf = 'A';
    indeksNilai = '4.00';
} else if (nilai >= 79 && nilai <=84) {
    nilaiHuruf = 'A-';
    indeksNilai = '3.67';
} else if (nilai >= 74 && nilai <=78) {
    nilaiHuruf = 'B+';
    indeksNilai = '3.33';
} else if (nilai >= 69 && nilai <=73) {
    nilaiHuruf = 'B';
    indeksNilai = '3.00';
} else if (nilai >= 64 && nilai <=68) {
    nilaiHuruf = 'B-';
    indeksNilai = '2.67';
} else if (nilai >= 59 && nilai <=63) {
    nilaiHuruf = 'C+';
    indeksNilai = '2.33';
} else if (nilai >= 54 && nilai <=58) {
    nilaiHuruf = 'C';
    indeksNilai = '2.00';
} else if (nilai >= 41 && nilai <=53) {
    nilaiHuruf = 'D';
    indeksNilai = '1.00';
} else if (nilai >=0 && nilai <=40) {
    nilaiHuruf = 'E';
    indeksNilai = '0.00';
} else if (nilai >=100 && nilai <=-1) {
  alert('tolong masukkan nilai dengan benar');
}
 
  var hasilRow = "<tr>" +
                 "<td>" + nim + "</td>" +
                 "<td>" + nama + "</td>" +
                 "<td>" + nilai + "</td>" +
                 "<td>" + mataKuliah + "</td>" +
                 "<td>" + nilaiHuruf + "</td>" +
                 "<td>" + indeksNilai + "</td>" +
                 "<td><button class='deleteButton' onclick='hapusData(this)'>Hapus</button></td>" +
                 "</tr>";

  var hasilBody = document.getElementById('hasilBody');
  hasilBody.innerHTML += hasilRow;
}

function resetFormTable() {
  document.getElementById('nilaiForm').reset();
}
function hapusData(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
