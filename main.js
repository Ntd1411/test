function selectMenuItem() {
    const menuItem = document.querySelectorAll('.menu');
    menuItem.forEach(item => {
        item.addEventListener('click', function () {
            menuItem.forEach(it => {
                it.classList.remove('active');
                this.classList.add('active');
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", selectMenuItem);

let currentIndex = 0; // Biến lưu vị trí slide hiện tại

function prevSlide(className) {
    const items = document.querySelectorAll(className);
    if (items.length === 0) return;

    if (currentIndex === 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex--;
    }

    items.forEach(element => {
        element.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
}

function nextSlide(className) {
    const items = document.querySelectorAll(className);
    if (items.length === 0) return;

    if (currentIndex === items.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    items.forEach(element => {
        element.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
}

document.getElementById('prev').addEventListener('click', () => prevSlide('.popular .block'));
document.getElementById('next').addEventListener('click', () => nextSlide('.popular .block'));

setInterval(() => nextSlide('.popular .block'), 5000);


let currentQuote = 0;

function changeQuote() {
     const btn = document.querySelectorAll('.quote .dot');
    currentQuote = (currentQuote + 1) % 3;
    btn.forEach((item , index)=> {
        if(currentQuote === index){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    document.querySelectorAll('.quote .item').forEach(item => {
        item.style.transform = `translateX(${-100 * currentQuote}%)`;
    });
}

let currentDot = 0;
function nextDot(btnClass, slideClass) {
    const btn = document.querySelectorAll(btnClass);
    btn.forEach((element, index) => {
        element.addEventListener('click', function () {
            currentDot = index;
            btn.forEach(bt => {
                bt.classList.remove('active');
            });
            this.classList.add('active');
            document.querySelectorAll(slideClass).forEach(item => {
                item.style.transform = `translateX(${-100 * currentDot}%)`;
            });
        });
    });


}
document.addEventListener("DOMContentLoaded", () => nextDot('.quote .dot', '.quote .item'));
setInterval(changeQuote, 4000);

document.addEventListener("DOMContentLoaded", ()=> nextDot('.blog .dots .dot', '.blog .list-bloglist'));


