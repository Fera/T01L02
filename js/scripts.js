(function($) {

   $(document).ready(function() {

        // T01Z02 - tydzien 1, zadanie 2

        var allDivGrid = $("div.grid.grid-12"); // wszystkie elementy mające zarówno klasę grid i grid-12
 
        var externalLinks = $(".nav a[href^='http']"); // wszystkie linki kierujące na zewnątrz zawierające się w elemencie o klasie nav

        var notChecked = $("input:checkbox, input:radio").not(":checked"); // wszystkie elementy input type checkbox i radiobutton, które nie są zaznaczone

        var firsPWithoutChild = $("div#text p:empty:first"); // wszystkie pierwsze paragrafy nie mające dzieci (nie będące rodzicami) zawierające się w divie z identyfikatorem text

        // var firstPWithoutChild = $("div#text p:first").not(:parent); - to inny sposob osiągnięcia tego samego efektu co wyżej

        var paginationItemNotSpan = $(".pagination-item").not("span"); // wszystkie elementy z podaną klasą nie będące spanami




        //allDivGrid.hl();

        //T01Z03
        
        // menu rozwijane
        
        $(".menu-btn").on("click", function(){ 

            $(".nav").toggle("slow");

        }); 

        //T01Z04
        
        $("#name-form .add-btn").on("click", function(){ 

            // wyłączenie natywnej funkcji buttona - zastąpiłam je przez type="button" w index.html
          
            // $( "form" ).submit(function( event ) {
            //   event.preventDefault();
            // });                       
            
            if( $("#name-form input#name").val() == '' ) { //<- spraawdzenie czy pole input id="name" jest puste
                // jeśli jest - nic się nie dzieje
            }
            else {
                
                // jeśli nie jest - zostaje wstawiona jego zawartość do ul jako kolejny punkt na liście
                
                $("ul.name-list").append('<li>'+($('#name-form input#name').val())+'</li>'); 

                
            }

            $("#name-form input#name").val(''); //czyści po kliknięciu input
            
        });  

    });

})(jQuery);
