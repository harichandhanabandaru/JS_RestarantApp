const tables=[
    {id:"t1",
        name:"Table -1",
     bill:0,
     totalitems:0,
     drop:"drop1",
     },
     {id:"t2",
         name:"Table -2",
     bill:0,
     totalitems:0,
     drop:"drop2",
     },
     {id:"t3",
         name:"Table -3",
     bill:0,
     totalitems:0,
     drop:"drop3",
     }
];



const items=[
    {   id:1,
        name:"Cheese Garlic Bread ",
        price:50,
        quantity:1,
        itembill:50,
        type:"starter",
        drag:"drag1"
    },
    {
        id:2, 
        name:"Butter naan",
        price:100,
        quantity:1,
        itembill:100,
        type:"main",
        drag:"drag2"
        
    },
    {
        id:3,
        name:"Honey country fries with herbs and chilli flakes",
        price:100,
        quantity:1,
        itembill:100,
        type:"starter",
        drag:"drag3"
        
    },
    {
        id:4,
        name:"French fries with cheese and friench fries",
        price:100,
        quantity:1,
        itembill:100,
        type:"starter",
        drag:"drag4"
        
    },
    {
        id:5,
        name:"lemon Tea",
        price:10,
        quantity:1,
        itembill:10,
        type:"beverage",
        drag:"drag5"
        
    },
    {
        id:6,
        name:"Green Tea",
        price:100,
        quantity:1,
        itembill:100,
        type:"beverage",
        drag:"drag6"
        
    }
    ,
    {
        id:7,
        name:"Burger",
        price:150,
        quantity:1,
        itembill:150,
        type:"main",
        drag:"drag7"
        
    }
    ,
    {
        id:8,
        name:"Pizza",
        price:100,
        quantity:1,
        itembill:100,
        type:"main",
        drag:"drag8"
        
    }
]
console.log("hhhhhhh")
console.log(screen.width )
console.log(screen.height)

function searchfun()
{
    let filter=document.getElementById('myInput').value.toUpperCase();
    let myTable=document.getElementById('myItems');
    let tr1=myTable.getElementsByTagName('tr');

    

    console.log("kkkkkkkkkkkkkkkkkkkk")
    for(var i=0;i<tr1.length;i++)
    {console.log("ppppp")
        var tr1c=tr1[i]
        console.log(tr1c)
        var tr1cc=tr1[i].childNodes
        console.log(tr1cc)

        var tr1ccc=tr1cc[1]
        console.log(tr1ccc)

        var tr1cccc=tr1ccc.childNodes
        console.log(tr1cccc)

        var tr1ccccc=tr1cccc[1]
        console.log(tr1ccccc)

        var tr1cccccc=tr1ccccc.getElementsByTagName('h1')
        console.log(tr1cccccc)

        var tr1cccccc=tr1ccccc.childNodes
        console.log(tr1cccccc)

        var tr1ccc2=tr1cccccc[1]
        console.log(tr1ccc2)

        var tr1ccc3=tr1ccc2.childNodes
        console.log(tr1ccc3)

        var tr1ccc4=tr1ccc3[1].innerHTML
        console.log(tr1ccc4)

        

        console.log(filter)

        if(tr1ccc4.toUpperCase().indexOf(filter)>-1)
        {
          tr1[i].style.display=""
        }
        else{
           tr1[i].style.display="none"
        }


        
    }
   
}
function searchTablefun()
{
    
    let filter=document.getElementById('myTableInput').value.toUpperCase();
    let myTable=document.getElementById('myTable');
    let tr1=myTable.getElementsByTagName('tr');
   
    for(var i=0;i<tr1.length;i++)
    {
        var tr1c=tr1[i]
        console.log(tr1c)
        var tr1cc=tr1[i].childNodes
        console.log(tr1cc)

        var tr1ccc=tr1cc[1]
        console.log(tr1ccc)

        var tr1cccc=tr1ccc.childNodes
        console.log(tr1cccc)

        var tr1ccccc=tr1cccc[1]
        console.log(tr1ccccc)

        var tr1cccccc=tr1ccccc.getElementsByTagName('h1')
        console.log(tr1cccccc)

        var tr1cccccc=tr1ccccc.childNodes
        console.log(tr1cccccc)

        var tr1ccc2=tr1cccccc[1]
        console.log(tr1ccc2)

        var tr1ccc3=tr1ccc2.childNodes
        console.log(tr1ccc3)

        var tr1ccc4=tr1ccc3[1].childNodes
        console.log(tr1ccc4)


        var tr1ccc5=tr1ccc4[1].childNodes
        console.log(tr1ccc5)

        var tr1ccc6=tr1ccc5[1].childNodes
        console.log(tr1ccc6)

        var tr1ccc7=tr1ccc6[0].innerHTML
        console.log(tr1ccc7)


        console.log("filter"+ filter)

        if(tr1ccc7.toUpperCase().indexOf(filter)>-1)
        {
          tr1[i].style.display=""
        }
        else{
           tr1[i].style.display="none"
        }


        
    }
    
}

