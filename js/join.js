window.onload=function () {
    let pw1=document.querySelector('#password1');
    let pw2=document.querySelector('#password2');
    pw1.onchange=checkPw;
    pw2.onchange=comparePw;
    //비밀번호 자리수 체크함수
    function checkPw(){
        if(pw1.value.length < 10) {
            alert("비밀번호는 10자리 이상이어야 합니다.");
            pw1.value="";
            pw1.focus();
        }
    }
    // 비밀번호, 비밀번호 확인
    function comparePw(){
        if(pw1.value != pw2.value){
            alert("비밀번호가 일치하지 않습니다. 다시 입력 바랍니다.");
            pw2.value="";
            pw2.focus();
        }
    }
}