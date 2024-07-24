let rnd = Math.round(Math.random() *100)
let guesNum

do{
    guesNum = Number(prompt("Nhập số dự đoán"))
    if(guesNum==rnd){
        alert("Bạn đã đoán trúng")
    }
    else if(guesNum < rnd){
        alert(" Số dự đoán nhỏ hơn số bí mật ")
    }
    else{
        alert(" Số dự đoán lớn hơn số bí mật ")
    }
}while(rnd != guesNum)