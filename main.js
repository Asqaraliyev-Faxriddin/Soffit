let tops = document.querySelectorAll(".top a");

tops.forEach(malumot => {
    if(malumot.href === window.location.href){
        malumot.parentElement.classList.add("active");
    }
});
