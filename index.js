$("#modal").iziModal({
    overlayClose: true,
    width: 600,
    autoOpen: false,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
});
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});