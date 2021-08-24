let point = 0;

window.onscroll = function showHeader() {
    console.log(window.pageYOffset);
    var header = document.querySelector('.header')

    if (window.pageYOffset > 300) {
        header.classList.add('header-fixed');
        header.classList.remove('header-top');
    }
    else if (window.pageYOffset < 10) {
        header.classList.remove('header-fixed');
        header.classList.add('header-top');
    }
}

window.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset;
    var list = document.querySelectorAll('.section')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el, i) {
        var x = 300;
        if(window.innerWidth > 1366) {
            x = 600;
        }
        else if (window.innerWidth > 1920) {
            x = 1000;
        }

        if (el.offsetTop - x - document.querySelector('.header').clientHeight <= scrollDistance) {
            var list1 = document.querySelectorAll('.link')
            var listArray1 = Array.prototype.slice.call(list1);
            listArray1.forEach(function (el) {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            });
            var list2 = document.querySelectorAll('.link-line')
            var listArray2 = Array.prototype.slice.call(list2);
            listArray2.forEach(function (el) {
                if (el.classList.contains('active-line')) {
                    el.classList.remove('active-line')
                }
            });
            // document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            // var nav = document.querySelectorAll('.nav-li');
            // var listArray = Array.prototype.slice.call(nav);
            // console.log("listNav " + listArray[i]);
            // document.querySelectorAll('.nav-li')[i].querySelector('hr').classList.add('active-line');
            var elClass = '.link' + i;
            var elLineClass = '.line' + i;
            document.querySelector(elClass).classList.add('active');
            document.querySelector(elLineClass).classList.add('active-line');

            if (i == 0) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress1')
            }
            else if (i == 1) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress2')
            }
            else if (i == 2) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress3')
            }

            else if (i == 3) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress4')
            }
            else if (i == 4) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress5')
            }

            else if (i == 5) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress6')
            }

            else if (i == 6) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress7')
            }
        }
    })
})

function clearClass() {
    let el = document.querySelector('.image-progress');

    if (el.classList.contains('image-progress1')) {
        el.classList.remove('image-progress1');
        return 0;
    }

    if (el.classList.contains('image-progress2')) {
        el.classList.remove('image-progress2');
        return 0;
    }

    if (el.classList.contains('image-progress3')) {
        el.classList.remove('image-progress3');
        return 0;
    }

    if (el.classList.contains('image-progress4')) {
        el.classList.remove('image-progress4');
        return 0;
    }

    if (el.classList.contains('image-progress5')) {
        el.classList.remove('image-progress5');
        return 0;
    }

    if (el.classList.contains('image-progress6')) {
        el.classList.remove('image-progress6');
        return 0;
    }

    if (el.classList.contains('image-progress7')) {
        el.classList.remove('image-progress7');
        return 0;
    }

    if (el.classList.contains('image-progress8')) {
        el.classList.remove('image-progress8');
        return 0;
    }
}

function hoverButton() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./images/book-white.svg"
    })
}

function hoverButtonOut() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./images/book-orange.svg"
    })
}

function hoverButtonModal() {
    var list = document.querySelectorAll('.btn')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn');
        el.classList.add('btn-active');
        var list1 = document.querySelectorAll('.btn-p-not-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-not-active')
            el.classList.add('btn-p-active')
        })
    })
}

function hoverButtonModalOut() {

    var list = document.querySelectorAll('.btn-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn-active');
        el.classList.add('btn');

        var list1 = document.querySelectorAll('.btn-p-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-active')
            el.classList.add('btn-p-not-active')
        })
    })
}

function showModal() {
    var page = document.querySelector('html');
    var list = document.querySelectorAll('.modal-window')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('modal')) {
            el.classList.remove('modal');
            el.classList.add('modal-off');
            page.classList.remove('scroll-off')

        }
        else if (el.classList.contains('modal-off')) {
            el.classList.remove('modal-off');
            el.classList.add('modal');
            page.classList.add('scroll-off')
        }
    })
}

// function mapPoint(element) {
//     document.querySelectorAll('.list-active').forEach((el) => {
//         if (el.classList.contains('list-active')) {
//             el.classList.remove('list-active');
//         }
//     });
//     element.classList.add('list-active');
//     point = parseInt(element.id[4]);
//     console.log(element.id[4]);
//     showMapInfo(element.id);
// }

