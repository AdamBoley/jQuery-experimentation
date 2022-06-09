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


});

/** 
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
*/