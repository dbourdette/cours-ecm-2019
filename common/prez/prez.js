$(document).ready(function() {
    $('a[target="_blank"]').each(function() {
        $(this).append(' <small><i class="fas fa-external-link-square-alt"></i></small>')
    });
});