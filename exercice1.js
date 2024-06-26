class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = 'ACC-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.balance;
    }

    printAccountInfo() {
        console.log(`Owner: ${this.owner}, Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}


let account1 = new BankAccount("yassine mazhare", 500);
let account2 = new BankAccount("Yassine2 mz", 1000);

account1.deposit(200);
account1.withdraw(100);
account1.printAccountInfo();

account2.deposit(500);
account2.withdraw(2000);
account2.printAccountInfo();
