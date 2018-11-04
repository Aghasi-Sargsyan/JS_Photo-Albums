export default function fetchData(path) {
    return fetch("https://jsonplaceholder.typicode.com" + path)
        .then(response => response.json())
}