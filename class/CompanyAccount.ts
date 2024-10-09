import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): number => {
    if(this.getValidateStatus()){
      return this.setBalance(value)
    } throw new Error("Conta Inativa");
  }
}
