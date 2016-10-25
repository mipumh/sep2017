$( document ).ready(function() {
    // balance text
    $('.introHeadline, .introCopy').balanceText();

    // lazyload images
    $(".lazy").unveil(200, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});
