<template>
<!-- Header -->
            <div class="header">
            
                <logo />
                
                <toggle />
                
                <search />               
                
                <mobilemenu />
                
                <!-- Header Right Menu -->
                <ul class="nav user-menu">

                    <notification />
                    
                    <usermenu />
                    
                </ul>
                <!-- /Header Right Menu -->
                
            </div>
            <!-- /Header -->
</template>

<script>
export default {
    mounted() {
          var $wrapper = $('.main-wrapper');
       
        $('body').append('<div class="sidebar-overlay"></div>');
        $(document).on('click', '#mobile_btn', function() {
            $wrapper.toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            $('#task_window').removeClass('opened');
            return false;
        });
       

        $(document).on('click', '.top-nav-search .responsive-search', function() {
            $('.top-nav-search').toggleClass('active');
        });
        $('.sidebar-menu ul li:not(.submenu) a').click(function () {
            $("html").removeClass('menu-opened');
            $(".sidebar-overlay").removeClass('opened');
        });

       
        $(document).on('mouseover', function(e) {
            e.stopPropagation();
            if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                var targ = $(e.target).closest('.sidebar').length;
                if(targ) {
                    $('body').addClass('expand-menu');
                    $('.subdrop + ul').slideDown();
                } else {
                    $('body').removeClass('expand-menu');
                    $('.subdrop + ul').slideUp();
                }
                return false;
            }
        });
    }
}
</script>