// let menu = [   {tab: 'Платежі',
// 		        title: 'Ну де ще ви бачили безкоштовні перекази?',
// 		        description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
// 		        icon: 'payment',
//                 iphone: 'https://www.monobank.ua/resources/1.0.17.1-1651000699000/img/main/home-payments-iphone-uk@2x.webp'},
// 	           {tab: 'Виписка',
// 		        title: 'Усі ваші витрати на кінчиках пальців',
// 		        description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
// 		        icon: 'extract',
//                 iphone: 'https://www.monobank.ua/resources/1.0.17.1-1651000699000/img/main/home-pfm-iphone-uk@2x.webp'},
//                {tab: 'Налаштування картки',
// 		        title: 'Забудьте все, що ви знали про банкінг',
// 		        description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
// 		        icon: 'settings',
//                 iphone: 'https://www.monobank.ua/resources/1.0.17.1-1651000699000/img/main/home-settings-iphone-uk@2x.webp'},
//             ];

//     document.querySelector(`body`).innerHTML = `
//     <div class='wrap'>
//         <div class='menu'></div>
//         <div class='article'></div>
//     </div>`
//     let wrap = document.querySelector(`.menu`),
//         article = document.querySelector(`.article`);

// const renderIcon =e => {
// return `<div class="icon" style="background-color:white"></div>
//         <div class="icon"><img src="./img/${menu[e].icon}.svg" alt="иконка ${menu[e].tab}"></div>`;
// }

// const renderItem =e =>{
// article.innerHTML=` <div class='article_item'><img src="${menu[e].iphone}" alt="${menu[e].tab}"></div>
//                     <div class='article_item'><div class='article_item-content'> 
//                                             ${renderIcon(e)}
//                                             <h2><b>${menu[e].title}</b></h2><br>
//                                             <p>${menu[e].description}</p>
//                     </div></div>`;

// blocks.forEach(item=>item.classList.remove(`active`))
// blocks[e].classList.add(`active`)
// }   

// menu.forEach(e=>wrap.innerHTML+=`<div class='menu_item'>${e.tab}</div>`)
//     const blocks = document.querySelectorAll(`.menu_item`);
// blocks.forEach((e,i)=>e.addEventListener(`click`, ()=>{renderItem(i)}))






//console.log(`APIII:`,  await getRest())

// let xx = {
//     id: 1,
//     name: 'Mc Donald',
//     logo: `data:image/png;base64,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`,
//     product: [ {
//                 nameProduct: 'Hamburger',
//                 price: 1.00, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Hamburger.png',
//                 },
//                 {
//                 nameProduct: 'Cheeseburger',
//                 price: 1.20, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_Cheeseburger.png',
//                 },
//                 {
//                 nameProduct: 'McChicken',
//                 price: 2.30, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_McChicken.png',
//                 },
//                 {
//                 nameProduct: 'BigMac',
//                 price: 3.70, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/thumb.Sdwch_BigMac.png',
//                 },
//                 {
//                 nameProduct: 'BigTasty',
//                 price: 5.40, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/SdwchBigTasty.png',
//                 },
//                 {
//                 nameProduct: 'Filet-o-Fish',
//                 price: 3.20, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/Sdwch_File-o-Fish.png',
//                 },
//                 {
//                 nameProduct: 'French-Fry medium',
//                 price: 1.50, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/FFMedium.png',
//                 },
//                 {
//                 nameProduct: 'French-Fry dipp',
//                 price: 1.60, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/FrenchFriesDipperLarge.png',
//                 },
//                 {
//                 nameProduct: 'ChickenMcNuggets 9Pc',
//                 price: 2.60, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/ChickenMcNuggets9.png',
//                 },
//                 {
//                 nameProduct: 'McSundaeCaramel',
//                 price: 1.10, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/McSundaeCaramel.png',
//                 },
//                 {
//                 nameProduct: 'McSundaeChoco-Waffle',
//                 price: 1.25, 
//                 URL: 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/regular/McSundaeChocoWaffle.png',
//                 }    
//             ]
// }