function popup(fun1)
{
    

    console.log(items)
    console.log(items[1])
    console.log(items.push({"itemsdf":1,"item:":0}))
    console.log(items)




    var a1 = [];
    a1 = JSON.parse(sessionStorage.getItem(1)) || [];
    for(var i=0;i<items.length;i++){
        if(a1.includes(items[i],0))
        {
            alert("hello "+items[i])
        }
        else{
    a1.push(items[i]);
    alert(a1);  
    sessionStorage.setItem(1, JSON.stringify(a1));
        }
    }


     var kk=[]
    kk=JSON.parse(sessionStorage.getItem(1));
    console.log(kk)
    for(var i=0;i<kk.length;i++)
    {
        console.log("hello ")
        console.log(kk[i]);
        console.log(kk[i].price)
        kk[i].price=66
         sessionStorage.setItem(1, JSON.stringify(kk));
         console.log(kk[i]);

   
     }
    console.log(JSON.parse(sessionStorage.getItem(1)))


    }


    
    


function demo(tablenum,i,quantity1,price)
{
   
    var temptable=[]
     temptable=JSON.parse(sessionStorage.getItem(Number(tablenum))) || [];
     console.log(temptable[i].quantity)

   
     var tt="itemquantity"+i
     var inital=temptable[i].quantity
     temptable[i].quantity=Number(document.getElementById(tt).value);
     var end=temptable[i].quantity

     var diff=end-inital
     var tableitem=sessionStorage.getItem(tablenum+"1")
     tableitem=Number(tableitem)+Number(diff)
     sessionStorage.setItem(tablenum+"1",tableitem);

     var tablebill=sessionStorage.getItem(tablenum+"2")
     tablebill=Number(tablebill)+Number(diff)*Number(price)
     sessionStorage.setItem(tablenum+"2",tablebill);



     var tableidd="tablebill"+ tablenum.toString();
     document.getElementById(tableidd).innerHTML=sessionStorage.getItem(Number(tablenum)+"2");


    


     var quan=temptable[i].quantity;


     temptable[i].itembill=(quan*(temptable[i].price))
     var ttt="itembill"+i
   document.getElementById(ttt).innerHTML=(temptable[i].itembill);

     sessionStorage.setItem(Number(tablenum),JSON.stringify(temptable));

    

     
}
function deleteitem(tablenum,i)
{
    var temptable=[]
    alert("Item deleted")
     temptable=JSON.parse(sessionStorage.getItem(Number(tablenum))) || [];

    var price=temptable[i].price
    var quantity=temptable[i].quantity
    var totalbillreduce=Number(price)*Number(quantity)
    var tablebill=sessionStorage.getItem(Number(tablenum)+"2")

    tablebill=Number(tablebill)-totalbillreduce

    var tableit=sessionStorage.getItem(Number(tablenum)+"1")
    tableit=Number(tableit)-Number(quantity)

    sessionStorage.setItem(Number(tablenum)+"2",tablebill)
    sessionStorage.setItem(Number(tablenum)+"1",tableit)





     temptable.splice(i,1);
     sessionStorage.setItem(Number(tablenum),JSON.stringify(temptable));

     var tt="tablerow"+i
     document.getElementById(tt).remove();

 


    document.getElementById('hellopac').innerHTML=``;

     itemsselecteddetails(tablenum.toString())
     
   
}




var tableadd= document.getElementById('myTable')
var t1;
for(var i=0;i<tables.length;i++)
{
   
   t1=JSON.parse(sessionStorage.getItem(tables[i].id));

    
var p=11+(i*10)
var q=12+(i*10)

    var tableitems=sessionStorage.getItem(p)||0
    var tablebill=sessionStorage.getItem(q)||0



    

 var row2=`<tr>
            <td border="2px">
                    <div class="tablebox">
                        <div class="tables" ondrop="${tables[i].drop}(event)" ondragover="allowDrop(event)" >
                        <div class="title">
                        <div id="tname">
                        <button class="modal-btn"><h1 >${tables[i].name}</h1></buton>
                        </div>
                        </div>
                        <h3 id="tableid" hidden> ${i+1}</h3>
                        <div class="des">
                        </div>
                        Rs. <span id="tbill"> ${tablebill}</span> | Total items: <span id="ttitems"> ${tableitems}</span>    

                    </div>    
            </td>
        </tr>
        <div class="modal-bg">
        <div class="modal">
        <span id="hellopac1" style="color:white" >${i+1}
         </span> 
        <span class="modal-close">x</span>
        </div>
        </div>
    `;

   

                 
                 
tableadd.innerHTML += row2;
    
} 



