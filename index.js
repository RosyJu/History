let leading = 0
let type = null
const spanLead = document.querySelectorAll('.lead')[0]
const lead = () => {
    leading++;
    spanLead.innerText = leading;
    if (leading = 3) {
        document.querySelectorAll('.leading')[0].style.display = 'none';
    }
}
const Dan = () => {
    type = 'radio';
    document.querySelectorAll('.body')[0].style.color = '';
    let randomNumber = Math.floor(Math.random() * 750);
    let num = radio[randomNumber];
    let myJson = 1
    document.querySelectorAll('.body')[0].innerHTML = `<div class="tit">${num.title}</div>`
    switch (myJson) {
        case 1 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='A'>A&nbsp;&nbsp;&nbsp;${num.a}</div></label>`
            if (myJson == Object.keys(num).length - 2) {
                break;
            } else {
                myJson++;
            };
        case 2 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='B'>B&nbsp;&nbsp;&nbsp;${num.b}</div></label>`
            if (myJson == Object.keys(num).length - 2) {
                break;
            } else {
                myJson++;
            };
        case 3 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='C'>C&nbsp;&nbsp;&nbsp;${num.c}</div></label>`
            if (myJson == Object.keys(num).length - 2) {
                break;
            } else {
                myJson++;
            };
        case 4 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='D'>D&nbsp;&nbsp;&nbsp;${num.d}</div></label>`
            if (myJson == Object.keys(num).length - 2) {
                break;
            } else {
                myJson++;
            };
        case 5 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='E'>E&nbsp;&nbsp;&nbsp;${num.e}</div></label>`
            if (myJson == Object.keys(num).length - 2) {
                break;
            } else {
                myJson++;
            };
        case 6 : 
            document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<label onchange='correct()'><div class="DanOption"><input type="radio" name="Dan" value='' id='F'>F&nbsp;&nbsp;&nbsp;${num.f}</div></label>`
            break;
    }
    document.querySelectorAll('.body')[0].innerHTML = document.querySelectorAll('.body')[0].innerHTML + `<div class='next' onclick='Dan()'><span>下一题</span></div><div>答案<span class='answer' style='display:none'>${num.answer}</span></div>`
}
const correct = () => {
    document.querySelectorAll('.answer')[0].style.display = 'inline'
    let answer = document.querySelectorAll('.answer')[0].innerHTML;
    let option = document.querySelectorAll('div.DanOption input[type="radio"]:checked')
    if (option[0].id.replace(/\s/g, "") == answer.replace(/\s/g, "")) {
        document.querySelectorAll('.body')[0].style.color = 'green';
    } else {
        document.querySelectorAll('.body')[0].style.color = 'red';
    }
}