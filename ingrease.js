var inc;
var total;

function begin() {
    var ingrease = $('#ingrease');
    $('#buy1').click(function(event){
        event.preventDefault();
        console.log('bought 1');
    });
    total = inc = x1 = 0;
}

function update() {
    total += inc;
    $('#score').text = total;
}

window.onload = new function(){
    begin();
    //window.setInterval(update, 1000);
};