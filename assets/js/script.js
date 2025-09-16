(function (Drupal, once) {
  Drupal.behaviors.longboatRond = {
    attach: function (context, settings) {
      once('longboatRond', 'body', context).forEach(function () {
        console.log("Longboat Rond theme ativo!");
      });
    }
  };
})(Drupal, once);