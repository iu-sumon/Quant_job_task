let myData = [
    {

        "name": "AAPL",
        "img": "https://i.ibb.co/cQQyRy9/right-arrow.png",

        "price": "8014.00",
        "sub_change": "-494.60-18%",

        "change": "-494.60",
        "sub_price": "8014.00-18%",

        "percentage_change": "-18%",
        "price_change": "8014.00-494.60",

        "v": "123",
        "t": "123",
        "h": "123",
        "l": "123",
        "c": "#fb3364"
    },
    {

        "name": "GOOG",
        "img": "https://i.ibb.co/Qv3y1CV/left-arrow.png",
        "price": "1014.00",
        "sub_change": "49.60+2.5%",
        "change": "+49.60",
        "sub_price": "1014.00+2.5%",

        "percentage_change": "+2.5%",
        "price_change": "1014.0049.60",

        "v": "123",
        "t": "123",
        "h": "123",
        "l": "123",
        "c": " #0ba589"
    },
    {

        "name": "IXIC",
        "img": "https://i.ibb.co/cQQyRy9/right-arrow.png",
        "price": "5018.00",
        "sub_change": "00%",
        "change": "0",
        "sub_price": "5018.000%",
        "percentage_change": "0%",
        "price_change": "5018.000",
        "v": "123",
        "t": "123",
        "h": "123",
        "l": "123",
        "c": "#8e9291"
    },
    {

        "name": "DIX",
        "img": "https://i.ibb.co/Qv3y1CV/left-arrow.png",
        "price": "2014.00",
        "sub_change": "+394.60+18%",
        "change": "+394.60",
        "sub_price": "2014.00+18%",
        "percentage_change": "+18%",
        "price_change": "2014.00-394.60",
        "v": "123",
        "t": "123",
        "h": "123",
        "l": "123",
        "c": " #0ba589"
    }
]

let click = 0;
var table = document.getElementById('table_body')
let changeable_text = document.getElementById('price')

function countClick() {

    click += 1;
    if (click == 3) {
        click = 0
    }
    table.innerHTML = ''
    tdHandler(click)
    buildTable(myData, click)


};



document.getElementById('price').addEventListener('click', () => {
    if (click == 0) {
        changeable_text.innerText = 'Change'
    }
    else if (click == 1) {
        changeable_text.innerText = '%Change'
    }
    else {
        changeable_text.innerText = 'Price'
    }
})



buildTable(myData, click)

function buildTable(data, t) {
console.log(t);
    for (var i = 0; i < data.length; i++) {
        var row = `<tr id="tr">

        <td>
            
             ${data[i].name}
             <div class="name_subInfo">
             <p>V:${data[i].v}</p>
             <p>T:${data[i].t}</p>
             <p>H:${data[i].h}</p>
             <p>L:${data[i].l}</p>
             </div>
           
       </td>

        <td>
           
           <img src="${data[i].img}" alt="">

        </td>

     <td  onclick="countClick()">
<div class="last_td"> 

<p class="all_buttons" style="background:${data[i].c};">

${t == 0 ? data[i].price
                : t == 1 ? data[i].change : data[i].percentage_change
            }
</p>

<p class="sub_text">
${t == 0 ? data[i].sub_change
                : t == 1 ? data[i].sub_price : data[i].price_change
            }
</p></div>
    
    </td > 
</tr >
        `
        table.innerHTML += row
    }

}

function tdHandler(c) {

    let getTd = document.querySelectorAll(".last_td")


    for (i = 0; i < getTd.length; i++) {

        getTd[i].addEventListener('click', () => {

            if (c == 0) {
                changeable_text.innerText = 'Change'


            }
            else if (c == 1) {
                changeable_text.innerText = '%Change'



            }
            else {
                changeable_text.innerText = 'Price'



            }

        })
    }

}