var itemtable = document.getElementById('myItems');
for(var i=0;i<items.length;i++)
{
    var row2= `
    <tr>
        <td>
            <div class="itembox">
                <div class="items" draggable="true" ondragstart="${items[i].drag}(event)">
                <div class="title">
                    <h2>${items[i].name}</h2>
                    <h5 hidden>${items[i].type}</h5>
                </div>
                <div class="des">
                    <p>${items[i].price}</p>
                </div>
            </div>
        </td>
 </tr>
 `     
    itemtable.innerHTML += row2;    
}

function allowDrop(ev) {
    ev.preventDefault();
    }

function drop1(ev) {
    console.log("inside dropped table 1");
    var itemid = ev.dataTransfer.getData("itemid");
    console.log("item dragged ")
    console.log(items[itemid-1]);

    var temp = [];
    temp = JSON.parse(sessionStorage.getItem(1)) || [];
    var temptable=[];
    temptable = JSON.parse(sessionStorage.getItem("t1")) || []; 

    
    var tableitems = (sessionStorage.getItem(11)) || {"tableitems":0}; 
    var tablebills = (sessionStorage.getItem(12)) || {"tablebills":0};


    if(temp.length==0)
    {
        
        temp.push(items[itemid-1])
        sessionStorage.setItem(1, JSON.stringify(temp));

        sessionStorage.setItem(11,items[itemid-1].quantity);
        sessionStorage.setItem(12,items[itemid-1].price );
    }
    else
    {
       
            flag=0
            number=0
            for(var j=0;j<temp.length;j++)
            {
                if(items[itemid-1].id === temp[j].id)
                {
                    flag=1
                    number=j
                }

            }
            if(flag==1)
              { 
                    
                    temp[number].quantity=temp[number].quantity+1
                    temp[number].itembill=temp[number].quantity*temp[number].price

                    
                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t1", JSON.stringify(temptable));

                  

                    sessionStorage.setItem(1, JSON.stringify(temp));

                    var tableitems=sessionStorage.getItem(11)
                    var tablebill=sessionStorage.getItem(12)
 
                    tableitems=Number(tableitems)+1
                    tablebill=Number(tablebill)+items[itemid-1].price
                    sessionStorage.setItem(11,tableitems)
                    sessionStorage.setItem(12,tablebill)

                
              }
                else{
                    temp.push(items[itemid-1])
                    sessionStorage.setItem(1, JSON.stringify(temp));

                    

                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t1", JSON.stringify(temptable));

                   var tableitems=sessionStorage.getItem(11)
                   var tablebill=sessionStorage.getItem(12)

                   tableitems=Number(tableitems)+1
                   tablebill=Number(tablebill)+items[itemid-1].price
                   sessionStorage.setItem(11,tableitems)
                   sessionStorage.setItem(12,tablebill)
                    

                }
                  
                
    }
    location.reload();
}


function drop2(ev) {
    console.log("inside dropped table 2");
    var itemid = ev.dataTransfer.getData("itemid");
   

    var temp = [];
    temp = JSON.parse(sessionStorage.getItem(2)) || [];
    var temptable=[];
    temptable = JSON.parse(sessionStorage.getItem("t2")) || []; 

    
    var tableitems = (sessionStorage.getItem(21)) || {"tableitems":0}; 
    var tablebills = (sessionStorage.getItem(22)) || {"tablebills":0};


    if(temp.length==0)
    {
        
        temp.push(items[itemid-1])
        sessionStorage.setItem(2, JSON.stringify(temp));

        sessionStorage.setItem(21,items[itemid-1].quantity);
        sessionStorage.setItem(22,items[itemid-1].price );
    }
    else
    {
       
            flag=0
            number=0
            for(var j=0;j<temp.length;j++)
            {
                if(items[itemid-1].id === temp[j].id)
                {
                    flag=1
                    number=j
                }

            }
            if(flag==1)
              { 
                   
                    temp[number].quantity=temp[number].quantity+1
                    temp[number].itembill=temp[number].quantity*temp[number].price

                    
                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t2", JSON.stringify(temptable));

                    document.getElementById("tbill").innerHTML=temptable.bill;
                    document.getElementById("ttitems").innerHTML=temptable.totalitems;


                    sessionStorage.setItem(2, JSON.stringify(temp));

                    var tableitems=sessionStorage.getItem(21)
                    var tablebill=sessionStorage.getItem(22)
 
                    tableitems=Number(tableitems)+1
                    tablebill=Number(tablebill)+items[itemid-1].price
                    sessionStorage.setItem(21,tableitems)
                    sessionStorage.setItem(22,tablebill)

                
              }
                else{
                    temp.push(items[itemid-1])
                    sessionStorage.setItem(2, JSON.stringify(temp));

                    

                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t2", JSON.stringify(temptable));

                   var tableitems=sessionStorage.getItem(21)
                   var tablebill=sessionStorage.getItem(22)

                   tableitems=Number(tableitems)+1
                   tablebill=Number(tablebill)+items[itemid-1].price
                   sessionStorage.setItem(21,tableitems)
                   sessionStorage.setItem(22,tablebill)
                    

                }
                  
                
    }
    location.reload();
}

