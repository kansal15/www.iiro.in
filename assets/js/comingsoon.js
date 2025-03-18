/* ===================================================================
 *  Khronos 2.0.0 - Main JS
 *
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';




   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const body = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        // const info = document.querySelector('.s-info');

        // if (!(preloader && info)) return;

        html.classList.add('ss-preload');

        window.addEventListener('load', function() {

            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');

            // page scroll position to top
            preloader.addEventListener('transitionstart', function gotoTop(e) {
                if (e.target.matches('#preloader')) {
                    window.scrollTo(0, 0);
                    preloader.removeEventListener(e.type, gotoTop);
                }
            });

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    body.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });

        });

        window.addEventListener('beforeunload' , function() {
            body.classList.remove('ss-show');
        });
    };




   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        // ssCountdown();
        // ssSwiper();
        // ssMailChimpForm();
        // sstabs();
        // ssAlertBoxes();
        // ssMoveTo();

    })();

})(document.documentElement);