function Student (name,email) {
    let _name = name;
    let _email = email;
    this.getName= () => _name;
    this.getEmail=() => _email;
    let homworkRes = [];
    this.addHomworkResult = function(topic,success) {
        homworkRes.push({topic:topic, success:success})
    }
    this.getHomworkResult = () => homworkRes;
}

function FrontendLab (studentsList,failedHomeworksLimit) {
    let _failedHomeworksLimit = failedHomeworksLimit;
    let _studentsList = studentsList;
    for(let i=0; i<_studentsList.length; i++){
        _studentsList[i].resultsOf=[];
    }
    this.getFailedHomeworksLimit= () => _failedHomeworksLimit;
    this.getStudentsList=() => _studentsList;
    this.setFailedHomeworksLimit = function (num){
        _failedHomeworksLimit=num;
    }
    this.setStudentsList = function(arr){
        _studentsList=arr;
    }
    this.printStudentsList = function(){
        _studentsList.forEach(element => {
            console.log(element);
        });
    }

    this.addHomworkResult = function(resultArr) {
        for(let i=0; i<_studentsList.length; i++){
            for(let j=0; j<resultArr.results.length; j++){
                if(_studentsList[i].email===resultArr.results[j].email){
                    _studentsList[i].resultsOf.push({topic:resultArr.topic, success:resultArr.results[j].success})
                }
            }
        }
    }

    this.printStudentsEligibleForTest = function(){
        let allowPoint=0;
        for(let i=0; i<_studentsList.length; i++){
            for(let j=0; j<_studentsList[i].resultsOf.length; j++){
                if(!_studentsList[i].resultsOf[j].success){
                    allowPoint++;
                }
            }
            if(allowPoint<=_failedHomeworksLimit) {
                console.log(_studentsList[i])
            }
        }
    }
}
