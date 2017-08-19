angular.module('app.controllers', [])
  
.controller('mTNGM82Ctrl',['$scope','m82Service','$stateParams','$ionicHistory', function ($scope,m82Service,$stateParams,$ionicHistory,$rootScope) {
	$scope.thongbao = "Đang tải cơ sở dữ liệu";
	var kqq = m82Service.ConnectDb();
	if (kqq = 0) {
		$scope.thongbao = "Tải cơ sở dữ liệu lần đầu thành công";
	} else if (kqq = 1) {
		$scope.thongbao = "Tải cơ sở dữ liệu từ bộ nhớ thành công";
	} else if (kqq = 2) {
		$scope.thongbao = "Tải cơ sở dữ liệu trực tuyến thành công";
	} else {
		$scope.thongbao = "Tải cơ sở dữ liệu thất bại";
	}
	$scope.thuchanhmadien = function(Textm82) {
		$scope.thongbao = "Đang tiến hành mã dịch điện ...";
		var chuoi = m82Service.Loc(Textm82).split(" ");
		ketqua = m82Service.Pratice(chuoi);
		$scope.mat = ketqua.ObjEn;
		$scope.ro  = ketqua.ObjDe;
		$scope.thongbao = ketqua.ObjEn+"###"+ketqua.ObjDe;
		$scope.range = new Array();
		var dkien = Math.ceil(ketqua.demnhom/4)
		for (i = 0; i < dkien; i++) { 
			$scope.range.push(i);
		}
		$scope.kiemtra = false;
		$scope.thongbao = "Mã dịch điện thành công";
	}
	$scope.checkback = function() {
		$scope.kiemtra = true;
		
	}
}])
 