    const btn = document.getElementById("switch");
    btn.addEventListener('click',function onClick(event){
        var element = document.body;
        element.classList.toggle("dark-mode");
    })