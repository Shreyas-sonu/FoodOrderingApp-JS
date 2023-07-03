let input = document.querySelectorAll(".info-field");
let form = document.querySelector("form");
let radio = document.querySelector(".category")
let tbody = document.querySelector("tbody");
let veg = document.getElementById("veg");
let nonVeg = document.getElementById("non-veg");
let infoBlock = document.querySelector(".info-block");
let showCase = document.querySelector(".show-case");
let Name = [];
let Value = [];
let user = {};
let qty = document.querySelectorAll(".qty");
let total = document.querySelectorAll(".total");
let cash = document.querySelectorAll("#total")
let summary = document.getElementById("summary");
let aside = document.querySelector("aside")
let wle = document.getElementById("wle")


let counter =1
let inc = e => {
  e.previousSibling.innerText=Number(e.previousSibling.innerText)+1;
}
let dec = e => {
  if (e.nextSibling.innerText>0) {
    e.nextSibling.innerText = Number(e.nextSibling.innerText) - 1;
  }
  else {
    return null;
  }
}
qty.forEach((e) => {
  e.addEventListener("click", e => {
        if (e.target.childNodes.length>=3) {
            e.cancelBubble();
        }
    if (e.target.innerText == "Add") {
      e.target.style.display = "none";
    }
    e.target.parentNode.nextSibling.nextSibling.innerText=
    Number(e.target.parentNode.previousSibling.previousSibling.innerText)*
      Number(e.target.parentNode.childNodes[1].innerText)
      let abc = 0;
    total.forEach(e => {
      abc += Number(e.innerText);
      cash[0].innerText = abc;
      cash[1].innerText = abc;
    });
    console.dir(e.target.parentNode.parentNode);
    let i = Number(e.target.parentNode.childNodes[1].innerText)
    if (i >= 1) {
    summary.innerHTML += `<li><span>${e.target.parentNode.parentNode.childNodes[5].innerText}</span></li>`;
    }
  })
})

form.addEventListener("submit", e => {
  e.preventDefault();
  input.forEach(e => {
    Name.push(e.name);
    Value.push(e.value);
  });
  console.log(Name);
    console.log(Value);
    Name.forEach((element, index) => {
      user[element] = Value[index];
    });
  console.log(user)
  window.localStorage.setItem('orders',[1,2,3])
  let a = window.localStorage.getItem("orders");
  console.log(a);
    // window.localStorage.setItem("orders",newOrder)
  wle.innerHTML= `Welcome ${user.Name}`
  form.style.display = "none";
  showCase.style.visibility = "visible";
});



radio.addEventListener("change", e => {
      veg.style.display="none"
  nonVeg.style.display = "none"
  aside.style.display="block"

    if (e.target.value === "veg") {
      veg.style.display = "block";
  aside.style.display = "none";
    }
    else if (e.target.value === "nonVeg") {
      nonVeg.style.display = "block";
  aside.style.display = "none";
    }
  })

