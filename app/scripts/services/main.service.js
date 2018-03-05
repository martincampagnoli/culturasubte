
/*global services, common*/
// 
// 'use strict';
//
// services.service('commonServices', ['$q', '$http',
//     function ($q, $http) {
//
//         return {
// 		 sendEmail: function (data) {
//                 var url = "./send.php",
//
// 				deferred = $q.defer();
//
//                 $http.post(url, data)
//                      .success(function (data) { deferred.resolve(data); })
//                      .error(function (data, status) { deferred.reject({ data: data, status: status }); });
//                 return deferred.promise;
//             }
//
//         };
//     }
// ]);
