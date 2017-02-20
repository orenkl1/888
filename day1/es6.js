/**
 * Created by Eyal Vardi LTD. on 20/02/2017.
 */

var counter = 0;

export class MainCtrl{
    constructor(bl,x,y){
        this.bl = bl;
        this.x = x;
        this.y = y;
    }
    static counter(){}
    static get test(){}


    // methods
    add(z){
        return this.x+this.y;
    }

    // properties
    get items(){
        return this.bl.items;
    }
    set items(val){
        this.bl.items = val;
    }
}