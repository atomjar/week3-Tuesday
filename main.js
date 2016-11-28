$( function() {
   $( "#items, #cart").sortable({
     connectWith: ".connectedSortable"
   }).disableSelection();
 } );


   var source = $("#entry-template").html();
   var template = Handlebars.compile(source);


   var items = [
     {music: "Percussion", song: "beat"},
     {music: "Organ", song: "organ"},
     {music: "Bass", song: "bass"},
     {music: "Sax", song: "sax1"},
   ];

   for (var i = 0; i < items.length; i++) {
     var html = template(items[i]);
     $('#items').append(html)
   }
