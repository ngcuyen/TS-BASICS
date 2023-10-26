/*


let sales = 123_456_789;
let course = 'typscript';
let is_published = true;
let level;
level = 1;
level = 'a';

*/

// const small = 1;
// const medium = 2;
// const large = 3;

/*
//pascal case
//luu y đật tên chữ đầu viết hoa
enum Size{Small=1, Medium, Large};
let maSize:Size = Size.Medium;
console.log(maSize);

*/

type Employee = {
    readonly id : number,
    name : string,
    retire : (date : Date) => void
}

let employee : Employee={
    id : 1,
    name : 'uyen',
    retire: (date:Date) =>{
        console.log(date);
    }
};

let quantity : 50 = 50;