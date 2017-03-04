(function($) {

   $(document).ready(function() {

      

        //T01Z03 - tydzien 1, zadanie 3
        
        // menu rozwijane
        
        $(".menu-btn").on("click", function(){ 

            $(".nav").stop().toggle("slow", "linear");

        }); 

    
    });
})(jQuery);
