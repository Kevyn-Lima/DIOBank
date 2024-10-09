import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
console.log(`Your Balance is ${peopleAccount.getBalance()}`)
peopleAccount.withdraw(15)
console.log(`Your withdraw has been completed, and you balance now is ${peopleAccount.getBalance()}`)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(15)
console.log(`Your Balance is ${companyAccount.getBalance()}`)
companyAccount.withdraw(1)
console.log(`Your withdraw has completed, and you balance now is ${companyAccount.getBalance()}`)
companyAccount.getLoan(250);
console.log(`You got a Loan, now your balance is: $${companyAccount.getBalance()}`)



const newAccount: NewAccount = new NewAccount('Kevyn', 25)
newAccount.deposit(150)
console.log(`Your balance after the deposit is ${newAccount.getBalance()}`)