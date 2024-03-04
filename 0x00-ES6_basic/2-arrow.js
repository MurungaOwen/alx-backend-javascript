export class getNeighborhoodsList {
    constructor() {
        this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

        const self = this;
        this.addNeighborhood = (newNeighborhood) => {
            self.sanFranciscoNeighborhoods.push(newNeighborhood);
            return self.sanFranciscoNeighborhoods;
        };
    }
}


