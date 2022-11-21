<template>
  <div id="app">
    <loader></loader>
    <router-view/>
  </div>
</template>

<script>
import Loader from './views/Loader'
export default {
  name: 'App',
  components: {
    Loader
  },
  mounted() {
     // minimize mobile menu button
        $(document).on('click', '#toggle_btn', function() {
            if($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
            }
            return false;
        });

  }
}
</script>
