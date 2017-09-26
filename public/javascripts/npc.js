$(document).ready(function () {
    $('#insertNpc').on('click', function () {
        $('#_id').val('');
        $('#npcDialog').modal('show');
    });
    // $('#saveZone').on('click', function () {
    //     jQuery.ajax({method: 'POST', url: '/zone', data: $('#zoneForm').serialize()})
    //     .done(function () {
    //         $('#zoneDialog').modal('hide');
    //     })
    //     .fail(function (err) {
    //         console.log(err);
    //     }); 
    // });
});