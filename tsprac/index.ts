const taskInput = document.getElementById("task-input") as HTMLInputElement;
const result = document.getElementById("listNote") as HTMLElement;
const complete = document.querySelector("#taskDone > #listDone") as HTMLElement;
const name4 = document.getElementById("name4") as HTMLElement;
const btnOK = document.getElementById("btnOK") as HTMLElement;

const listNoteItems: HTMLElement[] = [];
const listDoneItems: HTMLElement[] = [];

function taskAction() {
    btnOK.addEventListener("click", function (event) {

        if (taskInput.value === '') {
            event.preventDefault();
        }
        else {
            const content = taskInput.value;
            let trashElement = document.createElement("i");
            trashElement.classList.add('icon');
            trashElement.innerHTML = " &#128465;";

            let editElement = document.createElement("i");
            editElement.classList.add('editIcon');
            editElement.innerHTML = "&#9998;";

            let doneElement = document.createElement("i");
            doneElement.classList.add('doneIcon');
            doneElement.innerHTML = "&#10004;";

            //tạo element mới thêm vào
            let newElement = document.createElement("li");
            newElement.textContent = content;
            newElement.appendChild(trashElement);
            newElement.appendChild(editElement);
            newElement.appendChild(doneElement);

            if (complete.contains(newElement)) {
                listDoneItems.push(newElement);
            } else {
                listNoteItems.push(newElement);
            }

            result?.appendChild(newElement);
            taskInput.value = "";

            trashElement.addEventListener("click", () => {
                trashElement.parentElement?.remove();
            })

            editElement.addEventListener("click", () => {
                const currentContent = newElement.textContent ?? "";
                let x = currentContent.trim();
                taskInput.value = x.slice(0, x.length - 4).trim();

                taskInput.focus();
                let tempElement: HTMLElement | null = null;
                tempElement = newElement;

                btnOK.removeEventListener("click", updateContent);
                btnOK.addEventListener("click", updateContent);
                function updateContent() {
                    if (tempElement) {
                        tempElement.textContent = taskInput.value;

                        if (listNoteItems.includes(tempElement)) {
                            result.removeChild(tempElement);
                        } else if (listDoneItems.includes(tempElement)) {
                            complete.removeChild(tempElement);
                        }
                        result.removeChild(newElement);

                        if (complete.contains(tempElement)) {
                            listDoneItems.push(tempElement);
                            complete.appendChild(tempElement);
                        } else {
                            listNoteItems.push(tempElement);
                            result.appendChild(tempElement);
                        }
                        tempElement = null;
                        taskInput.value = "";
                        btnOK.removeEventListener("click", updateContent);
                        btnOK.addEventListener("click", taskAction);
                    }
                }
                // btnOK.addEventListener("click", updateContent);
            })

            taskInput.focus();

            doneElement.addEventListener("click", () => {

                if (result.contains(newElement)) {
                    // Di chuyển phần tử vào danh sách hoàn thành
                    complete.appendChild(newElement);
                    result.removeChild(newElement);
                }
                if (complete.children.length === 0) {
                    name4.style.display = 'none';
                } else {
                    name4.style.display = 'block';
                }
            });
        }
    });
}




document.addEventListener("DOMContentLoaded", taskAction);
//(<HTMLElement>document.getElementById("listNote")).addEventListener("click", chonTask);




//arrow function
// Phầm DOM cần lưu ý: getDocumentById, querySelector,
// getDocumentByClassName, addEventListener, querySelectorAll, querySelector,
// appendChild, children, click, getAttribute, innerHTML, innerTextHTML

let str1 = 'hutech';
let str2 = 'uyen';

let res = str1.concat(str2);
console.log(res);

let arr: string[] = ['le', 'pham', 'le'];
//indexOf tìm và trả ra vị trí tìm thấy đầu tiên, aray
let a = arr.indexOf('le', 1);
//startWith, endW: string

let a1 = str1.endsWith('ut', 3);
console.log(a1);

let str3 = 'le pham ngoc uyen';
//split method of string
let a2 = str3.split(' ');

//slice: string, array
let a3 = str3.slice(0, 7);
console.log(a3);
let a4 = str3.split(' ').slice(0, 2).join(' ');
//toFixed
let a5 = 3.5981;
console.log(a5.toPrecision(4));
//filter:array
let arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//xủ lý if else dùng {}
let a6 = arr1.filter((num1) => num1 % 2 != 0);
console.log(a6);
console.log(arr1);
//map:tạo mảng mới chứa kết quả mới sau khi thực hiện tính toán
//filter và map ko làm thay đổi mảng ban đầu
let a7 = arr1.map((num1) => num1 * 2);
console.log(a7);
console.log(arr1);
//find=> giá trị đầu tiên thỏa mãn
//không tìm thấy => undefined
let a8 = arr1.find((num) => num == 0);
console.log(a8);
//every: boolean, tất cả các gtri thỏa mãn
let arr2: number[] = [1, 3, 5, 7, 9, 10];
let a9 = arr2.every(num => num % 2 != 0);
console.log(a9);
//some: một giá trị trong arr thỏa mãn
let b1 = arr2.some(n => n % 2 == 0);
console.log(b1);
//sort: làm thay đổi mảng ban đầu
let arr3: number[] = [4, 1, 8, 5, 3, 6, 7, 9];

let b2 = arr3.sort((a, b) => b - a);
let b3 = arr3.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
})
console.log(b3);
let b4 = arr3.sort((a, b) => a - b ? -1 : 1);
console.log(b4);
let fulName = 'le pham ngoc uyen';
let b5 = fulName.replace(/\s+/g, '').split('').sort((a, b) => b.localeCompare(a));
console.log(b5);
//slice
//splice
//let arr3: number[] = [4, 1, 8, 5, 3, 6, 7, 9];
console.log(arr3);
let b6 = arr3.splice(0, 1, 2);
//console.log(b6);
//clone array: spread operator(shallow copy)
let arr4: number[] = [4, 1, 8, 5, 3, 6, 7, 9];
let arr5: number[] = [...arr4];
let b7 = arr5.sort((a, b) => a - b);
console.log(arr4);
console.log(b7);
//reduce
let b8 = arr5.reduce((sum, item, index) => {
    if (index >= 4)
        return sum += item;
    return sum;
}, 0)
console.log(b8);
//forEach, for of(arr), for in(obj)



//declare function df
function name1(params: any) {

}
//expression function ef
const log = function (params: any) {

}
//arrow function arf
// const log2 = () => {
//     console.log('hello22');
//     setTimeout(() => {
//         console.log('hello');
//     }, 5000);

//     console.log('helll');
// }
//log2();

//promise, async await, fetch, promiseAll, 
// console.log('test');
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('hello');
//     }, 5000);
// })

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('hello33');
//     }, 3000);
// })

// p1.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })

//fetch
async function logMovies() {
    try {
        const response = await fetch("https://shop.cyberlearn.vn/api/Product");
        const movies = await response.json();
        console.log(movies.content);
    } catch (error) {
        console.log(error);
    }
}

//logMovies();

class hocvien {
    public hoten: string;
    constructor(hoten: string) {
        this.hoten = hoten;
    }
    public gioithieu() {
        console.log('xinchao');
    }
}
let p = new hocvien('hoc vien 1');
p.gioithieu();
