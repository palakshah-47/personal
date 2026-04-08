/*
Design a banking system to facilitate account creation, 
deposits, transfers, and listing the most active accounts by
total monetary activity, with commands entered via parsing
CSV/JSON or a native list of raw data. Implement it using typescript
*/

type Account = {
	id: number;
	name: string;
	balance: number;
	totalActivity: number;
};

type Command =
	| { type: 'CREATE_ACCOUNT'; id: number; name: string; initialBalance: number }
	| { type: 'DEPOSIT'; id: number; amount: number }
	| { type: 'TRANSFER'; fromId: number; toId: number; amount: number }
	| { type: 'LIST_ACTIVE_ACCOUNTS' };

class BankingSystem {
	private accounts: Map<number, Account> = new Map();

	createAccount(id: number, name: string, initialBalance: number): void {
		if (this.accounts.has(id)) {
			throw new Error(`Account with id ${id} already exists.`);
		}
		this.accounts.set(id, { id, name, balance: initialBalance, totalActivity: initialBalance });
	}

	deposit(id: number, amount: number): void {
		const account = this.getAccount(id);
		account.balance += amount;
		account.totalActivity += amount;
	}

	transfer(fromId: number, toId: number, amount: number): void {
		const fromAccount = this.getAccount(fromId);
		const toAccount = this.getAccount(toId);
		if (fromAccount.balance < amount) {
			throw new Error(`Insufficient funds in account ${fromId}.`);
		}
		fromAccount.balance -= amount;
		fromAccount.totalActivity += amount;
		toAccount.balance += amount;
		toAccount.totalActivity += amount;
	}

	getMostActiveAccounts(n: number): Account[] {
		return [...this.accounts.values()]
			.sort((a, b) => {
				if (b.totalActivity !== a.totalActivity) {
					return b.totalActivity - a.totalActivity; // Sort by total activity
				} else {
					return a.name.localeCompare(b.name); // If total activity is the same, sort by name
				}
			})
			.slice(0, n); // Return top n most active accounts
	}

	private getAccount(id: number): Account {
		const account = this.accounts.get(id);
		if (!account) {
			throw new Error(`Account with id ${id} does not exist.`);
		}
		return account;
	}
}

class CommandProcessor {
	constructor(private bankingSystem: BankingSystem) {}

	processCommand(commands: Command[]) {
		commands.forEach((command) => {
			switch (command.type) {
				case 'CREATE_ACCOUNT':
					this.bankingSystem.createAccount(
						command.id,
						command.name,
						command.initialBalance,
					);
					break;
				case 'DEPOSIT':
					this.bankingSystem.deposit(command.id, command.amount);
					break;
				case 'TRANSFER':
					this.bankingSystem.transfer(command.fromId, command.toId, command.amount);
					break;
				case 'LIST_ACTIVE_ACCOUNTS':
					const activeAccounts = this.bankingSystem.getMostActiveAccounts(5);
					console.log('Most Active Accounts:');
					activeAccounts.forEach((account) => {
						console.log(`- ${account.name}: $${account.totalActivity.toFixed(2)}`);
					});
					break;
			}
		});
	}
}

console.log('Banking system initialized.');
const commandProcessor = new CommandProcessor(new BankingSystem());

const commands: Command[] = [
	{ type: 'CREATE_ACCOUNT', id: 1, name: 'Alice', initialBalance: 1000 },
	{ type: 'CREATE_ACCOUNT', id: 2, name: 'Bob', initialBalance: 500 },
	{ type: 'CREATE_ACCOUNT', id: 3, name: 'Charlie', initialBalance: 500 },
	{ type: 'CREATE_ACCOUNT', id: 4, name: 'David', initialBalance: 1500 },
	{ type: 'CREATE_ACCOUNT', id: 5, name: 'Eve', initialBalance: 3000 },
	{ type: 'DEPOSIT', id: 1, amount: 200 },
	{ type: 'TRANSFER', fromId: 1, toId: 2, amount: 300 },
	{ type: 'TRANSFER', fromId: 1, toId: 3, amount: 300 },
	{ type: 'TRANSFER', fromId: 5, toId: 1, amount: 1000 },
	{ type: 'LIST_ACTIVE_ACCOUNTS' },
];
console.log(commandProcessor.processCommand(commands));
