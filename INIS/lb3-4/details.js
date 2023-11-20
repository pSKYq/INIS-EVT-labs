//details.html?id=1

const state = {
    shirt: null,
    image: null,
    imageSide: 'front',
    imageColor: 'white'
};

function changeImage() {
    state.image.src = state.shirt.colors[state.imageColor][state.imageSide];
}

document.body.onload = () => {
    const shirtId = parseInt(document.location.search.split('=')[1]); 
    state.shirt = shirts.at(shirtId)
    addItemComponent(state.shirt);
    state.image = document.querySelector('.shirt-image');
}

function addItemComponent(shirt) {
    const itemHtml = `
    <div class="item">
        <div class="name">${shirt.name}</div>
        <div class="container">
            <img class="shirt-image" src="${shirt.colors.white.front}" alt="">
            <div class="content">
                <div class="text-container">
                    <div class="price">${shirt.price}</div>
                    <div class="description">${shirt.description}</div>
                </div>
                <div class="buttons">
                    <div class="size-buttons">
                        <span>Side:</span>
                        <button onclick="changeSide('front')" class="side-button">Front</button>
                        <button onclick="changeSide('back')" class="side-button">Back</button>  
                    </div> 
                    <div class="color-buttons">
                        <span>Color:</span>
                        ${buttonsComponent(shirt)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.body.innerHTML += itemHtml;
}

function buttonsComponent(shirt) {
    const colors = Object.entries(shirt.colors);
    let buttonsHtml="";
    colors.forEach(element => {
        buttonsHtml += buttonComponent(element[0])
    });
    return buttonsHtml;
}

function buttonComponent(color) {
    return `<button class="color-button" onClick="changeColor('${color}')" style="background-color: ${color}; color: ${getTextColor(color)} ;">${color}</button>`
}   

function changeColor(color) {
    state.imageColor = color;
    changeImage();
}

function changeSide(side) {
    state.imageSide = side;
    changeImage();
}

function getTextColor(color) {
    if (color == 'white' || color == 'yellow' || color == 'pink') {
        return 'black';
    } else {
        return 'white';
    }
}
 

