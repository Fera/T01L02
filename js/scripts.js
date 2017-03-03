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
        var form = $("#name-form")
            field = $(form).find("input#name"); // zmienna zwracająca input name 
            button = $("button.add-btn");

        $(button).on("click", function(){ 

            // wyłączenie natywnej funkcji buttona - zastąpiłam je przez type="button" w index.html
          
            // $( "form" ).submit(function( event ) {
            //   event.preventDefault();
            // });        
                              
            
            if( $.trim(field.val()) === "" ) { // metoda .trim usuwa białe znaki z przodu i z tyłu, sprawdzenie czy pole input id="name" jest puste
                
            // jeśli jest - nic się nie dzieje
            }

            else {
                
                // jeśli nie jest - zostaje wstawiona jego zawartość do ul jako kolejny punkt na liście
                
                //zmienna zwracająca element listy z zawartością treści wpisanej w pole input
                var listElement = $("<li></li>", {

                    text: $(field).val()

                });               
            
                
                // $("ul.name-list").append(listElement); // utworzenie listy
                
                listElement.appendTo(".name-list");

                
            }

            $(field).val(''); //czyści input po kliknięciu 
            
        });  

        //T1Z05
        
        // var button = $(".button");
        //     output = $("#output");

        // button.on("click", function() {
        

        // // var clientId = $.get("http://code.eduweb.pl/kurs-jquery/get_id");


        //     $.when(
        //         $.get("https://jsonplaceholder.typicode.com/users/get_name.php"),
        //         $.get("https://jsonplaceholder.typicode.com/users/get_username.php"),
        //         $.get("https://jsonplaceholder.typicode.com/users/get_phone.php"),
        //         $.get("https://jsonplaceholder.typicode.com/users/get_email.php")

        //     ).then(function(name, username, phone, email) {

        //         output.text(name[0] + "," + username[0] + "," + phone[0] + "," + email[0]);

        //     });
        // });

        
        

    });

})(jQuery);
