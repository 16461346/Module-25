    document.getElementById('button-Login').addEventListener('click',
    function (){
        let userInfo=document.getElementById('user-info');
        userInfo.innerText='fixed text change kora part';
    })

        document.getElementById('button').addEventListener('click',
        function(){
            let inputText=document.getElementById('input-text');
            // console.log(inputText)
            let input_text=inputText.value;
            console.log(input_text)

            let userInfo=document.getElementById('user-set');
            userInfo.innerText=input_text;
        }
    )