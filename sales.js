"use strict";

 
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let regionTotal1 = 0;
let regionTotal2 = 0;
let regionTotal3 = 0;
let regionTotal4 = 0;
let regionTotal5 = 0;


let quarter1 = 0;
let quarter2 = 0;
let quarter3 = 0;
let quarter4 = 0;


let total = 0;
                for (let i = 0; i < region1.length; i++ ){
                regionTotal1 += region1[i]    

                }

                for (let i = 0; i < region2.length; i++ ){
                regionTotal2 += region2[i]
               
                }

                for (let i = 0; i < region3.length; i++ ){
                regionTotal3 += region3[i]     
                }

                for (let i = 0; i < region4.length; i++ ){
                regionTotal4 += region4[i]

                }

                for (let i = 0; i < region5.length; i++){
                regionTotal5 += region5[i]

                }

                quarter1 += region1[0]
                quarter1 += region2[0]
                quarter1 += region3[0]
                quarter1 += region4[0]
                quarter1 += region5[0]
               
                quarter2 += region1[1]
                quarter2 += region2[1]
                quarter2 += region3[1]
                quarter2 += region4[1]
                quarter2 += region5[1]

                quarter3 += region1[2]
                quarter3 += region2[2]
                quarter3 += region3[2]
                quarter3 += region4[2]
                quarter3 += region5[2]

                quarter4 += region1[3]
                quarter4 += region2[3]
                quarter4 += region3[3]
                quarter4 += region4[3]
                quarter4 += region5[3]

 
                total += quarter1
                total += quarter2
                total += quarter3
                total += quarter4

 

document.write(`<h2>Sales by Quarter</h2><br> Q1: $${quarter1}<br>Q2: $${quarter2} <br> Q3: $${quarter3} <br> Q4: $${quarter4} 
<h2>Sales by Region</h2> Region 1: $${regionTotal1} <br> Region 2: $${regionTotal2} <br> Region 3: $${regionTotal3} <br> Region 4: $${regionTotal4} <br> Region 5: $${regionTotal5} <br>
<h2>Total Sales</h2> $${total}`)