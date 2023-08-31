let counterId = 10000;

const idGiver = function(){
    counterId++;
    return counterId;
}

export default idGiver;