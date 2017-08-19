angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('m82Service', ['$q','$http', m82Service]);

function m82Service($q,$http) {  
	var _db;
	var demnhom = 0;
	var ObjDe = new Array;
	var ObjEn = new Array;
    function ConnectDb() {
		if(typeof(Storage) !== "undefined") {
			if (localStorage.getItem("m82json") === null) {
				$http.get("js/m82.xml", {
					transformResponse: function (cnv) {
						localStorage.setItem("m82json", cnv);
						console.log('Save data to local strorage success !!!');
						_db = TAFFY(localStorage.getItem("m82json"));
					}
				})
				return 0;
			} else {
				_db = TAFFY(localStorage.getItem("m82json"));
				return 1;
			}
		} else {
			$http.get("js/m82.xml", {
				transformResponse: function (cnv) {
					_db = TAFFY(cnv);
				}
			})
			return 2;
		}
    }
	function TachNhom(text1,text2,kt) {
		if(text1==text2) {
			kt = 1;
		} else {
			kt +=1;
		}
		tmp = _db({chu:text1}).first();
		if(tmp != false) {
			ObjEn[demnhom] = tmp['so'];
			ObjDe[demnhom] = text1;
			demnhom += 1;
			if(text1.length != text2.length) {
				var text3 = text2.slice(text1.length);
                TachNhom(text3, text3,kt);
            } else {
				return true;
			}
		} else {
			TachNhom(text2.slice(0,text2.length - kt),text2,kt);
        }
		return true;
	}
	function ThucHanh(ObjString) {
		demnhom = 0;
		ObjDe = new Array;
		ObjEn = new Array;
		for (i = 0; i < ObjString.length; i++) { 
			TachNhom(ObjString[i],ObjString[i],1);
		}
		console.log(demnhom);
		return {ObjDe,ObjEn,demnhom};
	}
	//chưa xong
	function filter(textforEncode) {
		var stringFomat = textforEncode.toLowerCase();
		var rgx = new RegExp('[^a-z0-9áàạảãâấầậẩẫăắằặẳẵéèẹẻẽêếềệểễóòọỏõôốồộổỗơớờợởỡúùụủũưứừựửữíìịỉĩđýỳỵỷỹ.;/-?Ω:=%() ]');
		while ((m = rgx.exec(stringFomat)) != null) {
			stringFomat = stringFomat.replace(m[0],'');
		}
		return stringFomat;
		
	}
    return {
		Pratice: ThucHanh,
        ConnectDb: ConnectDb,
		TachNhom: TachNhom,
		Loc: filter
    };
}
