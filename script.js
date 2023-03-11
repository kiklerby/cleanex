let condition = true;
let start = 0;
let end = 0;
function forward(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '-50'],
        easing: 'easeInOutQuad',
        direction:'alternate',
        duration: 1000,
        loop:false
    });
    anime({
        trgets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition = false;
}

function backward(){
    anime({
        targets: '.menu-small',
        translateX: ['-50', '-100%'],
        easing: 'easeInOutQuad',
        direction:'altaernate',
        duration: 1000,
        loop:false
    });
    anime({
        trgets: '.menu_small_icon',
        rotate: -90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stick',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    condition = true;
}

$('.menu_small_icon').click(function(){
if(condition){
forward();
}else{    
backward();    
}
})

$('body').on("touchstart", function (event){
    start = event.originalEvent.touches[0].pageX;

})
$('body').on("touchend", function (event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
})

navigator.geolocation.getCurrentPosition(function (position) {
    coords = position.coords;
    console.log(coords);
    let latitude = position.coords.latitude;
    let longtitude = position.coords.longtitude;
    let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([latitude, longtitude]),
            zoom:10
        })
    })
});