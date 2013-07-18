$('.search-key').on('keyup', findByName);

function findByName() {
    productAdapter.findByName($('.search-key').val()).done(function (products) {
        var l = products.length,
            product;
        $('.product-list').empty();
        for (var i = 0; i < l; i++) {
            product = products[i];
            $('.product-list').append(
                '<li class="topcoat-list__item"><a href="product.html?id=' + product.id + '">' +
                '<p>' + product.name + '</p><p>' + product.style + '</p><span class="chevron"></span></a></li>');
        }
    });
};