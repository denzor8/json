// Import stylesheets
// import './style.css';

//  Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.com/v3.1/all


let div = document.querySelector('#app');

fetch('https://restcountries.com/v2/all').then((res) =>
  res.json().then((info) => {
    info.forEach((element) => {
      let tab = document.createElement('table');
      tab.innerHTML = `
        <tr>
          <th>${element.name}</th>
        </tr>
        <tr>
          <td>capital: <b>${element.capital}</b></td>
        </tr>
        <tr>
          <td>flag: <img src="${element.flag}" width="30vw"></td>
        </tr>
        <tr>
          <td>alpha code: <b>${element.alpha3Code}</b></td>
        </tr>
        <tr>
          <td>region: <b>${element.region}</b></td>
        </tr>
        <tr>
          <td>native name: <b>${element.nativeName}</b></td>
        </tr>
        `;
      div.append(tab);
    });
  })
);