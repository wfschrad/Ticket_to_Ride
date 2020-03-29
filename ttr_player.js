//Player class for TTR board game
export class Player {
    constructor (name, color, trainStartCount) {
        this.name = name;
        this.color = color;
        this.trainCount = trainStartCount;
        this.cards = {
            'trains': [],
            'routes': []
        };
    }

    playTurn(choice) {
        //executing player choice
        //switch-case?
        switch (choice, drawnCards) {
            case 'drawTrain':
                this.cards.trains.push(...drawnCards);
                break;
            case 'drawRoute':
                this.cards.routes.push(...drawnCards);
                break;
            case 'PlaceTrain':
                trainCount--;
                //code
        }
            //implement computer AI (later versions)
    }


    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getTrainCount() {
        return this.trainCount;
    }

}//advantage of array vs object???
