// toggler v0.0.1 - a jQuery plugin for togglering elements around...
// (c) 2010 Robert Basic - http://robertbasic.com - contactme@robertbasic.com
// Licensed under the New BSD license: http://www.opensource.org/licenses/bsd-license.php
jQuery.fn.toggler = function(options) {
    var defaults = {
        speed: 1000,
        openHeight: 140,
        closedHeight: 40
    }
    options = $.extend({}, defaults, options || {});
    var togglerDude = $(this);
    togglerDude.bind('click', function(event) {
        var toggler = $(this).attr('rel');
        var toBeTogglered = $("#" + toggler);
        $(".toggler[id!="+toggler+"]").animate({
                height: options.closedHeight+'px'
            },
            options.speed
        );

        if(toBeTogglered.height() != options.openHeight) {
            toBeTogglered.animate({
                    height: options.openHeight+'px'
                },
                options.speed
            );
        } else {
            toBeTogglered.animate({
                    height: options.closedHeight+'px'
                },
                options.speed
            );
        }
        event.preventDefault();
    });
}