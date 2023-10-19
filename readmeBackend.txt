// View product details: URL: '/user/product_details?productName=' type: GET
// Example: http://localhost:3150/user/product_details?productName=Samsung Galaxy Z Fold3 5G 512GB

// The filter page has 2 paths:
// 1) Switch when according to idCategories: url: http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983
// where 628c8b29e8654d960a5c8983 is the category id
// 2) Switch by name of productCode: productName url: http://localhost:3150/user/fillter?productName=
// For example: http://localhost:3150/user/fillter?productName=oppo where oppo is the productName you want to search
// Admin utilities

// categories
// Show list of categories:
// url: '/admin/categories' type: GET action: show list of categories
// url: '/admin/categories/:idCategories' type: GET effect: show categories by id
// url: '/admin/categories' type: POST effect: add new categories
         // data: {
         // categoriesName: String,
         // thumpNail: Img
         // }
// url: '/admin/categories/:idCategories' type: PUT function: edit categories
         // data: {
         // categoriesName: String,
         // thumpNail: Img
         // }
// url: '/admin/categories/:idCategories' type: DELETE effect: delete categories

// productcode
// url: '/admin/productcode/list' type: GET effect: show list productcode
// url: '/admin/productcode/:idProductcode' type: GET effect: show productcode by id
// url: '/admin/productcode/product?search=${productName}' type: GET function to search productcode by productName
// url: '/admin/productcode' type: POST effect: show new productCode
         // data:{
         // idCategories: String,
         // productName: String,
         // thumbNail: img,
         // productType: String,
         // performanceProduct: String,
         // cameraProduct: String,
         // specialFeatures: String,
         // design: String,
         // panel: String,
         // }
// url: '/admin/productcode/:idProductCode' type: PUT effect: update productcode information
         // data:{
         // idCategories: String,
         // productName: String,
         // thumbNail: img,
         // productType: String,
         // performanceProduct: String,
// cameraProduct: String,
         // specialFeatures: String,
         // design: String,
         // panel: String,
         // }
// url: '/admin/productcode/:idProductCode' type: DELETE effect: delete productcode

// product
// url: '/admin/product/list' type: GET effect: show product list
// url: '/admin/product/product/:idProductCode' type: GET effect: show list of products by idProductCode
// url: '/admin/product/:idProduct' type: GET function: show detailed information of a product
// url: '/admin/product/' type: POST effect: add 1 new product
                 // data{
                 // idProductCode: String,
                 // price: Number,
                 // priceRange: String,
                 // storage: Number,
                 // productPic: img,
                 // color: String,
                 // ram: String,
                 // rom: String,
                 // productType: String,
                 // performanceProduct: String,
                 // cameraProduct: String,
                 // specialFeatures: String,
                 // design: String,
                 // panel: String,
                 // icon: String, idicon
                 // }
// url: '/admin/product/:idProduct' type: PUT effect: Edit detailed information of a product
                 // data{
                 // idProductCode: String,
                 // price: Number,
                 // priceRange: String,
                 // storage: Number,
                 // productPic: img,
                 // color: String,
                 // ram: String,
                 // rom: String,
                 // productType: String,
                 // performanceProduct: String,
                 // cameraProduct: String,
                 // specialFeatures: String,
                 // design: String,
                 // panel: String,
                 //suggest: String
                 // icon: String, idicon
                 // }
// url: '/admin/product/:idProduct' type: DELETE effect: delete information of a product

// user
		// url: '/admin/user/' type: GET effect: show list of users
// url: '/admin/user/' type: POST effect: Add new user
                 // data{
                 // email: String,
                 // password: String
                 // }
// url: '/admin/user/:idUser' type: PUT effect: edit user information
                 // data{
                 // username: String,
                 // address: String,
                 // phone: String,
                 // avatar: img,
                 // role: String,
                 // }
// url: '/admin/user/:idUser' type: DELETE effect: delete user

// order
                 // url: '/admin/order/' type: GET effect: Display Order list
                 // url: '/admin/order/user/:idUer' type: GET effect: Display list of Orders by idUser
                 // url: '/admin/order/:idOrder' type: PUT effect: edit order status
                 // data{
                 // address: String,
                 // total: Number,
                 // phone: String,
                 // status: String
                 // }
                 // url: '/admin/order/:idOrder' type: DELETE effect: Delete Order


                         // Icon
                 // url: '/admin/icon/list' type: GET effect: Display icon list
                 // url: '/admin/icon/search' type: GET effect: search icon by name
                 // url: '/admin/icon/' type: POST effect: Create new icon
                 // data{
                 // iconName: String,
                 // iconPic: String,
                 // discount: Number,
                 // }
                 // url: '/admin/icon/:idIcon' type: PUT effect: Edit icon
                 // data{
                 // iconName: String,
                 // iconPic: String,
                 // discount: Number,
                 // }
                 // url: '/admin/icon/:idIcon' type: DELETE effect: Delete icon
                        
                
                         // slides
                 // url: '/admin/slide/list' type: GET effect: Display slide list
                 // url: '/admin/slide/search' type: GET effect: search slide by name
                 // url: '/admin/slide/' type: POST effect: Create new slide
                 // data{
                 // slideName: String,
                 // slideImg: String,
                 // }
                 // url: '/admin/slide/:idSlide' type: PUT effect: Edit slide
                 // data{
                 // slideName: String,
                 // slideImg: String,
                 // }
                 // url: '/admin/slide/:idSlide' type: DELETE effect: Delete slide


                         // testOrder:
                 // url: '/admin/order/test' type: POST effect: Add new order
                 // data{
                 // idUser: String,
                 // address: String,
                 // total: Number,
                 // phone: Number,
                 // listProduct: [{
                 // idProduct: String,
                 // quantity: Number
                 // }]
                 // }
                 // url: '/admin/order/test/:idOrder' type: PUT effect: Edit order by idOrder
                 // data{
                 // idUser: String,
                 // address: String,
                 // total: Number,
                 // phone: Number,
                 // listProduct: [{
                 // idProduct: String,
                 // quantity: Number
                 // }]
                 // }
                 // url: '/admin/order/test/:idOrder' type: DEKETE effect: Delete order by idOrder
123.js
9KB
