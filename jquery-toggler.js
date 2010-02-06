// toggler v0.0.1 - a jQuery plugin for togglering elements around...
// (c) 2010 Robert Basic - http://robertbasic.com - contactme@robertbasic.com
// Licensed under the New BSD license: http://www.opensource.org/licenses/bsd-license.php
jQuery.fn.toggler = function(options) {
    var defaults = {
        speed: 1000,
        openTop: 0,
        closedTop: -200
    }

    options = $.extend({}, defaults, options || {});

    $(this).each(function(){

        var togglerDude = $(this);
        var toggler = $(this).attr('rel');
        var toBeTogglered = $("#" + toggler);

        toBeTogglered.wrap('<div class="outside" id="o_' + toggler + '" />');
        toBeTogglered.toggleClass('togglered');

        togglerDude.bind('click', function(event) {

            $(".outside[id!=o_"+toggler+"]").animate({
                    height: '0px'
                },
                options.speed
            );
            $(".toggler[id!="+toggler+"]").animate({
                    top: options.closedTop + 'px'
                },
                options.speed
            );

            if(toBeTogglered.position().top != options.openTop) {
                $(".outside[id=o_"+toggler+"]").animate({
                        height: '200px'
                    },
                    options.speed
                );
                toBeTogglered.animate({
                        top: options.openTop + 'px'
                    },
                    options.speed
                );
            } else {
                $(".outside[id=o_"+toggler+"]").animate({
                        height: '0px'
                    },
                    options.speed
                );
                toBeTogglered.animate({
                        top: options.closedTop + 'px'
                    },
                    options.speed
                );
            }

            event.preventDefault();

        });

    });
}