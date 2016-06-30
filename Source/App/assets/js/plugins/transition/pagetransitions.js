var PageTransitions = (function () {
    var $main = $('#mainContainer'),
		$pages = $main.children('div.pt-page'),
		$iterate = $('.transition'),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
        $nextBtn = $(".btnnext"),
        $prevBtn = $(".btnprev"),
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
		    'WebkitAnimation': 'webkitAnimationEnd',
		    'OAnimation': 'oAnimationEnd',
		    'msAnimation': 'MSAnimationEnd',
		    'animation': 'animationend'
		},
		animations = {
		    max: 2
		},
		animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
		support = Modernizr.cssanimations;
    function resetIterate() {
        $iterate = $('.transition');
    }
    function initCall() {
        $('.transition').on('click', function () {
            if (this.id != "") {
                var dataE = document.getElementById(this.id).getAttribute("data-id");
                if (dataE == undefined || dataE == null || dataE == "")
                    return;

                if (!$(this).hasClass("transition"))
                    return;
            }
            animcursor = 1;
            if (isAnimating) {
                return false;
            }
            if (animcursor > animations.max) {
                animcursor = 1;
            }
            nextPage($(this).data('animate'), this);
            ++animcursor;
        });
    }

    function TransCall(ele) {
        if (ele.className == "")
            return;
        if (ele.id != "") {
            var dataE = document.getElementById(ele.id).getAttribute("data-id");
            if (dataE == undefined || dataE == null || dataE == "" || ele.className == "")
                return;
            if (!$(ele).hasClass("transition"))
                return;
        }

        animcursor = 1;
        if (isAnimating) {
            return false;
        }
        if (animcursor > 67) {
            animcursor = 1;
        }
        nextPage($(ele).data('animate'), ele);
        ++animcursor;


        if (ele.id != "") {
            var dataE = document.getElementById(ele.id).getAttribute("data-callback");
            if (dataE != undefined && dataE != null && dataE != "")
                window[dataE]();
        }
    }

    function init() {
        isAnimating = false;
        $pages.eq(current).addClass('pt-page-current');
        $iterate.on('click', function () {
            var dataId = "";
            if (this.id != "") {
                dataId = document.getElementById(this.id).getAttribute("data-id");
                if (dataId == undefined || dataId == null || dataId == "")
                    return;
                if (!$(this).hasClass("transition"))
                    return;
            }
            animcursor = 1;
            if (isAnimating) {
                return false;
            }
            if (animcursor > animations.max) {
                animcursor = 1;
            }
            nextPage($(this).data('animate'), this);
            ++animcursor;
            try {
                var obj = document.getElementById(dataId.substring(1));
                if (obj != null && obj.getAttribute("onload") != null) {
                    var fn = window[obj.getAttribute("onload")];
                    if (obj.getAttribute("param") != null) {
                        var param = obj.getAttribute("param");
                        if (typeof fn === "function")
                            fn(param);
                        return;
                    }
                    if (typeof fn === "function")
                        fn();
                }
            } catch (e) { }
        });
        $nextBtn.on('click', function () {
            if (isAnimating) {
                return false;
            }
            if ($(this).hasClass("disabled"))
                return;
            if (animcursor > animations.max) {
                animcursor = 1;
            }
            nextPageCustom($(this).data('animation'), $(this).parent());
            ++animcursor;
        });
        $prevBtn.on('click', function () {
            if (isAnimating) {
                return false;
            }
            if ($(this).hasClass("disabled"))
                return;
            if (animcursor > animations.max) {
                animcursor = 1;
            }
            prevPageCustom($(this).data('animate'), $(this).parent());
            ++animcursor;
        });
    }
    function nextPage(animation, ele) {
        if (isAnimating) {
            return false;
        }
        isAnimating = true;
        var $currPage = $('#mainContainer').find('.pt-page-current');
        if (current < pagesCount - 1) {
            ++current;
        }
        else {
            current = 0;
        }
        var dt = ele.getAttribute("data-id");
        var cEle = ele.getAttribute("id");
        var itemType = ele.getAttribute('itemtype');
        $('#appMenu').find('li').removeClass('active');
        if (itemType == 'menu') {
            
            $('#' + cEle).addClass('active');
        }
        else if (itemType == "footer") {
            if (cEle == "to_explorer") {
                $('#p_explore').addClass('active');
            }
            else if (cEle == "to_vision") {
                $('#p_vision').addClass('active');
            }
            else if (cEle == "to_objective") {
                $('#p_objective').addClass('active');
                window.location = "nav://,hidebudget";
                g_nativeScrollVisible = false;
            }
        }

        else if (itemType == 'page') {
            $('#p_explore').addClass('active');
        }
       
        var $nextPage = $(dt).addClass('pt-page-current'),
			outClass = '', inClass = '';
        switch (animation) {
            case 1:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
        }
        $currPage.addClass(outClass).on(animEndEventName, function () {
            $currPage.off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });
        $nextPage.addClass(inClass).on(animEndEventName, function () {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });
        if (!support) {
            onEndAnimation($currPage, $nextPage);
        }
    }
    function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        resetPage($outpage, $inpage);
        isAnimating = false;
    }
    function resetPage($outpage, $inpage) {
        $outpage.attr('class', 'pt-page');
        $inpage.attr('class', 'pt-page' + ' pt-page-current');
    }
    init();
    return {
        init: init,
        initcall: initCall,
        rstIterate: resetIterate,
        Transcall: TransCall
    };
})();





