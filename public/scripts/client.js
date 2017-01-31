var app=angular.module('introApp',[])

app.controller('FormController',function(){

console.log('FormController loaded');

var formData=this;

formData.empList=[];
formData.SalaryExpenditure=0;

formData.addEmployee=function(){
console.log('inside addEmployee function');
console.log(formData.empList);
if(formData.data.employeeAnnualSalary!=undefined){
formData.SalaryExpenditure+=(formData.data.employeeAnnualSalary/12);
}
formData.empList.push(angular.copy(formData.data));

}


formData.deleteEmployee=function(index,salary){
  console.log('inside deleteEmployee function',index,salary);
      if(salary!=undefined){
      formData.SalaryExpenditure-=(salary/12);
    }
      formData.empList.splice(index,1);
}

// formData.deleteEmployee=function(name){
//   //console.log('inside deleteEmployee function',name);
//   formData.empList.forEach(function(emp){
//     if(emp.employeeFirstName==name){
//     //  console.log('array index',formData.empList.indexOf(emp));
//       //console.log('inside if condition in forEach');
//       formData.SalaryExpenditure-=(emp.employeeAnnualSalary/12);
//       formData.empList.splice(formData.empList.indexOf(emp),1);
//
//     }
//     //console.log('display list after delete',formData.empList);
//   })
// }
});
