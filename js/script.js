'use strict';

//Настройки слайдера в карточке с товаром 
$(document).ready(function() {

    $('.gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-slider__nav',
        infinite: false
    });
    $('.gallery-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    });
    
    $('#mouse-drag').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false
	});
	
	$('#mouse-drag2').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	});
});



//Открывает модалку при клике на изображение в карточке с товаром
var galleryModal = document.getElementById('galleryModal')
var galleryImg = document.querySelectorAll('img.gallery-Img')
var closeModalGallery = document.getElementById('closeGalleryModal')
var imgModal = document.getElementById('imgModal')


galleryImg.forEach(function(element) {
    element.addEventListener('click', function(e) {
        galleryModal.style.display = "block";
        imgModal.src = this.src;
    });
});

closeModalGallery.addEventListener('click', function() {
    galleryModal.style.display = "none";
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function(root) {

    // svg for all
    svg4everybody();

    function getNodeindex(elm) {
        var c = elm.parentNode.children,
            i = 0;

        for (; i < c.length; i++) {
            if (c[i] == elm) return i;
        }
    }

    function sliderSet(slider) {
        var data = slider.dataset.slider,
            options = optionsSliders[data],
            container = slider.querySelector('[data-slider-slides]'),
            controls = slider.querySelector('[data-slider-controls]'),
            slidesCount = container.children.length;

        options.container = slider.querySelector('[data-slider-slides]');

        if (options.controls == true && slidesCount > 1) {
            options.controlsContainer = controls;
        } else {
            options.controls = false;
            if (controls) controls.remove();
        }

        tns(options);
    }

    var optionsSliders = {
        'init': {
            controls: true,
            nav: false
        },
        'index': {
            items: 1,
            nav: false,
            controls: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 8000,
            mode: 'gallery'
        },
        'preview': {
            items: 3,
            loop: false,
            controls: true,
            nav: false
        },
        'modal': {
            items: 3,
            loop: false,
            gutter: 10,
            controls: true,
            mouseDrag: true,
            // center: true,
            arrowKeys: true,
            speed: 600,
            nav: false,
            responsive: {
                320: {
                    edgePadding: 10,
                    gutter: 10,
                    items: 1
                },
                768: {
                    items: 2,
                    gutter: 20,
                    edgePadding: 100
                }
            }
        },
        'products': {
            autoWidth: true,
            loop: true,
            center: true,
            mouseDrag: true,
            controls: false,
            nav: false
        }
    };

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function init() {
        var gallery = document.getElementById('gallery');

        if (gallery) {
            gallery.querySelectorAll('.slider__preview-item').forEach(function(element) {
                element.addEventListener('click', function(e) {
                    e.preventDefault();

                    var t = e.target,
                        active = gallery.querySelector('.slider__preview-item_active'),
                        zoom = gallery.querySelector('.gallery__zoom'),
                        src = t.querySelector('img').src,
                        imgNew = document.createElement('img'),
                        imgOld = zoom.querySelector('img');

                    imgNew.src = src;
                    imgNew.setAttribute('data-index', getNodeindex(t));

                    if (imgOld) {
                        setTimeout(function() {
                            imgOld.style.left = '-50%';
                            imgOld.style.opacity = 0;
                        }, 100);

                        setTimeout(function() {
                            imgOld.remove();
                        }, 500);
                    }

                    zoom.appendChild(imgNew);

                    setTimeout(function() {
                        imgNew.style.left = 0;
                        imgNew.style.opacity = 1;
                    }, 100);

                    if (active) active.classList.remove('slider__preview-item_active');

                    t.classList.add('slider__preview-item_active');
                });
            });

            if (gallery.length > 0)
                gallery.querySelector('.slider__preview-item').click();
        }

        document.querySelectorAll('[data-slider]').forEach(function(slider, i) {
            if (slider.dataset.sliderNotinit) return;
            sliderSet(slider);
        });
    };

    function selectTab(tab) {
        var index = tab.dataset.tabIndex,
            tabs = tab.closest('.tabs'),
            selected = tabs.querySelector('.tabs__item_selected');

        if (selected) selected.classList.remove('tabs__item_selected');

        tab.classList.add('tabs__item_selected');

        tabs.querySelectorAll('[data-tab]').forEach(function(tab, i) {
            if (tab.dataset.tab === index) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('[data-tabs]').forEach(function(tabs, i) {
        Array.prototype.forEach.call(tabs.children, function(tab) {
            tab.addEventListener('click', function(e) {
                e.preventDefault();

                var tab = e.target.closest('.tabs__item');

                selectTab(tab);
            });
        });

        selectTab(tabs.querySelector('[data-tab-index="0"]'));
    });

    document.querySelectorAll('.table_simple').forEach(function(table, i) {
        var count = table.querySelector('tr').children.length;

        table.querySelectorAll('.table__cell').forEach(function(cell, k) {
            cell.style.width = 100 / count + '%';
        });
    });

    document.querySelectorAll('[data-modal-open]').forEach(function(trigger, i) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();

            var t = e.target.closest('[data-modal-open]'),
                data = t.dataset.modalOpen,
                modalElement = document.querySelector('[data-modal="' + data + '"]'),
                modalContent = modalElement.innerHTML;

            var modal = new tingle.modal({
                closeMethods: ['overlay', 'escape'],
                onClose: function onClose() {
                    this.remove();
                },
                cssClass: modalElement.classList
            });

            modal.setContent(modalContent);
            modal.open();

            var sliders = modal.modalBoxContent.querySelectorAll('[data-slider]'),
                forms = modal.modalBoxContent.querySelectorAll('form');

            forms.forEach(function(form, i) {
                form.querySelectorAll('select').forEach(function(select, i) {
                    new CustomSelect({
                        elem: select
                    });
                });
            });

            sliders.forEach(function(slider, i) {
                sliderSet(slider);
            });

            document.querySelector('.modal__close').addEventListener('click', function(e) {
                e.preventDefault();

                modal.close();
            });
        });
    });

    document.querySelectorAll('.toggle').forEach(function(toggle, i) {
        toggle.addEventListener('click', function(e) {
            var t = e.target.closest('.toggle'),
                data = t.dataset.toggle,
                content = document.getElementById(data);

            t.classList.toggle('toggle_open');

            if (content.style.display == 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('[data-menu]').forEach(function(el, i) {
        el.addEventListener('click', function(e) {
            e.preventDefault();

            var page = document.querySelector('.page');

            window.scrollTo(0, 0);
            page.classList.toggle('page_frozen');

            if ([].concat(_toConsumableArray(page.classList)).includes('page_frozen')) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
            }

            document.querySelector('.search_mobile').classList.toggle('search_mobile-show');
            document.querySelector('.header__mobile').classList.toggle('header__mobile_show');
        });
    });

    document.querySelector('[data-search]').addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('[data-menu]').click();
    });

    document.querySelector('.m-btn').addEventListener('click', function(e) {
        var t = e.target.closest('.m-btn');

        t.classList.toggle('m-btn_toggle-click');
    });

    document.querySelectorAll('select').forEach(function(select, i) {
        if (select.closest('.modal')) return;

        new CustomSelect({
            elem: select
        });
    });

    init();

    // var slider = tns({
    //     container: "#mouse-drag",
    //     items: 2,
    //     mouseDrag: true,
    //     slideBy: 1,
    //     swipeAngle: false,
    //     speed: 400,
    //     nav: false,
    //     controls: false,
    //     autoplay: true,
    //     autoplayButton: false,
    //     autoplayButtonOutput: false,
    //     autoplayDirection: "backward"
    // });

    // var slider = tns({
    //     container: "#mouse-drag2",
    //     items: 2,
    //     mouseDrag: true,
    //     slideBy: 1,
    //     swipeAngle: false,
    //     speed: 400,
    //     nav: false,
    //     controls: false,
    //     autoplay: true,
    //     autoplayButton: false,
    //     autoplayButtonOutput: false,
    //     autoplayDirection: "forward"
    // });

    var slider = tns({
        container: "#gallerySlider",
        items: 1,
        controlsContainer: "#customize-controls",
        navContainer: '#customize-thumbnails',
        navAsThumbnails: true,
        controls: false,
    });

})(window);



// base64, eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsImdldE5vZGVpbmRleCIsImVsbSIsImMiLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwic2xpZGVyU2V0Iiwic2xpZGVyIiwiZGF0YSIsImRhdGFzZXQiLCJvcHRpb25zIiwib3B0aW9uc1NsaWRlcnMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udHJvbHMiLCJzbGlkZXNDb3VudCIsImNvbnRyb2xzQ29udGFpbmVyIiwicmVtb3ZlIiwidG5zIiwibmF2IiwiaXRlbXMiLCJhdXRvcGxheSIsImF1dG9wbGF5QnV0dG9uT3V0cHV0IiwiYXV0b3BsYXlUaW1lb3V0IiwibW9kZSIsImxvb3AiLCJtb3VzZURyYWciLCJjZW50ZXIiLCJhcnJvd0tleXMiLCJzcGVlZCIsInJlc3BvbnNpdmUiLCJlZGdlUGFkZGluZyIsImd1dHRlciIsImF1dG9XaWR0aCIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluaXQiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0IiwidGFyZ2V0IiwiYWN0aXZlIiwiem9vbSIsInNyYyIsImltZ05ldyIsImNyZWF0ZUVsZW1lbnQiLCJpbWdPbGQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJsZWZ0Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xpY2siLCJzbGlkZXJOb3Rpbml0Iiwic2VsZWN0VGFiIiwidGFiIiwiaW5kZXgiLCJ0YWJJbmRleCIsInRhYnMiLCJjbG9zZXN0Iiwic2VsZWN0ZWQiLCJkaXNwbGF5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwidGFibGUiLCJjb3VudCIsImNlbGwiLCJrIiwid2lkdGgiLCJ0cmlnZ2VyIiwibW9kYWxPcGVuIiwibW9kYWxFbGVtZW50IiwibW9kYWxDb250ZW50IiwiaW5uZXJIVE1MIiwibW9kYWwiLCJ0aW5nbGUiLCJjbG9zZU1ldGhvZHMiLCJvbkNsb3NlIiwiY3NzQ2xhc3MiLCJzZXRDb250ZW50Iiwib3BlbiIsInNsaWRlcnMiLCJtb2RhbEJveENvbnRlbnQiLCJmb3JtcyIsImZvcm0iLCJzZWxlY3QiLCJDdXN0b21TZWxlY3QiLCJlbGVtIiwiY2xvc2UiLCJ0b2dnbGUiLCJjb250ZW50IiwiZWwiLCJwYWdlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJpbmNsdWRlcyIsImRvY3VtZW50RWxlbWVudCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWQ7QUFDQUM7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMEI7QUFDeEIsUUFBSUMsSUFBSUQsSUFBSUUsVUFBSixDQUFlQyxRQUF2QjtBQUFBLFFBQ0lDLElBQUksQ0FEUjs7QUFHQSxXQUFNQSxJQUFJSCxFQUFFSSxNQUFaLEVBQW9CRCxHQUFwQjtBQUNJLFVBQUdILEVBQUVHLENBQUYsS0FBUUosR0FBWCxFQUFnQixPQUFPSSxDQUFQO0FBRHBCO0FBRUQ7O0FBRUQsV0FBU0UsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDekIsUUFBTUMsT0FBT0QsT0FBT0UsT0FBUCxDQUFlRixNQUE1QjtBQUFBLFFBQ01HLFVBQVVDLGVBQWVILElBQWYsQ0FEaEI7QUFBQSxRQUVNSSxZQUFZTCxPQUFPTSxhQUFQLENBQXFCLHNCQUFyQixDQUZsQjtBQUFBLFFBR01DLFdBQVdQLE9BQU9NLGFBQVAsQ0FBcUIsd0JBQXJCLENBSGpCO0FBQUEsUUFJTUUsY0FBY0gsVUFBVVQsUUFBVixDQUFtQkUsTUFKdkM7O0FBTUFLLFlBQVFFLFNBQVIsR0FBb0JMLE9BQU9NLGFBQVAsQ0FBcUIsc0JBQXJC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LFFBQUk0QixZQUFKLENBQWlCO0FBQ2ZDLFlBQU1GO0FBRFMsS0FBakI7QUFHRCxHQU5EOztBQVFBNUQ7QUFFRCxDQTdSRCxFQTZSR29FLE1BN1JIIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihyb290KSB7XG5cbiAgLy8gc3ZnIGZvciBhbGxcbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4gIGZ1bmN0aW9uIGdldE5vZGVpbmRleChlbG0pe1xuICAgIHZhciBjID0gZWxtLnBhcmVudE5vZGUuY2hpbGRyZW4sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yKDsgaSA8IGMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmKGNbaV0gPT0gZWxtKSByZXR1cm4gaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlclNldChzbGlkZXIpIHtcbiAgICBjb25zdCBkYXRhID0gc2xpZGVyLmRhdGFzZXQuc2xpZGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zU2xpZGVyc1tkYXRhXSxcbiAgICAgICAgICBjb250YWluZXIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLXNsaWRlc10nKSxcbiAgICAgICAgICBjb250cm9scyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItY29udHJvbHNdJyksXG4gICAgICAgICAgc2xpZGVzQ291bnQgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoXG5cbiAgICBvcHRpb25zLmNvbnRhaW5lciA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItc2xpZGVzXScpXG5cbiAgICBpZiAob3B0aW9ucy5jb250cm9scyA9PSB0cnVlICYmIHNsaWRlc0NvdW50ID4gMSkge1xuICAgICAgb3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciA9IGNvbnRyb2xzXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuY29udHJvbHMgPSBmYWxzZVxuICAgICAgaWYgKGNvbnRyb2xzKSBjb250cm9scy5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRucyhvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgb3B0aW9uc1NsaWRlcnMgPSB7XG4gICAgJ2luaXQnOiB7XG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIG5hdjogZmFsc2VcbiAgICB9LFxuICAgICdpbmRleCc6IHtcbiAgICAgIGl0ZW1zOiAxLFxuICAgICAgbmF2OiBmYWxzZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheUJ1dHRvbk91dHB1dDogZmFsc2UsXG4gICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXG4gICAgICBtb2RlOiAnZ2FsbGVyeScsXG4gICAgfSxcbiAgICAncHJldmlldyc6IHtcbiAgICAgIGl0ZW1zOiAzLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIG5hdjogZmFsc2UsXG4gICAgfSxcbiAgICAnbW9kYWwnOiB7XG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgbW91c2VEcmFnOiB0cnVlLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgYXJyb3dLZXlzOiB0cnVlLFxuICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgIG5hdjogZmFsc2UsXG4gICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIDMyMDoge1xuICAgICAgICAgIGVkZ2VQYWRkaW5nOiAxMCxcbiAgICAgICAgICBndXR0ZXI6IDEwLFxuICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgIGd1dHRlcjogMjAsXG4gICAgICAgICAgZWRnZVBhZGRpbmc6IDEwMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAncHJvZHVjdHMnOiB7XG4gICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgbW91c2VEcmFnOiB0cnVlLFxuICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgbmF2OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbUludChtaW4sbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5Jyk7XG5cbiAgICBpZiAoZ2FsbGVyeSkge1xuICAgICAgZ2FsbGVyeS5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19wcmV2aWV3LWl0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBjb25zdCB0ID0gZS50YXJnZXQsXG4gICAgICAgICAgYWN0aXZlID0gZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19wcmV2aWV3LWl0ZW1fYWN0aXZlJyksXG4gICAgICAgICAgem9vbSA9IGdhbGxlcnkucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3pvb20nKSxcbiAgICAgICAgICBzcmMgPSB0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyxcbiAgICAgICAgICBpbWdOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICAgICAgICBpbWdPbGQgPSB6b29tLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cbiAgICAgICAgICBpbWdOZXcuc3JjID0gc3JjXG4gICAgICAgICAgaW1nTmV3LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGdldE5vZGVpbmRleCh0KSlcblxuICAgICAgICAgIGlmIChpbWdPbGQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGltZ09sZC5zdHlsZS5sZWZ0ID0gJy01MCUnXG4gICAgICAgICAgICAgIGltZ09sZC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpbWdPbGQucmVtb3ZlKClcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB6b29tLmFwcGVuZENoaWxkKGltZ05ldylcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWdOZXcuc3R5bGUubGVmdCA9IDBcbiAgICAgICAgICAgIGltZ05ldy5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgIGlmIChhY3RpdmUpIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3ByZXZpZXctaXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgIHQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19wcmV2aWV3LWl0ZW1fYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGdhbGxlcnkucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fcHJldmlldy1pdGVtJykuY2xpY2soKVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNsaWRlcl0nKS5mb3JFYWNoKFxuICAgICAgKHNsaWRlciwgaSkgPT4ge1xuICAgICAgICBpZiAoc2xpZGVyLmRhdGFzZXQuc2xpZGVyTm90aW5pdCkgcmV0dXJuXG4gICAgICAgIHNsaWRlclNldChzbGlkZXIpXG4gICAgICB9XG4gICAgKVxuXG4gIH07XG5cbiAgZnVuY3Rpb24gc2VsZWN0VGFiKHRhYikge1xuICAgIGNvbnN0IGluZGV4ID0gdGFiLmRhdGFzZXQudGFiSW5kZXgsXG4gICAgICAgICAgdGFicyA9IHRhYi5jbG9zZXN0KCcudGFicycpLFxuICAgICAgICAgIHNlbGVjdGVkID0gdGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19faXRlbV9zZWxlY3RlZCcpXG5cbiAgICBpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2l0ZW1fc2VsZWN0ZWQnKVxuXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2l0ZW1fc2VsZWN0ZWQnKVxuXG4gICAgdGFicy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJykuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICBpZiAodGFiLmRhdGFzZXQudGFiID09PSBpbmRleCkge1xuICAgICAgICB0YWIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYnNdJykuZm9yRWFjaCgodGFicywgaSkgPT4ge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGFicy5jaGlsZHJlbiwgdGFiID0 + IHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YWJzX19pdGVtJylcblxuICAgICAgICBzZWxlY3RUYWIodGFiKVxuXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgc2VsZWN0VGFiKHRhYnMucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiLWluZGV4PVwiMFwiXScpKVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9zaW1wbGUnKS5mb3JFYWNoKCh0YWJsZSwgaSkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gdGFibGUucXVlcnlTZWxlY3RvcigndHInKS5jaGlsZHJlbi5sZW5ndGhcblxuICAgIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fY2VsbCcpLmZvckVhY2goKGNlbGwsIGspID0 + IHtcbiAgICAgIGNlbGwuc3R5bGUud2lkdGggPSAoMTAwIC8gY291bnQpICsgJyUnXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1vcGVuXScpLmZvckVhY2goKHRyaWdnZXIsIGkpID0 + IHtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0 + IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBjb25zdCB0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWwtb3Blbl0nKSxcbiAgICAgICAgICAgIGRhdGEgPSB0LmRhdGFzZXQubW9kYWxPcGVuLFxuICAgICAgICAgICAgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke2RhdGF9XCJdYCksXG4gICAgICAgICAgICBtb2RhbENvbnRlbnQgPSBtb2RhbEVsZW1lbnQuaW5uZXJIVE1MXG5cbiAgICAgIGxldCBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xuICAgICAgICBjbG9zZU1ldGhvZHM6IFsnb3ZlcmxheScsICdlc2NhcGUnXSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoKVxuICAgICAgICB9LFxuICAgICAgICBjc3NDbGFzczogbW9kYWxFbGVtZW50LmNsYXNzTGlzdFxuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsLnNldENvbnRlbnQobW9kYWxDb250ZW50KVxuICAgICAgbW9kYWwub3BlbigpXG5cbiAgICAgIGNvbnN0IHNsaWRlcnMgPSBtb2RhbC5tb2RhbEJveENvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLFxuICAgICAgICAgICAgZm9ybXMgPSBtb2RhbC5tb2RhbEJveENvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpXG5cbiAgICAgIGZvcm1zLmZvckVhY2goKGZvcm0sIGkpID0 + IHtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKChzZWxlY3QsIGkpID0 + IHtcbiAgICAgICAgICBuZXcgQ3VzdG9tU2VsZWN0KHtcbiAgICAgICAgICAgIGVsZW06IHNlbGVjdFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBzbGlkZXJzLmZvckVhY2goKHNsaWRlciwgaSkgPT4ge1xuICAgICAgICBzbGlkZXJTZXQoc2xpZGVyKVxuICAgICAgfSlcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0 + IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbW9kYWwuY2xvc2UoKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUnKS5mb3JFYWNoKCh0b2dnbGUsIGkpID0 + IHtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2dnbGUnKSxcbiAgICAgICAgICAgIGRhdGEgPSB0LmRhdGFzZXQudG9nZ2xlLFxuICAgICAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpXG5cbiAgICAgIHQuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlX29wZW4nKVxuXG5cbiAgICAgIGlmIChjb250ZW50LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZW51XScpLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpXG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgICBwYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VfZnJvemVuJylcblxuICAgICAgaWYgKFsuLi5wYWdlLmNsYXNzTGlzdF0uaW5jbHVkZXMoJ3BhZ2VfZnJvemVuJykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICcnXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfbW9iaWxlJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoX21vYmlsZS1zaG93JylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYmlsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbW9iaWxlX3Nob3cnKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0 + IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lbnVdJykuY2xpY2soKVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0 + IHtcbiAgICBjb25zdCB0ID0gZS50YXJnZXQuY2xvc2VzdCgnLm0tYnRuJylcblxuICAgIHQuY2xhc3NMaXN0LnRvZ2dsZSgnbS1idG5fdG9nZ2xlLWNsaWNrJylcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKChzZWxlY3QsIGkpID0 + IHtcbiAgICBpZiAoc2VsZWN0LmNsb3Nlc3QoJy5tb2RhbCcpKSByZXR1cm5cblxuICAgIG5ldyBDdXN0b21TZWxlY3Qoe1xuICAgICAgZWxlbTogc2VsZWN0XG4gICAgfSlcbiAgfSlcblxuICBpbml0KClcblxufSkod2luZG93KTtcbiJdfQ ==