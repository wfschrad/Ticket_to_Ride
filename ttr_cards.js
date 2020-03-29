//card object(s) file

//route card
//train card
export class Card {
    constructor(type, val) {
        this.type = type;
        this.val = val;
    }
    getType () {
        return this.type;
    }
    getVal () {
        return this.val;
    }
}
