(function () {
    window.carousel = carousel;
    function carousel(JSON) {
        this._dom = $('#' + JSON.id);
        this._ul = null;
        this._ulList = null;
        this.width = JSON.width;
        this.height = JSON.height;
        this._leftBtn = null;
        this._rightBtn = null;
        this._idx = 0;
        this._circleOl = null;
        this._circleLi = null;
        this.changeCirclesCur;
        this._interval = JSON.interval;
        this.timer;
        this._imagesURLArr = JSON.images;
        this._pictureLength = JSON.images.length;
        this._animateDuration = JSON.animateDuration;
        this.init();
        this.bindEvent();
        this.autoPlay();
    }

    carousel.prototype.init = function () {
        this._ul = $('<ul></ul>');
        this._dom.append(this._ul);
        for (var i = 0; i < this._pictureLength; i++) {
            $("<li><img src = '" + this._imagesURLArr[i] + "'></li>").appendTo(this._ul);
        }
        this._ulList = this._ul.find("li");
        this._dom.css({ "position": "relative", "overflow": "hidden", "width": this.width, "height": this.height });
        this._ulList.css({ "position": "absolute", "top": 0, "left": this.width });
        this._ulList.eq(0).css("left", 0);
        this._leftBtn = $("<a href='javascript:;' class = 'leftBtn'></a>");
        this._rightBtn = $("<a href='javascript:;' class = 'rightBtn'></a>");
        this._leftBtn.appendTo(this._dom);
        this._rightBtn.appendTo(this._dom);
        this._circleOl = $("<ol class = 'circle'></ol>");
        this._circleOl.appendTo(this._dom);
        for (var i = 0; i < this._pictureLength; i++) {
            $("<li></li>").appendTo(this._circleOl);
        }
        this._circleLi = this._circleOl.find('li');
        this._circleLi.eq(0).addClass('cur');
    }

    carousel.prototype.bindEvent = function () {
        var that = this;
        $(".rightBtn").on("click", function () {
            if (that._ulList.is(":animated")) {
                return;
            }
            that.showNext();
        })
        $(".leftBtn").on("click", function () {
            if (that._ulList.is(":animated")) {
                return;
            }
            that.showPrev();
        })
        this._circleLi.click(function () {
            that.show($(this).index());
        })
        this._dom.mouseenter(function () {
            clearInterval(that.timer);
        })
        this._dom.mouseleave(function () {
            that.autoPlay();
        })
    }

    carousel.prototype.showNext = function () {
        this._ulList.eq(this._idx).animate({ "left": -this.width }, this._animateDuration);
        this._idx++;
        if (this._idx > this._pictureLength - 1) {
            this._idx = 0;
        }
        this._ulList.eq(this._idx).css("left", this.width).animate({ "left": 0 }, this._animateDuration);
        this.changeCirclesCur();
    }

    carousel.prototype.showPrev = function () {
        this._ulList.eq(this._idx).animate({ "left": this.width }, this._animateDuration);
        this._idx--;
        if (this._idx < 0) {
            this._idx = this._pictureLength - 1;
        }
        this._ulList.eq(this._idx).css("left", -this.width).animate({ "left": 0 }, this._animateDuration);
        this.changeCirclesCur();
    }

    carousel.prototype.show = function (num) {
        var old = this._idx;
        this._idx = num;
        if (this._idx > old) {
            this._ulList.eq(old).animate({ "left": -this.width }, this._animateDuration);
            this._ulList.eq(this._idx).css("left", this.width).animate({ "left": 0 }, this._animateDuration);
        } else if (this._idx < old) {
            this._ulList.eq(old).animate({ "left": this.width }, this._animateDuration);
            this._ulList.eq(this._idx).css("left", -this.width).animate({ "left": 0 }, this._animateDuration);
        }
        this.changeCirclesCur();
    }

    carousel.prototype.changeCirclesCur = function () {
        this._circleLi.eq(this._idx).addClass("cur").siblings().removeClass("cur");
    }
    
    carousel.prototype.autoPlay = function () {
        var that = this;
        this.timer = setInterval(function () {
            that.showNext();
        }, this._interval)
    }
}())
