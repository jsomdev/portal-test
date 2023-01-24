/* eslint-disable no-undef */
function shouldInitialize() {
  return window.location.origin !== 'https://localhost:3000';
}

if (shouldInitialize()) {
  fetch(
    'https://api.ipstack.com/check?access_key=cdd42837347dc8497f805c394a19590f&&fields=country_code'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.country_code === 'US') {
        klaro.render(window.klaroConfigUS);
      } else {
        klaro.render(window.klaroConfigGDPR);
      }
    })
    .catch(function () {
      klaro.render(window.klaroConfigGDPR);
    });
}
