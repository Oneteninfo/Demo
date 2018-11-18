function getStyle(ele, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[prop];
    } else {
        return ele.currentStyle[prop];
    }
}
function startMove(obj, json, callback) {
    clearInterval(obj.timer);
    var speed, cur;
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var prop in json) {
            if (prop == 'opacity') {
                cur = parseFloat(getStyle(obj, prop));
                speed = ((json[prop] - cur) * 100) / 7;
            } else {
                cur = parseInt(getStyle(obj, prop));
                speed = (json[prop] - cur) / 7;
            }
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (prop == 'opacity') {
                obj.style[prop] = cur + (speed / 100);
            } else {
                obj.style[prop] = cur + speed + 'px';
            }
            if (cur != json[prop]) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback() : '';
        }
    }, 30);
}
var timer = null;
var sliderPage = document.getElementsByClassName('sliderPage')[0];
var moveWidth = sliderPage.children[0].offsetWidth;
var num = sliderPage.children.length - 1;
var leftBtn = document.getElementsByClassName('leftBtn')[0];
var rightBtn = document.getElementsByClassName('rightBtn')[0];
var lock = true;
var oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');
var index = 0;
leftBtn.onclick = function () {
    autoMove('right->left');
}
rightBtn.onclick = function () {
    autoMove('left->right');
}
function autoMove(direction) {
    if(lock) {
        lock = false;
        clearTimeout(timer);
        if (!direction || direction == 'left->right') {
            index++;
            startMove(sliderPage, { left: sliderPage.offsetLeft - moveWidth }, function () {
                if (sliderPage.offsetLeft == - num * moveWidth) {
                    sliderPage.style.left = '0px';
                    index = 0;
                }
                timer = setTimeout(autoMove, 2500);
                changeIndex(index);
                lock = true;
            });
        } else if (direction == 'right->left') {
            if (sliderPage.offsetLeft == 0) {
                sliderPage.style.left = - num * moveWidth + 'px';
                index = num;
            }
            index--;
            startMove(sliderPage, { left: sliderPage.offsetLeft + moveWidth }, function () {
                timer = setTimeout(autoMove, 2500);
                changeIndex(index);
                lock = true;
            })
        }
    }
    }
    function changeIndex(_index){
        for(var i = 0;i < oSpanArray.length;i++){
            oSpanArray[i].className = ' ';    
        }
        oSpanArray[_index].className = 'active';
    }
    for (var i = 0; i < oSpanArray.length; i++) {
        (function(myIndex) {
            oSpanArray[i].onclick = function () {
                lock = false;
                clearTimeout(timer);
                index = myIndex;
                startMove(sliderPage,{left : - index * moveWidth}, function() {
                    lock = true; 
                    timer = setTimeout(autoMove, 2500);
                    changeIndex(index);
            })
            }
        }(i))
    }
   
timer = setTimeout(autoMove, 2500);


