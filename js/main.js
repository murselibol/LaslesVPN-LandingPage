$('.Header-switch').on('click', function () {
  if ($('.Header-menu').is('.menu-show')) {
    $('.Header-menu').removeClass('menu-show')

    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    })
  } else {
    $('.Header-menu').addClass('menu-show')

    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    })
  }
})
