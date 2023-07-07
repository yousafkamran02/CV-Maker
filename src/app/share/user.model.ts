export class User {
    email:string 
    name:string 
    password:string 
    
}
export class CV_Info{
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