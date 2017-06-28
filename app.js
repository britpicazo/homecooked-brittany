$("#sign_in").click(function() {
        $("#sign_in_form").removeClass('hide');
        $("#sign_up_form").addClass('hide');
    });

    $("#sign_up").click(function() {
        $("#sign_up_form").removeClass('hide');
        $("#sign_in_form").addClass('hide');
    });

$("#modal").iziModal({
    overlayClose: true,
    width: 600,
    autoOpen: false,
    overlayColor: 'rgba(0, 0, 0, 0.6)',

});

$(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#updateInfo').iziModal('open');
});

$("#updateInfo").iziModal({
        title:'Select Hand',
        overlayClose: true,
        width: 600,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        headerColor: '#88A0B9'
});