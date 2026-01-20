
const products = ["Laptop", "Mouse", "Keyboard", "Wifi dongle", "Charger", "Keypad", "Tackpad", "Bluetooth", "Headphones", "Asus", "Asus TUF A15",
    "Asus vivobook", "Acer", "Lenovo", "imac", "Legion", "Hp", "HP pavilon", "Dell", "Samsung mobile", "Wireless Mouse",
    "Mechanical Keyboard", "USB-C Hub","Laptop Stand", "Noise Cancelling Headphones","Webcam HD","Bluetooth Speaker","External SSD","Gaming Monitor","Ergonomic Chair","Smart Watch","Portable Charger","Desk Lamp","Wireless Earbuds","Graphic Tablet","Microphone","Router","Power Strip","VR Headset","Fitness Band","Phone Holder","Action Camera","Smart Bulb","Smart Plug","Keyboard Wrist Rest","Mouse Pad","Standing Desk","Laptop Sleeve","Cable Organizer","Webcam Cover","USB Flash Drive","SSD Enclosure","Headphone Stand","Bluetooth Adapter",
];

function renderProducts() {
    const ul = document.getElementById("product-list");
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
}
renderProducts();
