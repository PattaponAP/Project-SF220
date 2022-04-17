import {writable} from 'svelte/store';

let data = {'6410742032':{number: '6410742032', pin: '12102545',name: 'สิทธิภาคย์ ศรีสวัสดิ์' ,type:'student' },
            '6410742172':{number: '6410742172', pin: '24112545',
                         name: 'ฐิติรัตน์ รัตนพันธ์', type:'student'},
          
            '6410742305':{number: '6410742305', pin: '08092545',
                         name: 'กัมปนาท พรหมวิเชียร', type:'student'},

            '6410742495':{number: '6410742495', pin: '28042544',
                         name: 'วิภวา คล้ายสุวรรณ์', type:'student'},
            
            '6410742065':{number: '6410742065', pin: '11092545', name: 'พัทธพล อภิชาตโชติกุล', type:'student'},
          
            'Admin1234':{number: 'Admin1234', pin: '12345', name: 'ผู้ดูแลระบบ',type:'professor'}
           };


let subjects = [{sub:'CE100', students:'50',status:'', nameSub:'จริยธรรมสำหรับวิศวกร',teacher:'รศ.ดร.วีรชัย อัศวเมธาพันธ์',section: '760001',history:[],count:0,}, 
               {sub:'CN101', students:'50',status:'', nameSub:'การเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น',teacher:'อ.วชิรา พรหมสาขา ณ สกลนคร',section: '760001',history:[],count:0,},
               {sub:'MA111', students:'50',status:'', nameSub:'แคลคูลัสพื้นฐาน',teacher:'ดร.สุภกุญช์ พนาสวัสดิ์วงศ์',section: '760001',history:[],count:0,},
                {sub:'SC135', students:'50',status:'', nameSub:'ฟิสิกส์ทั่วไป',teacher:'ผศ.ดร.อรรฆวัชร รวมไมตรี',section: '760001',history:[],count:0,},
                {sub:'SF210', students:'50',status:'', nameSub:'การพัฒนาการเขียนโปรแกรมคอมพิวเตอร์1',teacher:'รศ.ดร.วีรชัย อโณทัยไพบูลย์',section: '760001',history:[],count:0,},
               {sub:'SF220', students:'50',status:'', nameSub:'วิศวกรรมซอฟแวร์เบื้องต้น',teacher:'รศ.ดร.วีรชัย อโณทัยไพบูลย์',section: '760001',history:[],count:0,},
                {sub:'SF230', students:'50',status:'', nameSub:'พีชคณิตเชิงเส้นและวิธีการเชิงเลขสำหรับวิศวกรคอมพิวเตอร์', teacher:'รศ.ดร.วีรชัย อโณทัยไพบูลย์',section: '760001',history:[],count:0,}, 
               {sub:'TU050', students:'50',status:'', nameSub:'การพัฒนาทักษะภาษาอังกฤษ', teacher:'อ.วิภากร ชาโญพงษ์ คาวาซากิ',section: '760001',history:[],count:0,},
               {sub:'TU100', students:'50',status:'', nameSub:'พลเมืองกับการลงมือแก้ปัญหา', teacher:'ผศ.ดร.ปริญญา เทวานฤมิตรกุล',section: '760001',history:[],count:0,},
               {sub:'TU102', students:'50',status:'', nameSub:'พลเมืองกับการลงมือแก้ปัญหา', teacher:'ผศ.ศิรินทร์ ใจเที่ยง',section: '760001',history:[]},
               {sub:'TU104', students:'50',status:'', nameSub:'การคิด อ่าน และเขียนอย่างมีวิจารณญาณ', teacher:'ผศ.ดร.อำนาจ ปักษาสุข',section: '760001',history:[],count:0,},
               {sub:'TU105', students:'50',status:'', nameSub:'ทักษะการสื่อสารด้วยภาษาอังกฤษ', teacher:'อ.เกรียงไกร สกุลประเสริฐศรี',section: '760001',history:[],count:0,},
               {sub:'TU107', students:'50',status:'', nameSub:'ทักษะดิจิทัลกับการแก้ปัญหา', teacher:'รศ.ดร.วีรชัย อโณทัยไพบูลย์',section: '760001',history:[],count:0,},
               {sub:'TU109', students:'50',status:'', nameSub:'นวัตกรรมกับกระบวนการคิดผู้ประกอบการ', teacher:'อ.ธนภัทร ชีรณวาณิช',section: '760001',history:[],count:0,},
               {sub:'TU201', students:'50',status:'', nameSub:'การพัฒนาสมรรถภาพการเขียน', teacher:'รศ.ดร.สุธาสินี ปิยพสุนธรา',section: '760001',history:[],count:0,}]















export const accounts = writable(data);
export const islogin = writable('');
export const nameAccount = writable('');
export const mode = writable('');
export const subject = writable(subjects);
export const nameindex = writable(0)
