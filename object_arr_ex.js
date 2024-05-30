//role 부장, 차장, 부원, name 이름, grade 학년

const strdent = [
    {role: "부장", name: "정현서", grade: 3},
    {role: "차장", name: "국재윤", grade: 3},
    {role: "부원", name: "이윤솔", grade: 1},
    {role: "부원", name: "장승원", grade: 1},
    {role: "부원", name: "이준석", grade: 1},
    {role: "부원", name: "유준영", grade: 1},
    {role: "부원", name: "장우진", grade: 1},
    {role: "부원", name: "이우혁", grade: 1},
    {role: "부원", name: "최예건", grade: 1}
];

for(let i = 0; i < strdent.length; i++){
    if(strdent[i].role == "부원"){
        console.log(strdent[i]);
    }
}

