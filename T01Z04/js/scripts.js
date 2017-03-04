(function($) {

   $(document).ready(function() {

        

        //T01Z04 - tydzien 1, zadanie 4
        
        var form = $("#name-form");
            field = $(form).find("input#name"); // zmienna zwracająca input name 
            button = $("button.add-btn");

        $(button).on("click", function(){ 

            // wyłączenie natywnej funkcji buttona - zastąpiłam je przez type="button" w index.html
                                               
            
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
                
                listElement.fadeIn(500).appendTo(".name-list");
                
            }

            $(field).val(''); //czyści input po kliknięciu 
            
        });  

 
    });
})(jQuery);
