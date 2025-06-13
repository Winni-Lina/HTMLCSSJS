let size; // 테이블의 가로, 세로 셀의 수
let curLoc; // 현재 텍스트가 출력된 셀 위치
let tdNodes; // 테이블 내의 td 노드의 리스트

window.onload = function() {
    const startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", doMouseClick);

    const inputBox = document.querySelector("#inputBox")
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === 'Enter')
            doMouseClick();
    });
}

function doMouseClick() {
    const inputBox = document.querySelector("#inputBox");
    if (inputBox.value == "") {
        return;
    }

    size = Number(inputBox.value);

    const displayArea = document.querySelector(".displayArea");
    let tableHTML = '<table>' + ('<tr>'+'<td></td>'.repeat(size) +'</tr>').repeat(size) + '</table>'
    displayArea.innerHTML = tableHTML;
    tdNodes = document.querySelectorAll('td');

    // 안녕을 출력 위치 선정
    curLoc = 0;
    randomLocText();

}

function randomLocText() {
    // 기존 안녕 셀을 추기화
    //tdNodes[curLoc].innerText = "";
    tdNodes[curLoc].innerHTML = "";
    //tdNodes[curLoc].removeEventListener("click", randomLocText)
    tdNodes[curLoc].onclick = "";

    // 랜덤으로 위치 선정
    curLoc = Math.floor(Math.random() * (size * size));
    console.log(curLoc)

    // 해당 위치의 td 셀에 텍스트 출력, 이벤트 핸들러 add
    
    //tdNodes[curLoc].innerText = "안녕^^"
    tdNodes[curLoc].innerHTML = '<img src="./images/Curi_01.jpg" width="50">';
    //tdNodes[curLoc].addEventListener("click", randomLocText)
    tdNodes[curLoc].onclick = randomLocText;
}