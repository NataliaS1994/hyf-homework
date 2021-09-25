//fetching data using API
let userName1 = fetch(
    "https://api.github.com/search/repositories?q=user:Divyajg"
);
let userName2 = fetch(
    "https://api.github.com/search/repositories?q=user:sunilkumarmahajan"
);
let userName3 = fetch(
    "https://api.github.com/search/repositories?q=user:hparul"
);

Promise.all([userName1, userName2, userName3])
    .then((responses) => responses.forEach((response) => render(response.json())))
    .catch((error) => console.log("error"));

function render(repositoryItem) {
    repositoryItem.then((data) => {
        console.log(data);
        let li = document.createElement("li");
        let ul = document.getElementById("ul");
        let p = document.createElement("p");
        p.innerHTML = `${data.items[0].owner.login}`;
        li.textContent = `GitHub owner's nickname:${data.items[0].owner.login}, RepositoryUrl:${data.items[0].owner.repos_url} , Url : ${data.items[0].owner.html_url}`;
        ul.appendChild(p);
        ul.appendChild(li);
    });
} 