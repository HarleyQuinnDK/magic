$(document).ready(function(){
    // $("#form_submit").click(function (e) {
    //     e.preventDefault();
    //     var origin = $("#form_origin").val();
    //     var prijmeni = $("#form_prijmeni").val();
    //     var datum = $("#form_datum").val();
    //     var cas = $("#form_cas").val();

    //     $.post("../form.php",{origin: origin, prijmeni: prijmeni, datum: datum, cas: cas},
    //         function(data){
    //             alert(data);
    //         });
    // });

    // $("#con_submit").click(function (e) {
    //     e.preventDefault();
    //     var origin = $("#con_origin").val();
    //     var jmeno = $("#con_jmeno").val();
    //     var telefon = $("#con_telefon").val();
    //     var datum = $("#con_datum").val();
    //     var cas = $("#con_cas").val();
    //     var zprava = $("#con_zprava").val();

    //     $.post("../form.php",{origin: origin, jmeno: jmeno, datum: datum, cas: cas, telefon: telefon, zprava: zprava},
    //         function(data){
    //             alert(data);
    //         });
    // });
    var forms = $("form[action='form.php']");
    $(".datepicker").datepicker();
    forms.each(function(k,v) {

        $(v).submit(function(event) {
            event.preventDefault();
            $.post("../form.php",$(v).serialize(),
            function(data){
                alert(data);
                v.reset();
            });
        });
    });

});