$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver Imagem em tamanho real</a>
        </div>
        <div class="remove_image">
            <button id="button_remove_image">X</button>
        </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $('#endereco-imagem-nova').val('');
    })

    $('ul').on('click', '.remove_image', function () {
        $(this).closest('li').fadeOut(500, function () {
            $(this).remove();
        });
    });

});

