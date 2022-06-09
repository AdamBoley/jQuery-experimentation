$(document).ready(function() {
    /*$('h2').css('text-decoration', 'underline');
    $('ul').css('border', '1px solid red');*/
    $('h2').addClass('underline');
    $('ul').addClass('border');
    $('tr:odd').addClass('odd')
    $('tr:even').addClass('even')
});

/*
Note that the :odd and :even pseudo selectors are deprecated
jQuery now advises the use of the .odd() and .even() methods
*/