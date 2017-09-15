$(document).ready(function () {
    $('#insertZone').on('click', function () {
        console.log('222222222');
        $('#_id').val('');
        $('#zoneDialog').modal('show');
    });
    $('#saveZone').on('click', function () {
        console.log('1111111111');
        console.log($('#zoneForm').serialize());
        jQuery.ajax({method: 'POST', url: '/zone', data: $('#zoneForm').serialize()})
        .done(function () {
            $('#zoneDialog').modal('hide');
        })
        .fail(function (err) {
            console.log(err);
        }); 
    });
});