$(document).ready(function () {
    $('#insertZone').on('click', function () {
        $('#_id').val('');
        $('#zoneDialog').modal('show');
    });
    $('#saveZone').on('click', function () {
        jQuery.ajax({method: 'POST', url: '/zone', data: $('#zoneForm').serialize()})
        .done(function () {
            $('#zoneDialog').modal('hide');
        })
        .fail(function (err) {
            console.log(err);
        }); 
    });
});