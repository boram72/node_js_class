const request = require('request');
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const url = "http://www.yes24.com/24/Category/BestSeller";

request({ url: url, encoding: null }, (error,response,body)=>{
    const decodedBody = iconv.decode(body, 'euc-kr').toString();
    const $ = cheerio.load(decodedBody, { decodeEntities: false });
    // const $ = cheerio.load(body);
    const books=[]

    $('#bestList').each((index,element) =>{
        const title = $(element).find('ol p:nth-child(3) > a').map((index, el) => `${index + 1}. ${$(el).text().trim()}`).get().join('\n'); 
        //map((index, element) => $(element).text().trim()):각 element들을 text로 추출 후 trim으로 앞뒤 공백제거 + .get().join('\n'): 각 element들 개행문자로 연결 
        // let writer = $(element).find('.book_writer').text().trim();ss
        // writer = writer.split(',').map((item) => item.trim());
        
        console.log(title);
        // console.log(writer);
        // console.log();
   
    });


   
});

//#bestList > ol > li.num1 > p:nth-child(3) > a




