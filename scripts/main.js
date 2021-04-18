const drivers = [
  { id: 1, name: 'Lewis Hamilton', team: 'Mercedes', country: 'United Kingdom', image: 'driver_images/lewis_hamilton.png' },
  { id: 2, name: 'Max Verstappen', team: 'Red Bull', country: 'Netherlands', image: 'driver_images/max_verstappen.png' },
  { id: 3, name: 'Valterri Bottas', team: 'Mercedes', country: 'Finland', image: 'driver_images/valterri_bottas.png' },
  { id: 4, name: 'Lando Norris', team: 'McClaren', country: 'United Kingdom', image: 'driver_images/lando_norris.png' },
  { id: 5, name: 'Sergio Perez', team: 'Red Bull', country: 'Mexico', image: 'driver_images/sergio_perez.png' },
  { id: 6, name: 'Charles LeClerc', team: 'Ferrari', country: 'France', image: 'driver_images/charles_leclerc.png' },
  { id: 7, name: 'Daniel Ricciardo', team: 'McClaren', country: 'Australia', image: 'driver_images/daniel_ricciardo.png' },
  { id: 8, name: 'Carlos Sainz', team: 'Ferrari', country: 'Spain', image: 'driver_images/carlos_sainz.png' },
  { id: 9, name: 'Yuko Tsunoda', team: 'Alpha Tauri', country: 'Japan', image: 'driver_images/yuki_tsunoda.png' },
  { id: 10, name: 'Lance Stroll', team: 'Aston Martin', country: 'Canada', image: 'driver_images/lance_stroll.png' },
  { id: 11, name: 'Kimi Raikkonen', team: 'Alfa Romeo Racing', country: 'Finland', image: 'driver_images/kimi_raikkonen.png' },
  { id: 12, name: 'Antonio Giovinazzi', team: 'Alfa Romeo Racing', country: 'Italy', image: 'driver_images/antonio_giovinazzi.png' },
  { id: 13, name: 'Esteban Ocon', team: 'Alpine', country: 'France', image: 'driver_images/esteban_ocon.png' },
  { id: 14, name: 'George Russell', team: 'Williams', country: 'United Kingdom', image: 'driver_images/george_russell.png' },
  { id: 15, name: 'Sebastian Vettel', team: 'Aston Martin', country: 'Germany', image: 'driver_images/sebastian_vettel.png' },
  { id: 16, name: 'Mick Schumacher', team: 'Haas', country: 'Germany', image: 'driver_images/mick_schumacher.png' },
  { id: 17, name: 'Pierre Gasly', team: 'Alpha Tauri', country: 'France', image: 'driver_images/pierre_gasly.png' },
  { id: 18, name: 'Nicholas Latifi', team: 'Williams', country: 'Canada', image: 'driver_images/nicholas_latifi.png' },
  { id: 19, name: 'Fernando Alonso', team: 'Alpine', country: 'Spain', image: 'driver_images/ferando_alonso.png' },
  { id: 20, name: 'Nikita Mazepin', team: 'Haas', country: 'Russia', image: 'driver_images/nikita_mazepin.png' },
];

const top3_drivers = [
  { id: 1, name: 'Lewis Hamilton', team: 'Mercedes', country: 'United Kingdom', image: 'driver_images/lewis_hamilton.png' },
  { id: 2, name: 'Max Verstappen', team: 'Red Bull', country: 'Netherlands', image: 'driver_images/max_verstappen.png' },
  { id: 5, name: 'Sergio Perez', team: 'Red Bull', country: 'Mexico', image: 'driver_images/sergio_perez.png' },
];

const remaining_drivers = [
  { id: 3, name: 'Valterri Bottas', team: 'Mercedes', country: 'Finland', image: 'driver_images/valterri_bottas.png' },
  { id: 4, name: 'Lando Norris', team: 'McClaren', country: 'United Kingdom', image: 'driver_images/lando_norris.png' },
  { id: 6, name: 'Charles LeClerc', team: 'Ferrari', country: 'France', image: 'driver_images/charles_leclerc.png' },
  { id: 7, name: 'Daniel Ricciardo', team: 'McClaren', country: 'Australia', image: 'driver_images/daniel_ricciardo.png' },
  { id: 8, name: 'Carlos Sainz', team: 'Ferrari', country: 'Spain', image: 'driver_images/carlos_sainz.png' },
  { id: 9, name: 'Yuko Tsunoda', team: 'Alpha Tauri', country: 'Japan', image: 'driver_images/yuki_tsunoda.png' },
  { id: 10, name: 'Lance Stroll', team: 'Aston Martin', country: 'Canada', image: 'driver_images/lance_stroll.png' },
  { id: 11, name: 'Kimi Raikkonen', team: 'Alfa Romeo Racing', country: 'Finland', image: 'driver_images/kimi_raikkonen.png' },
  { id: 12, name: 'Antonio Giovinazzi', team: 'Alfa Romeo Racing', country: 'Italy', image: 'driver_images/antonio_giovinazzi.png' },
  { id: 13, name: 'Esteban Ocon', team: 'Alpine', country: 'France', image: 'driver_images/esteban_ocon.png' },
  { id: 14, name: 'George Russell', team: 'Williams', country: 'United Kingdom', image: 'driver_images/george_russell.png' },
  { id: 15, name: 'Sebastian Vettel', team: 'Aston Martin', country: 'Germany', image: 'driver_images/sebastian_vettel.png' },
  { id: 17, name: 'Pierre Gasly', team: 'Alpha Tauri', country: 'France', image: 'driver_images/pierre_gasly.png' },
  { id: 18, name: 'Nicholas Latifi', team: 'Williams', country: 'Canada', image: 'driver_images/nicholas_latifi.png' },
  { id: 19, name: 'Fernando Alonso', team: 'Alpine', country: 'Spain', image: 'driver_images/fernando_alonso.png' },
];

var randomisedTop3Array = [];
var randomisedRemainingArray = [];

function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function generateSweepstake() {
  randomisedTop3Array = shuffleArray(top3_drivers);
  randomisedRemainingArray = shuffleArray(remaining_drivers);
  $('.top-3-section .driver-card').each(function (index) {
    fillCard(this, randomisedTop3Array[index]);
  });
  $('.remaining-driver-section .driver-card').each(function (index) {
    fillCard(this, randomisedRemainingArray[index]);
  });
}

function fillCard(card, driverObject) {
  $(card).find('img').attr('src', driverObject.image);
  $(card).find('h4').text(driverObject.name);
}
