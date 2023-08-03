let arr =[
    {name: "Shopping list",
    created: "April 27, 2021",
    category: ["Task","./img/icons8-cart-24.png"],
    content: " Tomatoes, bread",
    dates: "April 27, 2022",
    id:1
},
{name: "The teory of evolytion",
    created: "April 27, 2022",
    category: ["Random Thought","/img/mind-11072805.png"],
    content: " The teory of evolytion",
    dates: "April 27, 2021",
    id:2
},
{name: "New Feature",
    created: "April 27, 2022",
    category: ["Idea","img/light-bulb-6658474.png"],
    content: " The teory of evolytion.................................",
    dates: "April 27, 2021",
    id:2
},
{name: "William Gaddis",
    created: "May 27, 2022",
    category: ["Quote","img/quote-4338295.png"],
    content: " Power doesn't...",
    dates: "April 27, 2021",
    id:2
},
{name: "Books",
    created: "May 15, 2022",
    category: ["Task","./img/icons8-cart-24.png"],
    content: "The learn startup",
    dates: "April 27, 2021",
    id:2
},

]

let categories = {
    "Task":'img src="./img/icons8-cart-24.png" alt="Icon',
    "Random Thought":'img src="./img/mind-11072805.png" alt="Icon',
    "Idea":'img src="./img/mind-11072805.png" alt="Icon',
    "New Feature":'img src="./img/mind-11072805.png" alt="Icon',
    "William Gaddis":'img src="./img/quote-4338295.png" alt="Icon',
    "Books":'img src="./img/book-7238832.png'
}
let tableitem = document.querySelector('tbody')

// function createTable(){
//     arr.map(item=>{       
//         let tr = document.createElement('tr');
//         tableitem.appendChild(tr);
//         for (let key in item){
//             let td = document.createElement('td');
//             td.classList.add(key)
            
//             td.textContent = item[key]
//             tr.appendChild(td)
//         }
   
   
//         const childNodes = tr.childNodes;
//         for (const item of childNodes){
//             if(item.classList =="name"){
               
//                 let icon = document.createElement('div');
//                 icon.classList='round-icon'
//                 let img = document.createElement('img');
//                 img.src ="./img/icons8-cart-24.png"
//                  img.alt = 'Опис зображення';
//                  span = document.createElement('span');
//                  span.textContent=item.textContent
//                  item.appendChild(icon)
//                  icon.appendChild(img)
//                  item.appendChild(span)
//                 console.log(item);
//             }
//         }
        
//     })
    
   
// }
let tr = document.createElement('tr');
console.log(tr);
function createTable(){
    
    arr.map(item=>{
        tableitem.appendChild(tr)
        tr.insertAdjacentHTML('afterend',
       
    `<td  class="name"><div class="round-icon">
                    <img src=${item.category[1]}></div>
                    <span> ${item.name}</span>
                </td>
				<td class="creasted">${item.created}</td>
				<td class="category">${item.category[0]}</td>
				<td class="contend">${item.content}</td>
				<td class="dates">&nbsp;</td>
				<td class="icons">
					<button><img src="./img/icons8-pen-40.png" width="26" class="pen" alt="Icon" ></button>
					<button class="download"><img src="./img/icons8-download-30.png" width="32" alt="Icon" class="downl" ></button>
					<button class="trashBl"><img src="./img/icons8-trashBl.png" alt="Icon"  class="trash"></button></td>
			</tr>`
    )})
    }
addEventListener("load", (event) => {
    createTable()
});