function showPopApp(el) {


    if (window.screen.width >= 1110) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = '0px';
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "3,3 трлн рублей";
                document.querySelector('.info-popapp-text').innerHTML = "Данные BusinesStat, Росстат.";
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "1,34 трлн рублей";
                document.querySelector('.info-popapp-text').innerHTML = "Данные IQVIA, отчет рынка фармацевтики.";
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СРО";
                document.querySelector('.info-popapp-text').innerHTML = "Перечень основных СРО российского рынка представлен на сайте Ассоциации организаций по клиническим исследованиям (АОКИ, <a href='http://acto-russia.org' target = '_blank'>http://acto-russia.org</a>).";
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = " Федеральная служба по контролю в сфере здравоохранения.";
                document.querySelector('.info-popapp-text').innerHTML = "Перечень ЛС и КИ указан на сайте <a href='http://grls.rosminzdrav.ru/Default.aspx' target = '_blank'>http://grls.rosminzdrav.ru/Default.aspx</a>.";
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Ведение фармацевтической деятельности";
                document.querySelector('.info-popapp-text').innerHTML = "Требования по лицензированию регулируются Федеральным законом №99-ФЗ от 04.05.2011.";
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№105-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = 'Федеральный закон от 03.04.2020 №105-ФЗ «О внесении изменений в статью 15.1 Федерального закона»Об информации, информационных технологиях и о защите информации"» и Федеральный закон «Об обращении лекарственных средств».';
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Распоряжения Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "На текущую дату действует перечень на 2020 год на основании Распоряжения Правительства РФ от 12 октября 2019 г. №2406-р.";
                break;
            case 'h':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№134-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = 'Федеральный закон от 06.06.2019 N 134-ФЗ «О внесении изменений в Федеральный закон "Об обращении лекарственных средств" в части государственного регулирования цен на лекарственные препараты, включенные в перечень жизненно необходимых и важнейших лекарственных препаратов».';
                break;
            case 'i':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Постановление Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1683 от 16 декабря 2019 г.";
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№223-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О закупках товаров, работ, услуг отдельными видами юридических лиц» от 18.07.2011 N223-ФЗ.";
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№44-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд» от 05.04.2013 N44-ФЗ.";
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СПИК";
                document.querySelector('.info-popapp-text').innerHTML = "Специальный инвестиционный контракт. Актуальные правила установлены Постановлением Правительства РФ №1048 от 16 июля 2020 г.";
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Субсидии";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1464 от 16 ноября 2019 г.";
                break;
        }
    }

    if (window.screen.width < 1110) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = '0px';
                document.querySelector('.info-popapp').style.top = '0px';
                document.querySelector('html').classList.remove('scroll-off');
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "3,3 трлн рублей";
                document.querySelector('.info-popapp-text').innerHTML = "Данные BusinesStat, Росстат.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "1,34 трлн рублей";
                document.querySelector('.info-popapp-text').innerHTML = "Данные IQVIA, отчет рынка фармацевтики.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СРО";
                document.querySelector('.info-popapp-text').innerHTML = "Перечень основных СРО российского рынка представлен на сайте Ассоциации организаций по клиническим исследованиям (АОКИ, <a href='http://acto-russia.org' target = '_blank'>http://acto-russia.org</a>).";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = " Федеральная служба по контролю в сфере здравоохранения.";
                document.querySelector('.info-popapp-text').innerHTML = "Перечень ЛС и КИ указан на сайте <a href='http://grls.rosminzdrav.ru/Default.aspx' target = '_blank'>http://grls.rosminzdrav.ru/Default.aspx</a>.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Ведение фармацевтической деятельности";
                document.querySelector('.info-popapp-text').innerHTML = "Требования по лицензированию регулируются Федеральным законом №99-ФЗ от 04.05.2011.";
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№105-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = 'Федеральный закон от 03.04.2020 №105-ФЗ «О внесении изменений в статью 15.1 Федерального закона»Об информации, информационных технологиях и о защите информации"» и Федеральный закон «Об обращении лекарственных средств».';
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Распоряжения Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "На текущую дату действует перечень на 2020 год на основании Распоряжения Правительства РФ от 12 октября 2019 г. №2406-р.";
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'h':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№134-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = 'Федеральный закон от 06.06.2019 N 134-ФЗ «О внесении изменений в Федеральный закон "Об обращении лекарственных средств" в части государственного регулирования цен на лекарственные препараты, включенные в перечень жизненно необходимых и важнейших лекарственных препаратов».';
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'i':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Постановление Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1683 от 16 декабря 2019 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№223-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О закупках товаров, работ, услуг отдельными видами юридических лиц» от 18.07.2011 N223-ФЗ.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№44-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд» от 05.04.2013 N44-ФЗ.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СПИК";
                document.querySelector('.info-popapp-text').innerHTML = "Специальный инвестиционный контракт. Актуальные правила установлены Постановлением Правительства РФ №1048 от 16 июля 2020 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Субсидии";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1464 от 16 ноября 2019 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
        }

    }
}


function openNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function closeNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function openContent(el) {
    let id = el.id;
    if (id === "fz-44") {
        document.querySelector('#fz-44-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-44-button').classList.toggle("tab-img-close")
    } else if (id === "fz-223") {
        document.querySelector('#fz-223-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-223-button').classList.toggle("tab-img-close")
    } else if (id === "fz-115") {
        document.querySelector('#fz-115-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-115-button').classList.toggle("tab-img-close")
    } else if (id === "factor1") {
        document.querySelector('#factor1-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor1-button').classList.toggle("tab-img-close")
    } else if (id === "factor2") {
        document.querySelector('#factor2-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor2-button').classList.toggle("tab-img-close")
    } else if (id === "factor3") {
        document.querySelector('#factor3-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor3-button').classList.toggle("tab-img-close")
    } else if (id === "factor4") {
        document.querySelector('#factor4-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor4-button').classList.toggle("tab-img-close")
    }
}



// function left() {
//     console.log(point);
//     if (point === 0 || point === 1) {
//         return 0;
//     } else if (point > 1) {
//         point = point - 1;
//         mapPointActive('list${point}');
//         showMapInfo('list${point}')
//     }
// }

// function right() {
//     console.log(point);
//     if (point === 8) {
//         return 0;
//     } else if (point < 8) {
//         point = point + 1;
//         mapPointActive('list${point}');
//         showMapInfo('list${point}')
//     }
// }

// function mapPointActive(cls) {

//     document.querySelectorAll('.list-active').forEach((el) => {
//         if (el.classList.contains('list-active')) {
//             el.classList.remove('list-active');
//         }
//     });
//     document.querySelectorAll('.map-l').forEach((el) => {
//         if (el.classList.contains(cls)) {
//             el.classList.add('list-active');
//         }
//     });
// }