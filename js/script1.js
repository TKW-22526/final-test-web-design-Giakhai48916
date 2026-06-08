const sanpham = [
    {id: 1,name: "totem",gia: "3 diamond",img: "../assets/Totem.jpg",chitiet: "sống sót sau 1 đòn chí mạng"},
    {id: 2,name: "enchanted golden apple",gia: "20 diamond",img: "../assets/enchantapple.gif",chitiet: "ăn vào no bụng"},
    {id: 3,name: "elytra",gia: "32 diamond",img: "../assets/Elytra.jpg",chitiet: "giúp người chơi bay"},
    {id: 4,name: "mace enchanted",gia: "67 diamond",img: "../assets/mace.gif",chitiet: "sát thương theo độ cao của người chơi"},
    {id: 5,name: "light",gia: "67 iron",img: "../assets/End Rod.jpg",chitiet: "toy"},
];
function inanh(){
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","container");
    for(let i = 0; i < sanpham.length; i++)
    {
        const d = document.createElement("div");
        d.setAttribute("class","card");
        const img = document.createElement("img");
        img.src = sanpham[i].img;
        img.setAttribute("class","img");
        d.appendChild(img);
        const p = document.createElement("p");
        p.innerHTML = `${sanpham[i].id}. ${sanpham[i].name} <br> giá: ${sanpham[i].gia}`;
        d.appendChild(p);
        const button = document.createElement("button");
        button.innerText = "Mua";
        button.onclick = function()
        {
            alert(`Bạn đã mua ${sanpham[i].name} với giá ${sanpham[i].gia}`);
        };
        d.appendChild(button);
        const button1 = document.createElement("button");
        button1.innerText = "Chi tiết";
        button1.onclick = function()
        {
            alert(sanpham[i].chitiet);            
        };
        d.appendChild(button1);
        myDiv.appendChild(d);
    }
    document.body.appendChild(myDiv);
}