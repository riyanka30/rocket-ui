$(document).ready(function() {
    $('#thisweekmeetings').DataTable();
    $('#lastweekmeetings').DataTable();
    $('#oldermeetings').DataTable();
} );

// $(document).ready(function() {
//     var table = $('#thisweekmeetings').DataTable( {
//         "ajax": "data/arrays.txt",
//         "columnDefs": [ {
//             "targets": -1,
//             "data": null,
//             "defaultContent": "<button>Click!</button>"
//         } ]
//     } );