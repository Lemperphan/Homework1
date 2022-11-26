const productsGaming = [
    {
        name:"Màn hình siêu rộng 34 inch LG",
        price: 8690000,
        image:"https://philong.com.vn/media/product/250-24335-lg-34wp65g-4huijgyrhteioyu.jpg",
        type:"screen"
    },
    {
        name:"Màn Hình Gaming LG UltraGear",
        price: 4390000,
        image:"https://philong.com.vn/media/product/250-28182-lg-24gq50f-b-1.png",
        type:"screen"
    },
    {
        name:"Màn hình đồ hoạ Asus ProArt",
        price: 7390000,
        image:"https://philong.com.vn/media/product/250-25474-1.png",
        type:"screen"
    },
    {
        name:"Bàn phím Cơ Newmen GM550",
        price: 1050000,
        image:"https://philong.com.vn/media/product/250-19587-gm550-3.jpg",
        type:"keyboard"
    },
    {
        name:"Bàn Phím Cơ FL-Esports ",
        price: 3499000,
        image:"https://philong.com.vn/media/product/250-28505-philong-ban-phim-co-fl-esport-cmk98-tropicalforest.jpg",
        type:"keyboard"
    },
    {
        name:"Chuột Chơi Game Không Dây LOGITECH",
        price: 3890000,
        image:"https://philong.com.vn/media/product/250-28600-philong-chuot-gaming-khong-day-g502x-plus-black.png",
        type:"mouse"
    },
    {
        name:"Bàn Phím Cơ Không Dây E-DRA ",
        price: 1399000,
        image:"https://philong.com.vn/media/product/250-28479-philong-ek384w-v2.jpg",
        type:"keyboard"
    },
    {
        name:"Chuột có dây GAMING E-DRA",
        price: 190000,
        image: "https://philong.com.vn/media/product/250-28213-1.jpg",
        type:"mouse"
    }
];

localStorage.setItem('products Gaming', JSON.stringify(productsGaming))
const getProducts = JSON.parse(localStorage.getItem('products Gaming'))
// console.log(getProducts);
const productsListElement = document.getElementById(
    "container_right"
)
function render(productList){
    productsListElement.innerHTML ="";
    productList.forEach(function(element) {
        productsListElement.insertAdjacentHTML(
            "beforeend",
            `
            <ul>
                <li>
                <img src="${element.image}">
                <h4>${element.name}</h4>
                <span>${element.price}</span>
                </li>  
            </ul>         
            `
        )
    });
}
render(productsGaming)

const ascBtn = document.getElementById("asc")
const descBtn = document.getElementById("desc")

ascBtn.onclick = function(){
    const sortedProducts = productsGaming.sort(
        function(a,b) {
        if(a.price == b.price){
            return 0;
        } else if(a.price > b.price){
            return 1;
        } else {
            return -1
        }
    }
   );
   render(sortedProducts)
} 
descBtn.onclick = function(){
    const sortedProducts = productsGaming.sort(
        function(a,b) {
        if(a.price == b.price){
            return 0;
        } else if(a.price < b.price){
            return 1;
        } else {
            return -1
        }
    }
   );
   render(sortedProducts)
} 
const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
    const typeSelected = filterSelect.value;
    let filteredProducts = [];
    switch (typeSelected) {
        case "screen":
            filteredProducts = productsGaming.filter(function(element)  {
                if(element.type == "screen"){   
                    return true
                } else{
                    return false
                }
            });
            break;
            case "keyboard":
                filteredProducts = productsGaming.filter(function(element)  {
                    if(element.type == "keyboard"){   
                        return true
                    } else{
                        return false
                    }
                });
                break;
                case "mouse":
                    filteredProducts = productsGaming.filter(function(element)  {
                        if(element.type == "mouse"){   
                            return true
                        } else{
                            return false
                        }
                    });
                    break;
        default:
            filteredProducts = productsGaming;
            break;
    }
    render(filteredProducts)
}