const container = document.querySelector('.container');
const quickview = document.querySelector('.quickView');

shirts.forEach( (shirt, id) => {
    addShirtComponent(shirt, id);
})

function countColors(obj) {
    let count = Object.keys(obj.colors).length;
    if (count == 1) return "1 color";
    return `${count} colors`;
}

function addShirtComponent(shirt, id) {
    const shirtHtml = `
    <div class="item">
        <img src="${shirt.colors.white.front}" alt="">
        <div class="content">
            <span class="name">${shirt.name}</span>
            <span class="colors">Available in ${countColors(shirt)}</span>
        </div>
        <div class="buttons">
            <button onclick="addShirtPreviewComponent(${id})" class="button">Quick View</button>
            <a href="details.html?id=${id}"><button class="button">See Page</button></a>
        </div>
    </div>`;
    container.innerHTML+=shirtHtml;
}
console.log(shirts.at(0));

function addShirtPreviewComponent(id) {
    let shirt = shirts.at(id);
    const shirtHtml = `
    <div class="quickViewItem">
            <div class="images">
                <img src="${shirt.colors.white.front}" alt="">
                <img  src="${shirt.colors.white.back}" alt="">
            </div>
            <div class="content">
                <div>
                    <div class="name">${shirt.name}</div>
                    <div class="price">${shirt.price}</div>
                </div>
                <button onclick="removeShirtPreviewComponent(event)" class="button">Close</button>
            </div>
        </div>
    `;
    quickview.innerHTML+=shirtHtml;
}

function removeShirtPreviewComponent(event) {
    console.log(event.target.parentElement.parentElement)
    event.target.parentElement.parentElement.remove();
}





