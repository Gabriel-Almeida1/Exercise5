var menSum = 0
var womenSum = 0
var menHighestGrade = 0
var gradesSum = 0
var studentsSum = 0

while (true) {
    var input = prompt("Do you want to insert a student's info? Type 'y' or 'n': ")
    if (input == 'y') {
        var grade = prompt("Type the student grade: ")
        var sexuality = prompt("Type 'm' for masculine or 'f' for feminine: ")
        
        gradesSum += parseInt(grade)
        studentsSum += 1

        if (sexuality == 'm') {
            menSum += 1  
            if (menHighestGrade < parseInt(grade)){
                menHighestGrade = parseInt(grade)
            }
        } else if (sexuality == 'f' && parseInt(grade) >= 7) {
            womenSum += 1
        }
    } else {
        console.log(gradesSum / studentsSum)
        console.log(menSum)
        console.log(womenSum)
        console.log(menHighestGrade)
        break;
    }

}

