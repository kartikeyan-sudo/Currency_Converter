const inputcur = document.querySelector("#usd");
const inr = document.querySelector(".converter input");

api_url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Lp52N8f6rDxQrKRzYIl0yBYkdauP3dg4eRzp0TP1";

const convertbtn = document.querySelector(".convert");

async function fetchprice(){
    const price = document.querySelector("#currency").value;
    const response = await fetch(api_url);
    var data = await response.json();
    console.log(data);
    var value = data.data[price];

    currencyconv(value);

}


function currencyconv(element){
    let currency = document.querySelector(".currencyinit").value;
    var ex_currency = currency * element;
    display(ex_currency);

}

function display(value){
    console.log(value);
    const suffix = document.querySelector("#currency").value;
    document.querySelector(".display").innerHTML = "CONVERTED PRICE :"+ value + ` ${suffix}`;
}