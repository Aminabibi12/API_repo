async function fetchData1() {
    let response = await fetch('https://catfact.ninja/fact');
    let data = await response.json();
    console.log(data);
    document.getElementById('fact').innerHTML = `<p>Cat Facts : ${data.fact}</p>`;
}


async function fetchData2() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    console.log(data);
    document.getElementById('image').innerHTML = `<img src = "${data.message}">`;
}


async function fetchData3() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();
    console.log(data);
    
    let jokesElement = document.getElementById('jokes');
    jokesElement.innerHTML = `<p>Value : ${data.value}</p>`;
  
}

 //fetchData1()
// fetchData2()
window.myVar = 42

export {fetchData3, fetchData1, fetchData2};

