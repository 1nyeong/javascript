const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

/* validStatus 배열에 각각 false으로 설정 */
let validStatus = [false, false, false, false, false];

/* 버튼을 클릭했을때 */

button.onclick = () => {

    /* inputs.forEach(반복)로 validStatus 값을 대입해준다.
    이때 inputIsEmpty에 not(!)을 붙여준다 (기본값이 true)
    validStatus값이 정리가 된다.*/
    inputs.foEach((input, index) => {
        validStatus[index] = !inputIsEmpty(input.value)
    });

    /* 검사 완료 값 

    모든 validStatus 값이 true가 되면 
    includes가 true가 된다?..
    (한마디로 하나의 다른 값을 찾는다)

    includes 정의
    메서드를 사용해 문자열 내에 찾고자 하는 다른 문자열이 있는지 확인할 수 있습니다.*/
    if(validStatus.includes(false)){ 

        /* vaildStatus를 for문으로 값을 올려준다 */
        for(let i = 0; i < validStatus.length; i++){ 

            /* validStatus index가 빈칸이 아닐때까지 (!inputIsEmpty)*/
            if(!validStatus[i]){
                alert(inputs[i].placeholder+"이 입력되지 않았습니다");
                break; /* 여러번 뜨지않게 break*/
            }
        }
        /* for 값이 전부 true일때 다음 */
    }else{ /* 전부 true 값일때 alert 실행*/
        alert("검사 완료");
    }

}

/*inputIsEmpty 값이 빈값일때 (값이 비었을때 true) */
function inputIsEmpty(str){
    return str == null || str == "" || str == undefined;
}

/*
Array 사용해야한다.
검사하기를 눌렀을때 모든 input에 값이 입력되어 있어야만
검사완료 메세지를 보여준다.

만약 하나라도 입력되어있지 않으면 순서대로 "00번이 입력되지않았습니다." 메세지 출력.

*/