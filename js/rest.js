const loadCountries =()=>{
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>displayCountries(data))
}
const displayCountries=(countries)=>{
console.log(countries[0]);
const allCountriesHtml=countries.map(country=>getCountriesHtml(country))
// console.log(allCountriesHtml[0]);
const container=document.getElementById('countries');
container.innerHTML=allCountriesHtml.join('');
}
// option-1
// const getCountriesHtml=country=>{
//     const {name,flags}=country;
//     return `
// <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
// </div>

//     `
// option 2
const getCountriesHtml=({name,flags,area,continents})=>{
   
    return `
<div class="country">
    <h2>${name.common}</h2>
    <p>area:${area}</p>
    <p>continents:${continents}</p>

    <img src="${flags.png}">
</div>

    `
    // original

// const getCountriesHtml=country=>{
//     return `
// <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
// </div>

//     `
}
loadCountries();

// let ul = `<li>Programming<li>`; 
// ul += `<li>Hero<li>`; 
// console.log(ul);