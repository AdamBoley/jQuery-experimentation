$(document).ready(function() {
 

    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });



   $('#card-panel-1').click(function(){
    $('#card-panel-1').hide('slow')
    })

    $('#card-panel-2').click(function(){
        $('#card-panel-2').hide('medium')
    })

    $('#card-panel-3').click(function(){
        $('#card-panel-3').hide('fast')
    })

    $('#card-panel-4').click(function(){
        $('#card-panel-4').hide(3000)
    })

});



/** 
 * jQuery selectors
 * $('p') to select all p elements
 * $('.class') to select all elements with that class name
 * $('#id') to select the element with that id
 * $('p>a') to select all anchor elements that direct children of p elements
 * $('p a') to select all anchor elements that are children of p elements, regardless of whether they are direct or not
 * $('a:first') to select the first anchor element
 * $('a:last') to select the last anchor element
 * $(':header') to select all header elements, h1 through h6
 * $('[href]') to select all elements with href attributes
 * $('[value='header']') to select all elements with a value attribute that have an attribute value of header
 * $('p').css('background-color) to query the background-color of all p elements
 * $('li').css('background-color, 'red') to change the background color of all li elements to red
 * $('#my-footer').html() to return the tag name of the element with an id of my-footer
 * $('#my-footer').html('<h1>a new header</h1>) to replace all of the HTML elements of #myfooter with an h1 element
 * $('#my-footer').text('some new text) to replace the content of the element with new text content
 * $('img').remove() to remove all img elements
 * $('p').empty() to remove all content from p elements, but leave them in place
 * 
 * Events:
 * The code can listen for click events using either the method above:
 * $('selector').on('click', function{})
 * or the click method:
 * $('selector).click(function{})
 * 
 * others:
 * $('p').click(function(){
    $('p').css('color', 'red')
})

$('h2').hover(function(){
    $('h2').css('background', 'lightblue')
})

$('.card-panel').mouseenter(function(){
    $('body').css('background-color', 'black')
})

$('.card-panel').mouseleave(function(){
    $('body').css('background-color', '#e1e2e2')
})
*/

/*
Animations

The show method can be used without arguments

However, the show method accepts arguments that specify the time period over which the animation should take place

A precise number can be supplied, which should be milliseconds

Three preset timing settings can also be supplies - slow, medium and fast

The opposite can be achieved with the hide method. Again, the same arguments can be supplied

The function of both show and hide is combined in the toggle method. Usually, the toggle method would be applied to an event listener on a button which would then toggle the visibility of another element. 

The slideDown method slides down an element, making it visible, much like a garage door being pulled down

The slideUp method does the opposite, sliding an element up to make it invisible, much like a garage door being pushed up

The slideToggle method combines the two, sliding an element down if it is hidden, and sliding an element up if it is visible

The speed can be set for all of the slide methods by passing in a time as an argument

The fadeIn, fadeOut and fadeTogglemethods do exactly that, and again the speed can be set by passing in arguments

The fadeTo method works similarly to the other fade methods, except that it makes the element partially transparent, much like setting the alpha number of an rgba property

For the fadeTo method, two arguments are passed in - the first is the speed, and the second is the opacity setting. Much like RGBA, 0 is fully transparent and 1 is fully opaque


*/