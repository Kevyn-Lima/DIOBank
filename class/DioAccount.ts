export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): number => {
    if(this.validateStatus()){
      return this.balance += value
    } throw new Error()
  }

  withdraw = (value: number): number => {
    if(this.validateStatus() && this.balance >= value){
      return this.balance -=value
    }throw new Error('Saldo insuficiente')
  }

  getBalance = (): number => {
    return this.balance
  }
  setBalance = (value: number) :number => {
    return this.balance += value
  }
  
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  getValidateStatus = () => {
    return this.validateStatus();
  }
}
