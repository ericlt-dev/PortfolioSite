    $(document).ready(function() {
        $('div').fadeOut(1);
        $('div').fadeIn(200);
    });

    $('.nav-links a').on('click', function(e){
        if(this.hash !== '') {
            e.preventDefault();
    
            const hash=this.hash;
            
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                 700
            );
        }
    });

 
    $(document).ready(function() {
        const page_url = window.location.href;
        const page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
        if (page_id == "home") {
            $("html, body,").animate({
                scrollTop: $("#scroll-" + page_id).offset().top
            }, 1000);
        } else if (page_id == "about") {
            $("html, body,").animate({
                scrollTop: $("#scroll-" + page_id).offset().top 
            }, 1000);
        } else if (page_id == "career") {
        $("html, body,").animate({
            scrollTop: $("#scroll-" + page_id).offset().top 
            }, 1000);
        } else if (page_id == "projects") {
        $("html, body,").animate({
            scrollTop: $("#scroll-" + page_id).offset().top 
            }, 1000);
         }
    });

    
        window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i=0; i< reveals.length; i++){

                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint= 20;

                if (revealtop < windowheight -revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        };
        