import React, {useEffect} from 'react';
import { Terminal } from 'xterm';
import {get} from "../util/HttpUtil";
import './test.css';
import axios from "axios";
import { Row, Col } from 'antd';
import { Button,Space } from 'antd';
const Test=()=>{
   // useEffect(()=>{
   //     let terminalContainer = document.getElementById("test");
   //     const term = new Terminal();
   //     term.open(terminalContainer);
   //     term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
   //
   // },[])
// useEffect(()=>{
//     axios.get('/js/001186.js?rt=1463558676006',{
//     }).then(function (response) {
//             const resultArr= [];
//             const match = response.data.match(/jsonpgz\((.+)\)/);
//             if (!match || !match[1]) {
//                 return;
//             }
//             const str = match[1];
//             const obj = JSON.parse(str);
//             const info = {
//                 // 当前净值
//                 now: obj.gsz,
//                 // 基金名称
//                 name: obj.name,
//                 // 基金代码
//                 code: obj.fundcode,
//                 // 昨日净值
//                 lastClose: obj.dwjz,
//                 // 涨跌幅
//                 changeRate: obj.gszzl,
//                 // 涨跌额
//                 changeAmount: (obj.gsz - obj.dwjz).toFixed(4),
//             };
//             resultArr.push(info);
//             console.log(resultArr);
//         }).catch(function (error) {
//             console.log(error);
//         });
// },[])
    useEffect(()=>{
        // request({
        //     url:'http://localhost:8080/showMethodByWatch',
        //     method:'get',
        //     data:{string:'123'}
        // }).then(function(res){
        //     console.log(res)
        // })


        var opts = {
            method:"GET",
            mode : 'cors'
        };
        fetch('http://localhost:8080/showMethodByWatch?string=1123',opts)
            .then((res) => res.json()).then(
            (result) => {
                console.log(result);
            }
        );


    },[]);

    return(
        <div  id='test'>
            <Row>

                <Col span={6}>
                </Col>
                <Col span={12}>
                    <Space>
                        <Button type="primary">测试监听方法</Button>
                          <Button type="primary">Primary Button</Button>
                        <Button type="primary">Primary Button</Button>
                    </Space>
                </Col>
                <Col span={6}>
                </Col>
            </Row>
        </div>
    );
};
export {Test};