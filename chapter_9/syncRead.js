// 모듈을 추출합니다.
const fs = require('fs');
// 파일을 읽어 들이고 출력합니다.
// 동기식 : 파일 읽을때까지 다른거 동작안함(스케줄링 사용안함)
const file = fs.readFileSync('textfile.txt');
console.log(file);
console.log(file.toString());

//비동기식: 파일 읽기 작업을 시작하고 나서 코드 실행이 차단되지 않고 즉시 다음 코드가 실행됩니다. 
//파일 읽기 작업이 완료되면 콜백 함수가 호출(스케줄링 사용)
fs.readFile('textfile.txt',(error,file)=>{
    console.log(file);
    console.log(file.toString());
})