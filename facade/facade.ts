export class FloorCleaning {
    public vacuum(): void {
        console.log('Vacuuming!');
    }

    public sweep(): void {
        console.log('Sweeping!');
    }
}

export class LaundryCleaning {
    public pickUpLaundry(): void {
        console.log('Picking up laundry!');
    }

    public washLaundry(): void {
        console.log('Washing laundry!')
    }

    public foldLaundry(): void {
        console.log('folding laundry!')
    }
}

export class DustCleaning {
    public dustValuables(): void {
        console.log('Dusting valuables!');
    }

    public dustBaseboards(): void {
        console.log('Dusting baseboards!')
    }
}

export class CleaningFacade {    
    private floorCleaning: FloorCleaning = new FloorCleaning();
    private laundryCleaning: LaundryCleaning = new LaundryCleaning();
    private dustCleaning: DustCleaning = new DustCleaning();

    public cleanBedroom(): void {
        console.log('*** Starting to clean bedroom ***');
        this.laundryCleaning.pickUpLaundry();
        this.laundryCleaning.washLaundry();
        this.dustCleaning.dustBaseboards();
        this.floorCleaning.vacuum();
        this.laundryCleaning.foldLaundry();
        console.log('*** Ending clean bedroom job ***');
    }

    public cleanLivingRoom(): void {
        console.log('*** Starting to clean living room ***');
        this.laundryCleaning.pickUpLaundry();
        this.dustCleaning.dustValuables();
        this.dustCleaning.dustBaseboards();
        this.floorCleaning.sweep();
        console.log('*** Ending clean living room job ***');
    }
}

function runFacadeDemo() : void {
    var cleaningFacade: CleaningFacade = new CleaningFacade();
    cleaningFacade.cleanBedroom();
    cleaningFacade.cleanLivingRoom();
}

runFacadeDemo();