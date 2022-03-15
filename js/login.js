$(document).ready(function(){
    $(document).on('click', '#login-selector > div > div', function(){
        let type = $(this).data('type')

        // edit tab
        $('#login-selector > div > div').removeClass('active')
        $(this).addClass('active')

        // edit main
        $('#login-main > div').removeClass('active')
        $('#login-main > div[data-type="' + type + '"]').addClass('active')

        // edit entry
        $('#login-entry > div').removeClass('active')
        $('#login-entry > div[data-type="' + type + '"]').addClass('active')
    })
})