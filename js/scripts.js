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


        //T01Z03 - tydzien 1, zadanie 3
        
        // menu rozwijane
        
        $(".menu-btn").on("click", function(){ 

            $(".nav").toggle("slow");

        }); 

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
                
                listElement.appendTo(".name-list");
                
            }

            $(field).val(''); //czyści input po kliknięciu 
            
        });  

        //T1Z05 - tydzien 1, zadanie 5
        
        var button = $(".button"); // zmienna odnosząca do elementu o podanej klasie
            output = $("#output"); // zmienna odnosząca do elementu o podanym id

        $(output).hide();

        button.on("click", function() { // po kliknięciu



            $.ajax({ // korzystamy z metody ajax
                url: "https://jsonplaceholder.typicode.com/users", //wysyłamy zapytanie pod podany url
                method: "GET", // metodą GET
                dataType: "JSON", // wymuszamy zwrot danych jako text 
               
                success: function(response){ // w razie sukcesu ma zadziałać taka funkcja

                    console.log(response);     

                    $.each(response, function(i,value){ // weź wszystkie odpowiedzi wg indexu i wartości

                        var name = '<span class="name">' + value.name + '</span>';
                        var username = '<span class="username">' + value.username + '</span>';
                        var phone = '<span class="phone">' + value.phone + '</span>';
                        var email = '<span class="email">' + value.email + '</span>';

                        $("<li></li>",{ // stwórz obiekt li
                            "id":value.id, // nadaj mu id o wartości id z danych
                            // "text": value.name + ', ' + value.username + ', ' + value.phone + ', ' + value.email // wstaw do niego wymienione wartości danych
                        }).append(name, username, phone, email).appendTo(output); // to wszystko wstaw do środka elementu output

                    });                

                    $(output).show();
                    $(button).attr('disabled', true).text("DANE POBRANO");

                },

                error: function(errorThrown) { // w razie błędu ma się to zadziać
                    output.show().html("<li>Przepraszamy, wystąpił błąd</li>");
                    $(button).text("POBIERZ JESZCZE RAZ");
                }
            });         
        });
    });
})(jQuery);