function drop3(ev) {
    console.log("inside dropped table 3");
    var itemid = ev.dataTransfer.getData("itemid");
   

    var temp = [];
    temp = JSON.parse(sessionStorage.getItem(3)) || [];
    var temptable=[];
    temptable = JSON.parse(sessionStorage.getItem("t3")) || []; 

    
    var tableitems = (sessionStorage.getItem(31)) || {"tableitems":0}; 
    var tablebills = (sessionStorage.getItem(32)) || {"tablebills":0};


    if(temp.length==0)
    {
        
        temp.push(items[itemid-1])
        sessionStorage.setItem(3, JSON.stringify(temp));

        sessionStorage.setItem(31,items[itemid-1].quantity);
        sessionStorage.setItem(32,items[itemid-1].price );
    }
    else
    {
       
            flag=0
            number=0
            for(var j=0;j<temp.length;j++)
            {
                if(items[itemid-1].id === temp[j].id)
                {
                    flag=1
                    number=j
                }

            }
            if(flag==1)
              { 
                   
                    
                    temp[number].quantity=temp[number].quantity+1
                    temp[number].itembill=temp[number].quantity*temp[number].price

                    
                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t3", JSON.stringify(temptable));

                    document.getElementById("tbill").innerHTML=temptable.bill;
                    document.getElementById("ttitems").innerHTML=temptable.totalitems;


                    sessionStorage.setItem(3, JSON.stringify(temp));

                    var tableitems=sessionStorage.getItem(31)
                    var tablebill=sessionStorage.getItem(32)
 
                    tableitems=Number(tableitems)+1
                    tablebill=Number(tablebill)+items[itemid-1].price
                    sessionStorage.setItem(31,tableitems)
                    sessionStorage.setItem(32,tablebill)

                
              }
                else{
                    temp.push(items[itemid-1])
                    sessionStorage.setItem(3, JSON.stringify(temp));


                    temptable.bill=temptable.bill+temp[number].price
                    temptable.totalitems=temptable.totalitems+1
                    sessionStorage.setItem("t3", JSON.stringify(temptable));

                   var tableitems=sessionStorage.getItem(31)
                   var tablebill=sessionStorage.getItem(32)

                   tableitems=Number(tableitems)+1
                   tablebill=Number(tablebill)+items[itemid-1].price
                   sessionStorage.setItem(31,tableitems)
                   sessionStorage.setItem(32,tablebill)
                    

                }
                  
                
    }
    location.reload();
}




     

function drag1(ev){
    console.log("inside draggable1")
    var str=items[0].id;
    ev.dataTransfer.setData("itemid", str);
}

