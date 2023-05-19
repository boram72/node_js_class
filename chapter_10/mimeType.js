// 모듈을 추출합니다.
const express = require('express');
const fs = require('fs');
// 서버를 생성합니다.
const app = express();
// request 이벤트 리스너를 설정합니다.
// app.get(path, callback): 서버주소+path 주소창에 입력 >> Express 라우터는 해당 경로와 일치하는 요청을 처리(callback 함수 실행)
app.get('/image', (request, response) => {
    fs.readFile('public/image.png', (error, data) => { //여기에 쓰인경로가 실제 파일이 있는 경로 
        // 이미지 파일을 제공합니다.
        response.type('image/png');
        response.send(data);
    });
});
app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        // 음악 파일을 제공합니다.
        response.type('audio/mpeg');
        response.send(data);
    });
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});