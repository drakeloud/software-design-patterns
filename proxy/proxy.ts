export interface IAtm {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

export class Logger {
    public static log(message: string) {
        console.log(`Logger: ${message}`);
    }
}

export class AtmProxy implements IAtm {
    private atm: Atm;

    public deposit(amount: number): void {
        console.log(`Proxy: Trying to deposit $${amount} to your bank account.`);
        if (this.atm === null || this.atm === undefined) {
            this.connectToAtm();
        }
        this.atm.deposit(amount);
        Logger.log('Successful deposit!');  
    }

    public withdraw(amount: number): void {
        console.log(`Proxy: Trying to withdraw $${amount} from your bank account.`);
        if (this.atm === null || this.atm === undefined) {
            this.connectToAtm();
        }
        this.atm.withdraw(amount);  
        Logger.log('Successful withdrawal!');       
    }

    private connectToAtm() {
        console.log(`Proxy: Reconnecting to Atm`);
        this.atm = new Atm();
    }
}

export class Atm implements IAtm {
    public deposit(amount: number): void {
        console.log(`Atm: Depositing $${amount} to your bank account.`);
    }
    public withdraw(amount: number): void {
        console.log(`Atm: Withdrawing $${amount} from your bank account.`);
    }
}

function runProxyDemo() : void {
    let atmProxy: AtmProxy = new AtmProxy();
    atmProxy.deposit(10);
    console.log();
    atmProxy.deposit(30);
    console.log();
    atmProxy.withdraw(20);
    console.log();
}

runProxyDemo();