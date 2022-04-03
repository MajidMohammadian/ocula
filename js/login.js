$(document).ready(function(){
    $('#login-main > div.active > .typing').html('').typing({
        strings: [$('#login-main > div.active > .typing').data('text') + ' '],
        typeDelay: 70,
        typingOpacity: '0.2',
        color: '#fff',
        fade: true,
    })

    $(document).on('click', '#login-selector > div > div', function(){
        let type = $(this).data('type')

        // edit tab
        $('#login-selector > div > div').removeClass('active')
        $(this).addClass('active')

        // edit main
        $('#login-main > div').removeClass('active')
        $('#login-main > div[data-type="' + type + '"]').addClass('active')

        $('#login-main > div[data-type="' + type + '"] > .typing').each(function (i, element){
            $(element).html('').typing({
                strings: [$('#login-main > div.active > .typing').data('text') + ' '],
                typeDelay: 70,
                typingOpacity: '0.2',
                color: '#fff',
                fade: true,
            })
        })

        // edit entry
        $('#login-entry > div').removeClass('active')
        $('#login-entry > div[data-type="' + type + '"]').addClass('active')
    })

    $(document).on('click', '.btn-google', function(){
        $(this).children('i').toggleClass('i-google i-google-loading')
    })

    $(document).on('click', '#login-entry > div[data-type="sign-in"] .button > button', function(){
        if($('#login-entry > div[data-type="sign-in"] .button > button > *').length > 0) {
            $(this).html('SIGN IN')
        } else {
            $(this).html('<i class="i-btn-loading"></i>')
        }
    })
})