async function fetchData1() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    console.log(data);
    document.getElementById('image').innerHTML = `<img src = "${data.message}">`;
}

fetchData1()


async function fetchData2() {
    let response = await fetch('https://catfact.ninja/fact');
    let data = await response.json();
    console.log(data);
    document.getElementById('fact').innerHTML = data.fact;
}

fetchData2()

async function fetchData3() {
    let response = await fetch('http://universities.hipolabs.com/search?country=United+States');
    let data = await response.json();
    console.log(data);

    let names = data.map(university => university.name);
    document.getElementById('list').innerHTML = names.join(',' );
}

fetchData3()
