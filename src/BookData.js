// async function saveBookCategory(){
//     const result = await fetch("https://online-book-store-4373a-default-rtdb.firebaseio.com/" , {
//         method : "POST",
//         referrerPolicy:"no-referre",
//         body:JSON.stringify([
//             {
//                 imgsrc : "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481446495/barack-obama-9781481446495_hr.jpg",
//                 category_title :"Biography Section"
        
//             },
//             {
//                 imgsrc :"https://fundcraft.com/fundraising-cookbooks/images/cover/big/c270.jpg",
//                 category_title :"Cooking Section"
        
//             },
//             {
//                 imgsrc : "https://cdn-0.popculthq.com/wp-content/uploads/2019/12/Captain-America-17-Cover-B.jpg",
//                 category_title :"Comic Books"
        
//             },
//             {
//                 imgsrc : "http://4.bp.blogspot.com/-wN6qe5yYgVE/VXBL3JwiSvI/AAAAAAAAGow/1VjCabmmSgk/s1600/spectral-horror-2_design.jpg",
//                 category_title :"Horror Section"
        
//             },
//             {
//                 imgsrc :"https://i0.wp.com/bookcoverscre8tive.com/wp-content/uploads/2018/11/Second-Chance-s.jpg",
//                 category_title :"Romance Stories"
        
//             },
//             {
//                 imgsrc :"https://www.alexandravasiliu.net/wp-content/uploads/2020/06/Healing-Words-An-Empowering-Poetry-Book-by-Alexandra-Vasiliu.jpg",
//                 category_title :"Poetry Books"
        
//             },
//             {
//                 imgsrc : "https://i.pinimg.com/originals/09/2b/85/092b859fc9964bd855708f1179b52945.jpg",
//                 category_title :"Action and Adventures"
        
//             } ,
//             {
//                 imgsrc : "http://media.gettyimages.com/vectors/classic-story-book-cover-vector-id178658028",
//                 category_title :"Classic Books"
        
//             }

//         ])
//     })
//     const data = await result.json();
//     console.log(data);
// }

const BookData = [
    {
        imgsrc : "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481446495/barack-obama-9781481446495_hr.jpg",
        category_title :"Biography Section"

    },
    {
        imgsrc :"https://fundcraft.com/fundraising-cookbooks/images/cover/big/c270.jpg",
        category_title :"Cooking Section"

    },
    {
        imgsrc : "https://cdn-0.popculthq.com/wp-content/uploads/2019/12/Captain-America-17-Cover-B.jpg",
        category_title :"Comic Books"

    },
    {
        imgsrc : "http://4.bp.blogspot.com/-wN6qe5yYgVE/VXBL3JwiSvI/AAAAAAAAGow/1VjCabmmSgk/s1600/spectral-horror-2_design.jpg",
        category_title :"Horror Section"

    },
    {
        imgsrc :"https://i0.wp.com/bookcoverscre8tive.com/wp-content/uploads/2018/11/Second-Chance-s.jpg",
        category_title :"Romance Stories"

    },
    {
        imgsrc :"https://www.alexandravasiliu.net/wp-content/uploads/2020/06/Healing-Words-An-Empowering-Poetry-Book-by-Alexandra-Vasiliu.jpg",
        category_title :"Poetry Books"

    },
    {
        imgsrc : "https://i.pinimg.com/originals/09/2b/85/092b859fc9964bd855708f1179b52945.jpg",
        category_title :"Action and Adventures"

    } ,
    {
        imgsrc : "http://media.gettyimages.com/vectors/classic-story-book-cover-vector-id178658028",
        category_title :"Classic Books"

    },
];

export default BookData;