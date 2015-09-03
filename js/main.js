(function() {
  require.config({
    paths: {
      'angular': 'angular',
      'invoice': 'app/controllers/invoice_controller'
    }
  });

  require(['angular', 'invoice'], function(angular) {
    console.log('loaded');
  });
})();
