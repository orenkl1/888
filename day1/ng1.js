/**
 * Created by Eyal Vardi LTD. on 20/02/2017.
 */
function MainCtrl($scope,bl) {
    //$scope.items = bl.items;
    //this.items = bl.items;
    // this.bl = bl;

}
Object.defineProperty(MainCtrl.prototype,'items',{
    get: function () {
        return this.bl.items;
    }
});

