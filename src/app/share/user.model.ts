export class User {
    Id:number
    Email:string 
    Name:string 
    Password:string 
}
export class CV_Info{
    Id: number;
    UserId: number;
    TelephoneNumber: string;
    Introduction: string;
    Degree: string;
    ProgramName: string;
    CGPA: number;
    StartDate: Date;
    EndDate: Date | null;
    CompanyName: string;
    Summary: string;
    StartDateExp: Date;
    EndDateExp: Date | null;
    CourseName: string;
    KeyPoints: string;
    StartDateTc: Date;
    EndDateTc: Date | null;
    ProjectName: string;
    ProjectKeypoint: string;
}