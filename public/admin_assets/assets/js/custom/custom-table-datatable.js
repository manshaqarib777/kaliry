/*
---------------------------------------
    : Custom - Table Datatable js :
---------------------------------------
*/
"use strict";
$(document).ready(function() {
    /* -- Table - Datatable -- */
    $('#datatable').DataTable({
        responsive: true
    });
    $('#default-datatable').DataTable( {
        "order": [[ 3, "desc" ]],
        responsive: true
    } );    
    var table = $('#datatable-buttons').DataTable({
            "responsive": true,
            "order": [],
            "columnDefs" : [ {
                'targets': [0], /* column index */
                'orderable': false, /* true or false */
             }],
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "drawCallback": function( settings ) {
                var success_multicolor_on_off = document.querySelectorAll('.custom_toggle');
                $(".custom_toggle").map(function( index ,val ) {
                    if($(this).parent().find("span").hasClass("switchery-default")===false)
                    {
                        var switchery = new Switchery(val, {  color: '#43D187', secondaryColor: '#F9616D', jackColor: '#A5ECC4', jackSecondaryColor: '#FFE4E6' });

                    }
                });
            }
    });
    table.buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
    
    var table = $('.displaytable').DataTable({
        responsive: true,
        "order": [],
        "columnDefs" : [ {
            'targets': [0], /* column index */
            'orderable': false, /* true or false */
         }],
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });
    table.buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
});

