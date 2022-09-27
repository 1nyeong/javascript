const addButton = document.querySelector("button");

//userList 변수
let userList = new Array();

addButton.onclick = () => {
    //유저를 추가함과 동시에 유저 데이터를 불러온다
    addUser(); //function addUser
    loadList();//function loadList
}

//유저를 추가하는 용도 (input)
function addUser(){
    const inputs = document.querySelectorAll("input");

    //ex) input 배열값을 user.name  user.address  user.phone에 각각 대입한다
    let user = {
        name: inputs[0].value,
        address: inputs[1].value,
        phone: inputs[2].value
    }

    //추가된 유저를 담아둔다
    userList.push(user);
}

//리스트를 불러오는 용도 (tbody)
function loadList(){
    const tbody = document.querySelector("tbody");

    //초기화 (이전값 + 새로운값이 계속 추가된다.)
    tbody.innerHTML = "";

    //userList에 저장되어있는 배열값을 불러와서 반복한다
    userList.forEach((user, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
            </tr>
        `
    });
}

//function에는 하나의 기능만 넣는다