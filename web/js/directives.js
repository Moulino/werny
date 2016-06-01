(function (angular, $) {
    "use strict";
    
    var app = angular.module('App');
    
    app.directive('menu', function() {
        return {
            restrict: 'C',
            link: function(scope, element) {
                element.find('md-list-item:first').addClass('selected');
                element.on('click', 'md-list-item', function() {
                    $(this).siblings('.selected').removeClass('selected');
                    $(this).addClass('selected');
                });
            }
        };
    });

    app.directive("fullscreenSlider", function ($window) {
        var updateHeight = function(slider) {
            slider.css('height', $window.innerHeight);
        };
        
        return {
            restrict: "EAC",
            link: function (scope, element) {
                var className = "fullscreen-slider";

                if (!element.hasClass(className)) {
                    element.addClass(className);
                }

                updateHeight(element);

                $window.onresize = function() {
                    updateHeight(element);
                }
            }
        };
    });

    app.directive("fullscreenSliderImage", function ($window) {
        var updatePosition = function (image) {
            var windowWidth = $window.innerWidth, windowHeight = $window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var imageWidth = image.width, imageHeight = image.height;
            var imageRatio = imageWidth / imageHeight;
            var top = 0, left = 0;

            if (windowRatio >= imageRatio) {
                var imageWidth = windowWidth;
                imageHeight = windowWidth / imageRatio;

                top = Math.ceil((windowHeight - imageHeight) / 2);
                left = 0;
            } else {
                imageHeight = windowHeight;
                imageWidth = windowHeight * imageRatio;

                top = 0;
                left = Math.ceil((windowWidth - imageWidth) / 2);
            }

            image.style.width = imageWidth.toString() + "px";
            image.style.height = imageHeight.toString() + "px";
            image.style.top = top.toString() + "px";
            image.style.left = left.toString() + "px";
        };

        return {
            restrict: "AC",
            link: function (scope, element) {
                var image = element.get(0);
                var className = "fullscreen-slider-image";

                if (!element.hasClass(className)) {
                    element.addClass(className);
                }

                updatePosition(image);
                
                $($window).on('resize', function() {
                    updatePosition(image);
                });
            }
        };
    });

    app.directive("backToTop", function($window) {
        return {
            restrict: "E",
            transclude: true,
            template: "\
                <md-button class='back-to-top' ng-click='scrollToTop()'>\
                    <md-icon class='fa fa-chevron-up fa-2x fa-inverse'></md-icon>\
                </md-button>",
            link: function(scope, element) {
                element.children('button').click(function() {
                    $window.scrollTo(0, 0);
                });

                $($window).scroll(function(event) {
                    var scrollTop = $($window).scrollTop();
                    if(0 === scrollTop) {
                        element.hide();
                    } else {
                        element.show();
                    }
                });
            }
        };
    });
}(angular, angular.element));