$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

tofirst = function() {
    $('html, body').animate({
        scrollTop: $(".breadcrumb").offset().top
    }, 1000);
};

tolast = function () {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 1000);
};

initMap = function(){
    var FIIT = {lat: 48.153823, lng: 17.071865};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: FIIT
    });
    var marker = new google.maps.Marker({
        position: FIIT,
        map: map
    });
};

$(function(){
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

function changeIcon(button) {
    var element = button.children[0];
    if (button.dataset.state === "show") {
        element.classList.remove("fa-chevron-circle-up");
        element.classList.add("fa-chevron-circle-down");
        button.dataset.state = "hide";
    }
    else {
        element.classList.remove("fa-chevron-circle-down");
        element.classList.add("fa-chevron-circle-up");
        button.dataset.state = "show";
    }
};