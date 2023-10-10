
// Xem thông tin chi tiết sản phẩm: URL: '/user/product_details?productName=' type: GET 
// VD: http://localhost:3150/user/product_details?productName=Samsung Galaxy Z Fold3 5G 512GB

// Trang bộ lọc thì có 2 đường dẫn: 
// 1) Chuyển khi theo idCategories: url: http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983 
// trong đó 628c8b29e8654d960a5c8983 là id của categories
// 2) Chuyển khi theo tên của productCode: productName url: http://localhost:3150/user/fillter?productName=
// VD: http://localhost:3150/user/fillter?productName=oppo trong đó oppo là tên productName muốn tìm kiếm
// Các tiện ích admin

// 			categories
// Hiện list categories:
// 		url: '/admin/categories' type: GET tác dụng: hiện list categories
// 		url: '/admin/categories/:idCategories' type: GET tác dụng: hiện categories theo id
// 		url: '/admin/categories' type: POST tác dụng: thêm mới categories
        // data: {
        //     categoriesName: String,
        //     thumpNail: Img
        // }
// 		url: '/admin/categories/:idCategories' type: PUT tác dụng: chỉnh sủa categories
        // data: {
        //     categoriesName: String,
        //     thumpNail: Img
        // }
// 		url: '/admin/categories/:idCategories' type: DELETE tác dụng: xóa categories

// 			productcode
// 		url: '/admin/productcode/list' type: GET tác dụng: hiện list productcode
//              url: '/admin/productcode/:idProductcode' type: GET tác dụng: hiện productcode theo id
// 		url: '/admin/productcode/product?search=${productName}' type: GET tác dụng tìm kiếm productcode theo productName
// 		url: '/admin/productcode' type: POST tác dụng: hiện thêm mới productCode
        // data:{
        //     idCategories: String,
        //     productName: String,
        //     thumNail: img,
        //     productType: String,
        //     performanceProduct: String,  
        //     cameraProduct: String,
        //     specialFeatures: String,
        //     design: String,
        //     panel: String,
        // }
// 		url: '/admin/productcode/:idProductCode' type: PUT tác dụng: cập nhật thông tin của productcode
        // data:{
        //     idCategories: String,
        //     productName: String,
        //     thumNail: img,
        //     productType: String,
        //     performanceProduct: String,
        //     cameraProduct: String,
        //     specialFeatures: String,
        //     design: String,
        //     panel: String,
        // }
// 		url: '/admin/productcode/:idProductCode' type: DELETE tác dụng: xóa đi productcode

// 			product
// 		url: '/admin/product/list' type: GET tác dụng: hiện danh sách product
// 		url: '/admin/product/product/:idProductCode' type: GET tác dụng: hiện danh sách product theo idProductCode
// 		url: '/admin/product/:idProduct' type: GET tác dụng: hiện thông tin chi tiết của 1 product
// 		url: '/admin/product/' type: POST tác dụng: thêm mới 1 product
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
// 		url: '/admin/product/:idProduct' type: PUT tác dụng: Sửa thông tin chi tiết của 1 product
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
                // suggest: String 
                // icon: String, idicon 
                // }
// 		url: '/admin/product/:idProduct' type: DELETE tác dụng: xóa thông tin của 1 product

		// 	user
		// url: '/admin/user/' type: GET tác dụng: hiện danh sách user
		// url: '/admin/user/' type: POST tác dụng: Thêm mới user
                // data{
                //         email: String,
                //         password: String
                // }
		// url: '/admin/user/:idUser' type: PUT tác dụng: sửa thông tin user
                // data{
                //         username: String,
                //         address: String,
                //         phone: String,
                //         avatar: img,
                //         role: String,
                // }
		// url: '/admin/user/:idUser' type: DELETE tác dụng: xóa user

// 			order        
                // url: '/admin/order/' type: GET tác dụng:  Hiển thị danh sách Order 
                // url: '/admin/order/user/:idUer' type: GET tác dụng:  Hiển thị danh sách Order theo idUser
                // url: '/admin/order/:idOrder' type: PUT tác dụng:  chỉnh sửa tình trạng của order
                // data{
                //         address: String,
                //         total: Number,
                //         phone: String,
                //         status: String
                //     }
                // url: '/admin/order/:idOrder' type: DELETE tác dụng:  Xóa Order 


                        // icon 
                // url: '/admin/icon/list' type: GET tác dụng:  Hiển thị danh sách icon 
                // url: '/admin/icon/search' type: GET tác dụng: tìm kiếm icon theo tên
                // url: '/admin/icon/' type: POST tác dụng:  Tạo mới icon 
                // data{
                //         iconName: String,
                //         iconPic: String,
                //         discount: Number,
                // }
                // url: '/admin/icon/:idIcon' type: PUT tác dụng:  Chỉnh sửa icon 
                // data{
                //         iconName: String,
                //         iconPic: String,
                //         discount: Number,
                // }
                // url: '/admin/icon/:idIcon' type: DELETE tác dụng:  Xóa icon
                        
                
                        // slide
                // url: '/admin/slide/list' type: GET tác dụng:  Hiển thị danh sách slide 
                // url: '/admin/slide/search' type: GET tác dụng: tìm kiếm slide theo tên
                // url: '/admin/slide/' type: POST tác dụng:  Tạo mới slide 
                // data{
                //         slideName: String,
                //         slideImg: String,
                // }
                // url: '/admin/slide/:idSlide' type: PUT tác dụng:  Chỉnh sửa slide 
                // data{
                //         slideName: String,
                //         slideImg: String,
                // }
                // url: '/admin/slide/:idSlide' type: DELETE tác dụng:  Xóa slide


                        // testOrder:
                // url: '/admin/order/test' type: POST tác dụng:  Thêm mới order
                // data{
                //         idUser: String,
                //         address: String,
                //         total: Number,
                //         phone: Number,
                //         listProduct: [{
                //              idProduct: String, 
                //              quantity: Number
                //              }] 
                // }
                // url: '/admin/order/test/:idOrder' type: PUT tác dụng:  CHỉnh sửa order theo idOrder
                // data{
                //         idUser: String,
                //         address: String,
                //         total: Number,
                //         phone: Number,
                //         listProduct: [{
                //              idProduct: String, 
                //              quantity: Number
                //              }] 
                // }
                // url: '/admin/order/test/:idOrder' type: DEKETE tác dụng:  Xóa order theo idOrder
123.js
9 KB