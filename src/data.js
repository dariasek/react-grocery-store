const data = {
    categories: [
        {id: 1, name:'Fruits & Vegetables', img: 'https://image.freepik.com/free-photo/group-tropical-fresh-fruits-vegetables-isolated-white-background_3236-1468.jpg', alias:'FruitsVegetables'},
        {id:2, name:'Cookies, Snacks & Candy', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBjvvWdHLp9xvKM5KiFei7T1nhlgD_E4gx9w&usqp=CAU', alias:'CookiesSnacksCandy'},
        {id:3, name:'Beverages', img: 'https://i1.wp.com/lh3.googleusercontent.com/-_Q8EKoZfHQI/WIuKExm52TI/AAAAAAAAMUw/hwjDfNl8Z1kI7vZkYfpk48gnX9Fl2ShIwCE0/s2048/3%2B%25D1%2581%25D0%25BE%25D0%25BA%25D0%25B8.jpg?w=1000&ssl=1', alias:'Beverages'},
        {id:4, name:'Bread & Bakery', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5l3ELAFA7hnBR3gZ-GNmmoB_aQYL5sJAu2Q&usqp=CAU', alias:'BreadBakery'},
        {id:5, name:'Frozen Foods', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT45sshEXs7lnWj3vywskRytNHolcxTTwMpDw&usqp=CAU', alias:'FrozenFoods'},
        {id:6, name:'Dairy & Eggs', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuC7uQKH-PKHfenG5SdT60AD8EOaNSzptxug&usqp=CAU', alias:'DairyEggs'},
    ],
    products:{
        FruitsVegetables:[
            {id:1, name: 'banana', price:'2', img: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg', quantity:0, productCategory:'FruitsVegetables'},
            {id:2, name: 'apple',price:'3', img: 'https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg', quantity:0, productCategory:'FruitsVegetables'},
            {id:3, name: 'avocado', price:'1.5', img: 'data:image/jpeg;base64,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', quantity:0, productCategory:'FruitsVegetables'},
            {id:4, name: 'onion', price:'1', img: 'https://cdn.shopify.com/s/files/1/1188/2592/articles/New_Ingredients_onion_copy.jpg?v=1579595580', quantity:0, productCategory:'FruitsVegetables'},
            {id:5, name: 'potato', price:'3', img: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg', quantity:0, productCategory:'FruitsVegetables'},
            {id:6, name: 'cucumber', price:'2', img: 'https://www.lima-europe.eu/wp-content/uploads/2017/04/Cucumber.jpg', quantity:0, productCategory:'FruitsVegetables'},
            {id:7, name: 'tomato', price:'2.5', img: 'https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg', quantity:0, productCategory:'FruitsVegetables'},
        ],
        CookiesSnacksCandy:[
            {id:1, name: 'oreo', price:'2', img: 'https://cf.shopee.com.my/file/62638e745f981f011f1d3d68b025277f', quantity:0, productCategory:'CookiesSnacksCandy'},
            {id:2, name: 'banana chips', price:'1', img: 'https://aquamarket.ua/37783-large_default/product.jpg', quantity:0, productCategory:'CookiesSnacksCandy'},
            {id:3, name: 'chocolate', price:'3', img: 'https://www.austriansupermarket.com/media/catalog/product/cache/2/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/i/mil1024.jpg', quantity:0, productCategory:'CookiesSnacksCandy'},
            {id:4, name: 'M&M`s', price:'2', img: 'https://cdn150.picsart.com/upscale-278647026008211.png?type=webp&to=min&r=1024', quantity:0, productCategory:'CookiesSnacksCandy'},
        ],
        Beverages:[
            {id:1, name: 'water', price:'0.99', img: 'https://produits.bienmanger.com/30815-0w600h600_Fiji_Natural_Artesian_Water_50cl_Bottle.jpg', quantity:0, productCategory:'Beverages'},
            {id:2, name: 'juice', price:'2.3', img: 'https://image.made-in-china.com/2f0j00vMhQCZdSpFRO/1L-Paper-Box-NFC-Orange-Juice.jpg', quantity:0, productCategory:'Beverages'},
            {id:3, name: 'cola', price:'2', img: 'https://demoshop.techrats.de/images/product_images/original_images/coca-cola-bottle.jpg', quantity:0, productCategory:'Beverages'},
            {id:4, name: 'sprite', price:'1.7', img: 'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/208255/208255_p?pgw=1&pgwact=1', quantity:0, productCategory:'Beverages'},
        ],
        BreadBakery:[
            {id:1, name: 'bread', price:'2', img: 'https://www.kroger.com/product/images/xlarge/front/0001410004346', quantity:0, productCategory:'BreadBakery'},
            {id:2, name: 'croissant', price:'5', img: 'https://www.sacmi.it/SacmiCorporate/media/FoodAndBeverage/images/CROISSANT_2-2.jpg', quantity:0, productCategory:'BreadBakery'},
            {id:3, name: 'bagel', price:'2', img: 'https://www.linencraft.ca/product_images/orgsize_1730bagel-sesame-blanc.jpg', quantity:0, productCategory:'BreadBakery'},
            {id:4, name: 'donut', price:'1.5', img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2156400.jpg', quantity:0, productCategory:'BreadBakery'},
        ],
        FrozenFoods:[
            {id:1, name: 'ice cream', price:'6', img: 'https://images-na.ssl-images-amazon.com/images/I/51-Do4j4GTL.jpg', quantity:0, productCategory:'FrozenFoods'},
            {id:2, name: 'frozen pizza', price:'5', img: 'https://az836796.vo.msecnd.net/media/image/product/en/large/0007192195129.jpg', quantity:0, productCategory:'FrozenFoods'},
            {id:3, name: 'frozen berries', price:'4', img: 'https://www.kroger.com/product/images/xlarge/front/0007120206429', quantity:0, productCategory:'FrozenFoods'},
            {id:4, name: 'frozen vegetables', price:'3.5', img: 'https://www.ocado.com/productImages/561/56162011_0_640x640.jpg?identifier=1b494d494d8d2bf717b77c2b2e66e268', quantity:0, productCategory:'FrozenFoods'},
        ],
        DairyEggs:[
            {id:1, name: 'milk', price:'2.3', img: 'https://s7d6.scene7.com/is/image/bjs/147476?$bjs-Zoom$', quantity:0, productCategory:'DairyEggs'},
            {id:2, name: 'cheese', price:'3', img: 'https://www.kroger.com/product/images/xlarge/front/0002100005500', quantity:0, productCategory:'DairyEggs'},
            {id:3, name: 'egg', price:'1', img: 'https://static.turbosquid.com/Preview/2018/11/06__21_59_18/Eggs5x601.png74BE7360-33AF-401A-BA1E-9061609B1B57Default.jpg', quantity:0, productCategory:'DairyEggs'},
            {id:4, name: 'butter', price:'2', img: 'https://www.kroger.com/product/images/large/front/0076770700106', quantity:0, productCategory:'DairyEggs'},
        ],
    },
};

export default data;