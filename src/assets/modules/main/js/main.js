/*===================================================================*/
/*============LUÔN LUÔN ĐỂ LAZYLOADING CUỐI CÙNG=====================*/
/*===================================================================*/
$(document).ready(function(){
	$("#vnt-slide-main").slick({
        autoplay:true,
        arrows:false,
        fade:true,
        dots:true,
    });
    $("#vnt-product-info").slick({
        fade:true,
        arrows:false,
        autoplay:true,
        asNavFor:'#vnt-product-img',
    });
    $("#vnt-product-img").slick({
        fade:true,
        asNavFor:'#vnt-product-info',
    });
    $(".productFeature .menu ul li a").click(function(){
        $(this).parents("li").siblings("li").removeClass("active");
        if(!$(this).parents("li").hasClass("active")){
            $(this).parents("li").addClass("active");
        }
        else{
            $(this).parents("li").removeClass("active");
        }
        var _link = ROOT_PRO+'/ajax/loadMore.html';
        var id = $(this).attr("data-id");
        var _self = $(this);
        var _result = $(this).parents(".productFeature ").find("#result");
        $.ajax({
            url:_link,
            type:'POST',
            async:true,
            data: 'id='+id+'&lang='+lang,
            beforeSend :function(){
                _result.addClass("loading");
            },
            success:function(r){
                setTimeout(function(){
                    _result.removeClass("loading").html("");
                    _result.html(r);
                },1000);
            }
        });
        return false;

    });
    $('#feeling_img').slick({
        asNavFor: '#feeling_text',
        draggable: false,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        adaptiveHeight: false,
        focusOnSelect: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#feeling_text').slick({
        asNavFor: '#feeling_img',
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        adaptiveHeight: false,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        speed: 500
    });
});
$(document).ready(function() {
    // SELECTOR LAZYLOADING
    function setlazy(el,eff,delay){
        el.addClass("lazyloading");
        el.attr("data-eff",eff);
        el.attr("data-delay",delay);
    }
    setlazy($(".productNews .title"),'fadeInUp','0.3');
    setlazy($("#vnt-product-info"),'fadeInLeft','0.3');
    setlazy($("#vnt-product-img"),'fadeInRight','0.3');
    setlazy($(".productFeature .menu"),'fadeInUp','0.3');
    time=0.3;
    $("#slideProduct .item").each(function(){
        setlazy($(this),'fadeInUp',time);
        time+=0.1;
    });
    setlazy($(".newsHome .title"),'fadeIn','0.3');
    setlazy($(".newsVip"),'fadeIn','0.3');
    setlazy($(".news"),'fadeIn','0.3');
    setlazy($(".opinionHome .title"),'fadeIn','0.3');
    time=0.3;
    $("#feeling_img .item").each(function(){
        setlazy($(this),'fadeInUp',time);
        time+=0.1;
    });
    setlazy($("#feeling_text"),'fadeIn','0.3');
    // BIGIN LAZYLOADING
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    if((isMobile == false) && ($(window).innerWidth() > 991)){
        $("body").my_effect_scroll({
            itemSelector : ".lazyloading",
            height_per: 30,
            height_px: 300,
            classItemVisible : function(){
                var duration = $(this).attr("data-delay");
                var effect = $(this).attr("data-eff");
                $(this).css({
                    "-webkit-animation-delay": duration+"s",
                    "-o-animation-delay": duration+"s",
                    "animation-delay": duration+"s",
                });
                $(this).removeClass("lazyloading");
                $(this).addClass("lazy-start");
                $(this).on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){
                    $(this).removeClass("lazy-start");
                    $(this).removeClass(effect);
                    $(this).removeAttr("data-delay");
                    $(this).removeAttr("data-eff");
                });
                var effect = $(this).attr("data-eff");
                return effect;
            }
        });
    }else{
        $(".lazyloading").each(function(){
            var duration = $(this).attr("data-delay");
            var effect = $(this).attr("data-eff");
            $(this).css({
                "-webkit-animation-delay": duration+"s",
                "-o-animation-delay": duration+"s",
                "animation-delay": duration+"s",
            });
            $(this).removeClass("lazyloading");
            $(this).addClass("lazy-start");
            $(this).on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){
                $(this).removeClass("lazy-start");
                $(this).removeClass(effect);
                $(this).removeAttr("data-delay");
                $(this).removeAttr("data-eff");
            });
            var effect = $(this).attr("data-eff");
            return effect;
        });
    }
});