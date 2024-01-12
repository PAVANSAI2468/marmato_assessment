let menButtonElement = document.getElementById("menBtn");
let womenButtonElement = document.getElementById("womenBtn");
let kidsButtonElement = document.getElementById("kidsBtn");
let resultEl1 = document.getElementById("results1");
let resultEl2 = document.getElementById("results2");
let resultEl3 = document.getElementById("results3");


function onMen() {

    resultEl2.classList.add("d-none");
    resultEl3.classList.add("d-none");

    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
    let option = {
        method: "GET"
    };
    fetch(url, option).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        const {
            categories
        } = jsonData;
        const {
            category_products
        } = categories[0];
        for (let each of category_products) {
            const {
                badge_text,
                image,
                title,
                vendor,
                price,
                compare_at_price
            } = each;
            let cardEl = document.createElement("div");
            cardEl.style.margin = "20px";
            resultEl1.appendChild(cardEl);
            let ImageEl = document.createElement("img");
            ImageEl.setAttribute("src", image);
            ImageEl.classList.add("imageSizing");
            cardEl.appendChild(ImageEl);
            let clothConatainer = document.createElement("div");
            clothConatainer.style.marginBottom = "5px";
            cardEl.appendChild(clothConatainer);
            let titleEl = document.createElement("h1");
            titleEl.textContent = title;
            titleEl.classList.add("dressName");
            clothConatainer.appendChild(titleEl);
            let vendorEl = document.createElement("p");
            vendorEl.textContent = "." + vendor;
            vendorEl.classList.add("vendorName");
            clothConatainer.appendChild(vendorEl);
            let priceConatainer = document.createElement("div");
            cardEl.appendChild(priceConatainer);
            let priceEl = document.createElement("h1");
            priceEl.textContent = "Rs " + price + ".00";
            priceEl.classList.add("dressName");
            priceConatainer.appendChild(priceEl);
            let compare_at_priceEl = document.createElement("p");
            compare_at_priceEl.textContent = compare_at_price + ".00";
            compare_at_priceEl.classList.add("compare_at_price_value");
            priceConatainer.appendChild(compare_at_priceEl);
            let offerEl = document.createElement("h1");
            offerEl.textContent = "50% Off";
            offerEl.classList.add("offer");
            priceConatainer.appendChild(offerEl);
            let cartEl = document.createElement("button");
            cartEl.textContent = "Add to Cart";
            cartEl.style.backgroundColor = "black";
            cartEl.style.color = "white";
            cartEl.style.padding = "10px";
            cartEl.style.marginTop = "4px";
            cardEl.appendChild(cartEl);
        }
    });
}

function onWomen() {
    resultEl1.classList.add("d-none");
    resultEl3.classList.add("d-none");
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
    let option = {
        method: "GET"
    };
    fetch(url, option).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        const {
            categories
        } = jsonData;
        const {
            category_products
        } = categories[1];
        for (let each of category_products) {
            const {
                badge_text,
                image,
                title,
                vendor,
                price,
                compare_at_price
            } = each;
            let cardEl = document.createElement("div");
            cardEl.style.margin = "20px";
            resultEl1.appendChild(cardEl);
            let ImageEl = document.createElement("img");
            ImageEl.setAttribute("src", image);
            ImageEl.classList.add("imageSizing");
            cardEl.appendChild(ImageEl);
            let clothConatainer = document.createElement("div");
            clothConatainer.style.marginBottom = "5px";
            cardEl.appendChild(clothConatainer);
            let titleEl = document.createElement("h1");
            titleEl.textContent = title;
            titleEl.classList.add("dressName");
            clothConatainer.appendChild(titleEl);
            let vendorEl = document.createElement("p");
            vendorEl.textContent = "." + vendor;
            vendorEl.classList.add("vendorName");
            clothConatainer.appendChild(vendorEl);
            let priceConatainer = document.createElement("div");
            cardEl.appendChild(priceConatainer);
            let priceEl = document.createElement("h1");
            priceEl.textContent = "Rs " + price + ".00";
            priceEl.classList.add("dressName");
            priceConatainer.appendChild(priceEl);
            let compare_at_priceEl = document.createElement("p");
            compare_at_priceEl.textContent = compare_at_price + ".00";
            compare_at_priceEl.classList.add("compare_at_price_value");
            priceConatainer.appendChild(compare_at_priceEl);
            let offerEl = document.createElement("h1");
            offerEl.textContent = "50% Off";
            offerEl.classList.add("offer");
            priceConatainer.appendChild(offerEl);
            let cartEl = document.createElement("button");
            cartEl.textContent = "Add to Cart";
            cartEl.style.backgroundColor = "black";
            cartEl.style.color = "white";
            cartEl.style.padding = "10px";
            cartEl.style.marginTop = "4px";
            cardEl.appendChild(cartEl);
        }
    });
}

function onKids() {
    resultEl1.classList.add("d-none");
    resultEl2.classList.add("d-none");
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
    let option = {
        method: "GET"
    };
    fetch(url, option).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        const {
            categories
        } = jsonData;
        const {
            category_products
        } = categories[2];
        for (let each of category_products) {
            const {
                badge_text,
                image,
                title,
                vendor,
                price,
                compare_at_price
            } = each;
            let cardEl = document.createElement("div");
            cardEl.style.margin = "20px";
            resultEl1.appendChild(cardEl);
            let ImageEl = document.createElement("img");
            ImageEl.setAttribute("src", image);
            ImageEl.classList.add("imageSizing");
            cardEl.appendChild(ImageEl);
            let clothConatainer = document.createElement("div");
            clothConatainer.style.marginBottom = "5px";
            cardEl.appendChild(clothConatainer);
            let titleEl = document.createElement("h1");
            titleEl.textContent = title;
            titleEl.classList.add("dressName");
            clothConatainer.appendChild(titleEl);
            let vendorEl = document.createElement("p");
            vendorEl.textContent = "." + vendor;
            vendorEl.classList.add("vendorName");
            clothConatainer.appendChild(vendorEl);
            let priceConatainer = document.createElement("div");
            cardEl.appendChild(priceConatainer);
            let priceEl = document.createElement("h1");
            priceEl.textContent = "Rs " + price + ".00";
            priceEl.classList.add("dressName");
            priceConatainer.appendChild(priceEl);
            let compare_at_priceEl = document.createElement("p");
            compare_at_priceEl.textContent = compare_at_price + ".00";
            compare_at_priceEl.classList.add("compare_at_price_value");
            priceConatainer.appendChild(compare_at_priceEl);
            let offerEl = document.createElement("h1");
            offerEl.textContent = "50% Off";
            offerEl.classList.add("offer");
            priceConatainer.appendChild(offerEl);
            let cartEl = document.createElement("button");
            cartEl.textContent = "Add to Cart";
            cartEl.style.backgroundColor = "black";
            cartEl.style.color = "white";
            cartEl.style.padding = "10px";
            cartEl.style.marginTop = "4px";
            cardEl.appendChild(cartEl);
        }
    });
}



menButtonElement.addEventListener("click", onMen);
womenButtonElement.addEventListener("click", onWomen);
kidsButtonElement.addEventListener("click", onKids);
