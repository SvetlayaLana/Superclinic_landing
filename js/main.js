(function () {
    $('.marker').hide();
    $('#category-details').hide();
})();

function toggleCategory(selector, title, imgSrc) {
    $('.marker').hide();
    var selectorCateg = $('#category-details');
    if ($(selector).hasClass('clicked-once')){
        $(selector).removeClass('clicked-once');
        selectorCateg.slideUp();
    }else{
        var arr = ['#neurology', '#massage', '#theumatology'];
        arr.forEach(function (element) {
            $(element).removeClass('clicked-once');
        });
        $(selector).addClass("clicked-once");
        selector += ' .marker';
        $('#title').html(title);
        $('#category-img').attr('src', imgSrc);
        $(selector).show();
        selectorCateg.show();
        $('html, body').animate({
            scrollTop: $('html, body').get(0).scrollHeight}, 1000);
    }

}

$('#neurology').click(function () {
    toggleCategory('#neurology', 'Неврологія', 'img/image%203.png');
});


$('#massage').click(function () {
    toggleCategory('#massage','Массаж', 'img/image%204.png');
});

$('#rheumatology').click(function () {
    toggleCategory('#rheumatology', 'Ревматологія', 'img/image%205.png');
});

