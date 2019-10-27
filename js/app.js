//user profile
(function() {
    var userIcon = document.getElementById('userBtn');
    var userProfileBox = document.getElementById('userProfileBox');

    userIcon.addEventListener('click', function() {
        userProfileBox.classList.toggle('showItem');
    });



})();


//display search bar
(function() {
    var searchBtn = document.getElementById('searchBtn');
    var closeBtn = document.getElementById('closeBtn');
    var searchInput = document.getElementById('searchInput');
    var searchContainer = document.getElementById('searchContainer');

    searchBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('showItem');
        searchInput.focus();

    });

    closeBtn.addEventListener('click', function() {
        searchContainer.classList.remove('showItem');

    });

})();



// Show the first tab by default
$('#tab-2').hide();
$('#tab-1').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('#tab-1').hide();
    $('#tab-2').hide();
    $($(this).attr('href')).show();
});