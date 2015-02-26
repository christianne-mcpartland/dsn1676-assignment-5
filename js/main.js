var $form = $('form');

$form.on('submit', function (eventObject) {

    eventObject.preventDefault();
    
    
    var $theH2 = $('<h2>');
    $theH2.html($input.val());
    $theForm.prepend($theH2);
    
    $input.val('');
});