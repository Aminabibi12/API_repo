async function fetchData() {
    let response = await fetch('https://catfact.ninja/fact');
    let data = await response.json();
    console.log(data);
    document.getElementById('fact').innerHTML = data.fact;
}
fetchData()
