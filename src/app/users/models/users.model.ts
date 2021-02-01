export class User{

    id:number=0;
    name?:string;
    age:number=0;
    salary:number=0;
    joiningDate?:Date;
    position?:Position;
    address?:string;
    phone?:string;

}

export enum Position {
    BackEnd="BackEnd",
    FrontEnd="FrontEnd",
    FullStack="FullStack"
}