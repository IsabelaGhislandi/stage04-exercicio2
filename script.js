const candidates = [
    
    {
        name: "Leticia",
        point1: 6,
        point2: 8,
    },
    {
        name: "João",
        point1: 5,
        point2: 4,
    },
    {
        name: "Vinicius",
        point1: 10,
        point2: 7,
    },

    {
        name: "Clara",
        point1: 3,
        point2: 7,
    },
]
    function calculateGrade(number1, number2) {
        let calculation = (number1 + number2) / 2
        return calculation
    }


    function grade(candidate) {
        let calculationCandidate = calculateGrade(candidate.point1, candidate.point2)
       

            if (calculationCandidate < 7) {
                return ` A média do(a) aluno(a) ${candidate.name} é: ${calculationCandidate} \n Não foi dessa vez ${candidate.name}, tente novamente!`
            } else {
                return `A média do(a) aluno(a) ${candidate.name} é: ${calculationCandidate} \n Parabéns ${candidate.name}! Você foi aprovado(a) no concurso`
               
            }
     
           return calculationCandidate
    }

    candidates.forEach(candidate => {
        let message = grade(candidate)
        alert(message)
     }) 
