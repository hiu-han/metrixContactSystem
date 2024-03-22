$(document).ready(function () {
  const NOWON_CLASSNAME = 'nowOn';

  /** */
  $('#contentListOptionOpener').on('click', function () {
    $(this).toggleClass(NOWON_CLASSNAME);
  });
  $('#mailAddOptionOpener').on('click', function () {
    $(this).toggleClass(NOWON_CLASSNAME);
  });
});
