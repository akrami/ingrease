var items = ['buy1', 'buy2', 'buy3', 'buy4'];

function begin() {
    //initializing
    if (localStorage.getItem('gold') === null) localStorage.setItem('gold', 0);
    if (localStorage.getItem('buy1-count') === null) localStorage.setItem('buy1-count', 0);
    if (localStorage.getItem('buy1-cost') === null) localStorage.setItem('buy1-cost', 1);
    if (localStorage.getItem('buy1-make') === null) localStorage.setItem('buy1-make', 0.01);
    if (localStorage.getItem('buy2-count') === null) localStorage.setItem('buy2-count', 0);
    if (localStorage.getItem('buy2-cost') === null) localStorage.setItem('buy2-cost', 1000);
    if (localStorage.getItem('buy2-make') === null) localStorage.setItem('buy2-make', 10);
    if (localStorage.getItem('buy3-count') === null) localStorage.setItem('buy3-count', 0);
    if (localStorage.getItem('buy3-cost') === null) localStorage.setItem('buy3-cost', 1000000);
    if (localStorage.getItem('buy3-make') === null) localStorage.setItem('buy3-make', 10000);
    if (localStorage.getItem('buy4-count') === null) localStorage.setItem('buy4-count', 0);
    if (localStorage.getItem('buy4-cost') === null) localStorage.setItem('buy4-cost', 1000000000);
    if (localStorage.getItem('buy4-make') === null) localStorage.setItem('buy4-make', 10000000);

    items.forEach(item => {
        $('#'+item).click(function (event){
            event.preventDefault();
            if(parseFloat(localStorage.getItem('gold')) >= parseFloat(localStorage.getItem(item+'-cost'))) {
                localStorage.setItem('gold', parseFloat(localStorage.getItem('gold') - localStorage.getItem(item+'-cost')).toFixed(2));
                localStorage.setItem(item+'-cost', parseFloat(localStorage.getItem(item+'-cost')*2.05).toFixed(2));
                localStorage.setItem(item+'-count', parseInt(localStorage.getItem(item+'-count'))+1);
            }
        });
    });
}

function update() {;
    //assign variables to texts
    var increase = 0;
    items.forEach(item => {
        increase += parseFloat(localStorage.getItem(item + '-make') * localStorage.getItem(item + '-count'));
    });
    localStorage.setItem('gold', (increase + parseFloat(localStorage.getItem('gold'))).toFixed(2));
    update_hud();
}

function update_hud() {
    items.forEach(item => {
        $('#' + item + '-count').text(localStorage.getItem(item + '-count'));
        $('#' + item + '-cost').text(localStorage.getItem(item + '-cost'));
        $('#' + item + '-total').text(localStorage.getItem(item + '-make') * localStorage.getItem(item + '-count'));
        if(parseFloat(localStorage.getItem('gold')) < parseFloat(localStorage.getItem(item+'-cost'))) {
            $('#'+item).attr('disabled', true);
        } else {
            $('#'+item).removeAttr('disabled');
        }
    });
    $('#gold').text(localStorage.getItem('gold'));
}

window.onload = new function () {
    begin();
    update_hud();
    window.setInterval(update, 1000);
};