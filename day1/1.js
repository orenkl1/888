/**
 * Created by Eyal Vardi LTD. on 20/02/2017.
 */
function MainCtrl($scope) {
    $scope.add = function () {

    }
}

function Point(x,y) {
    return{
        add:function () {
            return x+y;
        }
    }
}

var p = new Point(1,2);
p.add();