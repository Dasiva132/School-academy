function $(sel) {
    return document.querySelector(sel);
}
function $A(sels) {
    return document.querySelectorAll(sels);
}
window.addEventListener('load', () => {
    const carouselItems = [
        'quote 1.jpg',
        'quote 2.jpg',
        'quote 3.jpg',
        'quote 4.webp',
        'quote 5.jpg',
        'quote 6.jpg',
        'quote 7.jpg',
        'quote 8.jpg',
    ];
    const car = $("#carousel");
    carouselItems.forEach((item) => {
        let carItem = document.createElement("div");
        carItem.classList.add("carousel-item");
        let img = document.createElement("img");
        img.setAttribute("src", `./pictures/${item}`);
        carItem.appendChild(img);
        car.append(carItem);
        car.firstElementChild.classList.add("active");
    })

    const carItems = $A("#carousel .carousel-item");
    carItems.forEach((item) => {
        console.log("for eachhello");
        window.setTimeout(() => {
            console.log("settimeout hello");
            if (item.classList.contains("active")) {
                window.setTimeout(() => {
                    item.classList.remove("active");
                }, 300)
                if (item.nextElementSibling) {
                    window.setTimeout(() => {
                        item.nextElementSibling.classList.add("active");
                    }, 300)
                } else {
                    window.setTimeout(() => {
                        car.firstElementChild.classList.add("active");
                    }, 300)
                }
            }
        }, 1000)
    })
})
