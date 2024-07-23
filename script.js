// Kode POP-UP navigation
const openPopupBtn = document.getElementById('openPopupBtn');
const popupBackground = document.getElementById('popupBackground');
const popupContent = document.getElementById('popupContent');
const closePopupBtn = document.getElementById('closePopupBtn');

openPopupBtn.addEventListener('click', () => {
  popupBackground.style.display = 'block';
  popupContent.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
  popupBackground.style.display = 'none';
  popupContent.style.display = 'none';
});

// Input Nama puzzle
// Kode JavaScript input nama
const openPopupBtnnama1 = document.getElementById('openPopupBtn-nama1');
const popupBackgroundnama1 = document.getElementById('popupBackground-nama1');
const popupContentnama1 = document.getElementById('popupContent-nama1');
const nameInputplayer1 = document.getElementById('nameInput-player1');
const submitNameBtngame1 = document.getElementById('submitNameBtn-game1');
const closePopupBtnnama1 = document.getElementById('closePopupBtn-nama1');

openPopupBtnnama1.addEventListener('click', () => {
  popupBackgroundnama1.style.display = 'block';
  popupContentnama1.style.display = 'block';
});

submitNameBtngame1.addEventListener('click', () => {
  const nameplayer1 = nameInputplayer1.value.trim();
  if (nameplayer1 !== '') {
    localStorage.setItem('user_name1', nameplayer1);
    closePopup1();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama1.addEventListener('click', () => {
  closePopup1();
});

function closePopup1() {
  nameInputplayer1.value = '';
  popupBackgroundnama1.style.display = 'none';
  popupContentnama1.style.display = 'none';
}

// Input Nama fin
// Kode JavaScript input nama
const openPopupBtnnama = document.getElementById('openPopupBtn-nama');
const popupBackgroundnama = document.getElementById('popupBackground-nama');
const popupContentnama = document.getElementById('popupContent-nama');
const nameInputplayer = document.getElementById('nameInput-player');
const submitNameBtngame = document.getElementById('submitNameBtn-game');
const closePopupBtnnama = document.getElementById('closePopupBtn-nama');

openPopupBtnnama.addEventListener('click', () => {
  popupBackgroundnama.style.display = 'block';
  popupContentnama.style.display = 'block';
});

submitNameBtngame.addEventListener('click', () => {
  const nameplayer = nameInputplayer.value.trim();
  if (nameplayer !== '') {
    localStorage.setItem('user_name', nameplayer);
    closePopup();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama.addEventListener('click', () => {
  closePopup();
});

function closePopup() {
  nameInputplayer.value = '';
  popupBackgroundnama.style.display = 'none';
  popupContentnama.style.display = 'none';
}