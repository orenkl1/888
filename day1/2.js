/**
 * Created by Eyal Vardi LTD. on 20/02/2017.
 */

var Point = (function () {
    // private static members
    var counter = 0;

// constructor
    function Point(x,y) {
        this.x = x;
        this.y = y;
        Point.counter ++;
        this._name = 'ee';
        //return this;
    }
// public methods
    Point.prototype.add = function () {
        return this.x + this.y;
    };
// public static methods
    Point.counter = 0;

    // properties
    Object.defineProperty(Point.prototype,'name',{
        get: function () {
            return 'x: ' + this.x + 'y: ' + this.y;
        },
        set: function (val) {
            this._name = val;
        }
    });

    return Point;
})();



var p = new Point(1,2);
p.add();
var  a ={}; // new Object()
/////////////// new ///////////
var p = {'__proto__': Point.prototype};
Point.call(p,1,2);

