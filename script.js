function count(a){
    let greeting = document.getElementById("Countdown")
    greeting.innerText = a
}
     count("10",setTimeout((a)=>{
        count("9",setTimeout((a)=>{
            count("8",setTimeout((a)=>{
                count("7",setTimeout((a)=>{
                    count("6",setTimeout((a)=>{
                        count("5",setTimeout((a)=>{
                            count("4",setTimeout((a)=>{
                                count("3",setTimeout((a)=>{
                                    count("2",setTimeout((a)=>{
                                        count("1",setTimeout((a)=>{
                                            count("0",setTimeout((a)=>{
                                                count("Happy Independance day")
                                            },1000))
                                        },1000))
                                    },1000))
                                },1000))
                            },1000))
                        },1000))
                    },1000))
                },1000))
            },1000))
        },1000))
     },1000))