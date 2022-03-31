student_Info = [
    {
        name:"A",
        score:"90%"
    },
    {
        name:"B",
        score:"95%"
    },
    {
        name:"C",
        score:"70%"
    }
];

function getStudentDetails(){
    

    setTimeout(()=>{
        let Stundent ="";

        Student.forEach((s)=>{
            console.log(s);
        })
    }),1000
}

function addStudent(newStudent){
    

    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                studentInfo.push(newStudent)
                let flag= true;
                if(flag){
                    resolve()
                }else{
                    reject("Error")
                }
            },1000)
        }
    )
}


AddStudent({name:"W",score:"80%"}).then(getStudentDetails).catch(err=>console.log(err));