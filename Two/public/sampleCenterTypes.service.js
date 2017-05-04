angular.module('SampleCenterTypes').factory("SampleCenterTypeService",['$http',
    function($http){
        return{
            get: ()=>$http.get('/sampleCenterTypes').then(response =>response.data),
            add: sampleCenterType=>$http.post('/sampleCenterTypes',sampleCenterType).then(response =>response.data),
            delete:id=>$http.delete('/sampleCenterTypes/'+id).then(response=>response.data)
        }
    }]);