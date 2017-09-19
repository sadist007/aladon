$(document).ready(function () {
    $('#add-item').on('click', function () {
        jQuery.ajax({method: 'POST', url: '/item/add-by-one-line', data: $('#item-form').serialize()})
        .done(function (data) {
            if (data.result === 'O') {
                $('#item-info').val('');
                $('#item-rent').prop('checked', '');
                $('#item-errors').html('');
            } else {
                if (data.error.type === 'U') {
                    data.error.data.forEach(function (val, idx, arr) {
                        $('#item-errors').append('<li>' + val + '</li>');
                    });
                } else {
                    $('#item-errors').html(data.error.data);
                }
            }
        })
        .fail(function (err) {
            $('#item-errors').html(err);
            console.log(err);
        }); 
    });
});