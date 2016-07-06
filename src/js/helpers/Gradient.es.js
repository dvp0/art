/**
 * Created by dev on 7/5/16.
 */

const $ = require('jquery');

class Gradient {

    constructor(options) {
        const self = this;
        this.options = options;
        this.colorIndices = options.colorIndices || [0,1,2,3];
        this.gradientSpeed = options.gradientSpeed || 0.005;
        this.colors = options.colors || [
                [62,35,255],
                [60,255,60],
                [255,35,98],
                [45,175,230],
                [255,0,255],
                [255,128,0]
            ];

        this.step = 0;

        this.updateGradient();
        this.interval = setInterval(function () {
            self.updateGradient();
        }, 10);
    }

    updateGradient () {

        const options = this.options;
        if ( $ === undefined ) {return};

        var c0_0 = this.colors[this.colorIndices[0]];
        var c0_1 = this.colors[this.colorIndices[1]];
        var c1_0 = this.colors[this.colorIndices[2]];
        var c1_1 = this.colors[this.colorIndices[3]];

        var istep = 1 - this.step;
        var r1 = Math.round(istep * c0_0[0] + this.step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + this.step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + this.step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";

        var r2 = Math.round(istep * c1_0[0] + this.step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + this.step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + this.step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";

        $(options.startSelector).attr('stop-color', color1);
        $(options.endSelector).attr('stop-color', color2);

        $(options.cssGradientSelector)
            .css({ background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"})
            .css({ background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"});

        this.step += this.gradientSpeed;
        if ( this.step >= 1 )
        {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            this.colorIndices[1] = ( this.colorIndices[1] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
            this.colorIndices[3] = ( this.colorIndices[3] + Math.floor( 1 + Math.random() * (this.colors.length - 1))) % this.colors.length;

        }
    }
}

module.exports = Gradient;