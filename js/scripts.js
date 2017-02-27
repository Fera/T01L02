(function($) {

   $(document).ready(function() {

        // T01Z02 - tydzien 1, zadanie 2

       var allDivGrid = $("div.grid.grid-12"); // wszytskie elementy mające zarówno klasę grid i grid-12

       var externalLinks = $(".nav a[href^='http']"); // wszystkie linki kierujące na zewnątrz zawierające się w elemencie o klasie nav

       var notChecked = $("input:checkbox, input:radio").not(":checked"); // wszystkie elementy input type checkbox i radiobutton, które nie są zaznaczone

       var firsPWithoutChild = $("div#text p:empty:first"); // wszystkie pierwsze paragrafy nie mające dzieci (nie będące rodzicami) zawierające się w divie z identyfikatorem text

       // var firstPWithoutChild = $("div#text p:first").not(:parent); - to inny sposob osiągnięcia tego samego efektu co wyżej

       var paginationItemNotSpan = $(".pagination-item").not("span"); // wszystkie elementy z podaną klasą nie będące spanami




        allDivGrid.hl();

    });

})(jQuery);
