 
 
 // تكليف 1
 
 let Articles = [
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
];
function getArticles(){
    return new Promise ( (resolve,reject)=>{
        if (Articles){
            resolve(Articles);
        }
        else{
            reject("error");
        }

    });
}
getArticles().then((data)=>{
    const firstfive =data.slice(0,5);
    displayArticles(firstfive);

})
.catch((error)=>{
    console.log(error);
});
function displayArticles(Articles){
    const container = document.getElementById("container");
    Articles.forEach(Article => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${Article.title}</h2>
        <p>${Article.description}</p>`;
        container.appendChild(div);
    });
}

// تكليف 2
fetch ("data.json").then((response)=>{
    return response.json();
})
.then((data)=>{
    const firstfive =data.slice(0,5);
    displayArticles(firstfive);

})
.catch((error)=>{
    console.log(error);
});

function displayArticles(Articles){
    const container = document.getElementById("container");
    Articles.forEach(Article => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${Article.title}</h2>
        <p>${Article.description}</p>`;
        container.appendChild(div);
    });
}
