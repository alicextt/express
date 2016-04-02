 suite('"About" Page Tests', function(){
    test('page should have contain link to contact page', function(){
        assert($('a[href="/contact"').length);
    });
});