// let xy = {
//     id: 2,
//     name: 'Kiev Food Super)',
//     logo: 'https://www.kfc-ukraine.com/admin/files/3190.svg',
//     product: [
//          {
//         nameProduct: 'ChiesBurger',
//         price: 1.70, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4061.jpg',
//         },
//         {
//         nameProduct: 'ChiesSendwich',
//         price: 1.20, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_3729.jpg',
//         },
//         {
//         nameProduct: 'ChiesSendwich-Plain',
//         price: 1.60, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4065.jpg',
//         },
//         {
//         nameProduct: 'Chiken-burito medium',
//         price: 2.20, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4106.png',
//         },
//         {
//         nameProduct: 'Backet`s DUAL CHICKEN',
//         optional: 'SPICE',
//         price: 4.65, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4092.png',
//         },
//         {
//         nameProduct: 'chicken strips',
//         optional: 'SPICE',
//         price: 2.85, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4096.png',
//         },
//         {
//         nameProduct: 'chicken legs',
//         optional: 'SPICE',
//         price: 2.25, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4100.png',
//         },
//         {
//         nameProduct: 'Backet`s classic 12Pc',
//         price: 3.50, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4114.jpg',
//         },
//         {
//         nameProduct: 'NuggetsBox',
//         price: 5.00, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_3801.jpg',
//         },
//         {
//         nameProduct: 'chicken strips 5Pc',
//         price: 2.50, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_4053.jpg',
//         },
    
//         {
//         nameProduct: 'French Fry',
//         price: 1.70, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_3831.jpg',
//         },
//         {
//         nameProduct: 'French Fry Diip',
//         price: 1.80, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_3834.jpg',
//         },
//         {
//         nameProduct: 'IceCream',
//         price: 1.10, 
//         URL: 'https://www.kfc-ukraine.com/admin/files/medium/medium_3813.jpg',
//         }
    
//     ]
// }

// let xz = {
//     id: 3,
//     name: 'Puzata House Radio',
//     logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2M79S3teYewO15qB0jL8WrJeBiXVS09Pnkr0PvaRAtHIdiCbq6Ci7c6DR6X22iq9jeM&usqp=CAU',
//     product: [
//         {
//         nameProduct: 'Borcsh',
//         price: 1.50, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/0af2ca6a-431a-4323-99dd-b379dc181daf-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'vilage-soup-"solianka"',
//         price: 2.20, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/989b6d9c-5f21-4d59-9522-bad299b22467-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'satat-"Greck"',
//         price: 1.80, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/94561276-c501-46fd-bce7-b604d17eece9-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'satat-TomatiWithCucumber',
//         price: 1.30, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/5b9eef2e-79a1-4aa6-843e-06b3075f0b8a-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'village Potato',
//         price: 1.30, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/de123420-4a58-4c85-95d1-d4801062fc06-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'Buckwheat',
//         price: 1.70, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/50ebf0e8-4bc3-43dd-bf0b-74039e7d679f-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'Home Beverage',
//         price: 2.00, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/f67fe334-bf1b-4541-abec-64ac7aac5ed5-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'Fruit Drink',
//         price: 2.00, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/2df0f1fb-4bd9-4661-8e49-3574b1a6ed73-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'cake Napolion!',
//         price: 3.50, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/f6a86eb9-e16e-43c7-8acb-113f36ad2fc2-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'Ukraine pelmeni',
//         price: 3.00, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/d76ce14f-1a62-4335-9d96-8be473838854-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'Ukraine vareniki',
//         price: 2.70, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/4dab5688-0486-44a2-bd3d-fbe435109878-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'kotleta-"PoKievsky"',
//         price: 2.80, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/943a6add-d09d-4fa6-b4d9-ae7ad60f52c0-thumbnail-400x400-100.jpg',
//         },
//         {
//         nameProduct: 'kotleta-"Homework"',
//         price: 1.80, 
//         URL: 'https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/c43cc21f-f161-4a7a-b0a7-e6e164084b23-thumbnail-400x400-100.jpg',
//         },


//     ]};



// let moch = [];

// moch.push(xx);
// moch.push(xy);
// moch.push(xz);

//console.log(moch)
// console.log(JSON.stringify(moch))

