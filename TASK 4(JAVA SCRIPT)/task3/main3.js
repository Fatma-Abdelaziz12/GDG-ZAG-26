fetch ("data2.json").then((response)=>{
    return response.json();
})
.then((data)=>{
    displayProducts(data);

})
.catch((error)=>{
    console.log(error);
});

function displayProducts(products){
    const container = document.getElementById("container");
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${product.thumbnail}"/>
        <h2>${product.title}</h2>
        <p class="price">price: ${product.price}</p>
        <p class="quantity">quantity: ${product.quantity}</p>
        <button>add to cart</button>`;
        container.appendChild(div);
    });
}