function drag2(ev){
    console.log("inside draggable2")
    var str=items[1].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag3(ev){
    console.log("inside draggable3")
    var str=items[2].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag4(ev){
    console.log("inside draggable4")
    var str=items[3].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag5(ev){
    console.log("inside draggable5")
    var str=items[4].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag6(ev){
    console.log("inside draggable6")
    var str=items[5].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag7(ev){
    console.log("inside draggable7")
    var str=items[6].id;
    ev.dataTransfer.setData("itemid", str);
}
function drag8(ev){
    console.log("inside draggable8")
    var str=items[7].id;
    ev.dataTransfer.setData("itemid", str);
}










function itemsselecteddetails(tablename)
{
   

    var tableadd1= document.getElementById('hellopac');

    if(typeof tablename=="string")
    {
       
        tablename=Number(tablename);
       
       
    }
    else{
       
    tablename=Number(document.getElementById('hellopac').innerHTML);

    }


    var temptable =[]
    temptable= JSON.parse(sessionStorage.getItem(Number(tablename))) || [];
    var row11=`
    <table>

    <thead> 
        <tr>
        <td colspan="5"><h1 style="background-color:blue;">Table- ${Number(tablename)}|Order Details</h1></td>
        </tr>
         <tr>
                  <th><label >Id</label>&nbsp; &nbsp;</th>
                  <th><label >ItemName</label>&nbsp; &nbsp;</th>
                  <th><label>TotalPrice</label>&nbsp;&nbsp;</th>
                  <th><label>Quantiy</label>&nbsp; &nbsp;</th>
                  <th><label >Delete<i class="fas fa-trash-alt" ></i></label></th>
         </tr>
         </thead>
        <tbody >`
        
       var row22=``;
for(var i=0;i<temptable.length;i++)
{
     var row21= `<tr id="tablerow${i}">
                                <td> ${i+1}</td>
                                <td> ${temptable[i].name}</td>
                                <td id="itembill${i}"> ${temptable[i].itembill}</td>
                                <td>  
                                 <input type="number" min="0" max="15" id="itemquantity${i}" 
                                 value="${temptable[i].quantity}"  
                                 onchange="demo(${tablename},${i},${temptable[i].quantity},${temptable[i].price})">
                                 </td>
                                <td > <p   onclick="deleteitem(${tablename},${i})">Delete</p></td>
                            </tr>`;


                            row22=row22+row21;

}
var tabletotalbill=sessionStorage.getItem(Number(tablename)+"2") ||0;
row33=` <tr ><td colspan="5"><h3>Total Bill:</h3><span id="tablebill${tablename}">${tabletotalbill}</span></td>
<td><p onclick="generatebill(${tablename})">Generate slip</p>
</tr>

</tbody></table>

`
tableadd1.innerHTML+=row11+row22+row33;

}

function generatebill(tablename)
{


document.getElementById('hellopac').innerHTML=``;

var tableadd1= document.getElementById('hellopac');

var temptable =[]
temptable= JSON.parse(sessionStorage.getItem(Number(tablename))) || [];
var row11=`
<table>

<thead> 
    <tr>
    <td colspan="5"><h1 style="background-color:blue;">Table- ${Number(tablename)}|Bill Slip</h1></td>
    </tr>
     <tr>
              <th><label >Id</label>&nbsp; &nbsp;</th>
              <th><label >ItemName</label>&nbsp; &nbsp;</th>
              <th><label>TotalPrice</label>&nbsp;&nbsp;</th>
              <th><label>Quantiy</label>&nbsp; &nbsp;</th>
     </tr>
     </thead>
    <tbody >`
    
   var row22=``;
for(var i=0;i<temptable.length;i++)
{
 var row21= `<tr id="tablerow${i}">
                            <td> ${i+1}</td>
                            <td> ${temptable[i].name}</td>
                            <td id="itembill${i}"> ${temptable[i].itembill}</td>
                            <td>  
                             ${temptable[i].quantity}  
                          </td>
                             </td>
                        </tr>`;


                        row22=row22+row21;

}
var tabletotalbill=sessionStorage.getItem(Number(tablename)+"2") ||0;
row33=` <tr ><td colspan="5"><h3>Total Bill:</h3><span id="tablebill${tablename}">${tabletotalbill}</span></td><td><p onclick="window.print()">Generate bill</p></td>
</tr>

</tbody></table>

`
tableadd1.innerHTML+=row11+row22+row33;
    
}


var modalBtn=document.querySelectorAll('.modal-btn'); //get element by class name
var modalBg=document.querySelectorAll('.modal-bg');
var modalClose=document.querySelectorAll('.modal-close');

var hellopac=document.querySelectorAll('#hellopac1');

console.log("modal number")
console.log(modalBtn)


for(var i=0;i<modalBtn.length;i++)
{
    let modalBtn1 = modalBtn[i];
    let modalBg1=modalBg[i];
    let modalClose1=modalClose[i];

    let hellopac1=hellopac[i];

    
modalBtn1.addEventListener('click',function(){

   
    modalBg1.classList.add('bg-active');


   
    hellopac1.setAttribute('id', 'hellopac');


     itemsselecteddetails(2,i)

   
});

modalClose1.addEventListener('click',function(){

    
    document.getElementById('hellopac').innerHTML=``;

    modalBg1.classList.remove('bg-active');


    hellopac1.setAttribute('id', 'hellopac1');

    location.reload();
  
});

}












