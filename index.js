const m1 = document.getElementById("mountain1");
const m2 = document.getElementById("mountain2");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");

m1.addEventListener('click', function() {
    s1.classList.remove("inactive");
    s1.classList.add("active");
    s2.classList.remove("active");
    s2.classList.add("inactive");
    m1.style.backgroundColor="#9fa7b5";
    m1.style.color="#404f6c";
    m2.style.backgroundColor="#404f6c";
    m2.style.color="#9fa7b5";
});

m2.addEventListener('click', function() {
    s2.classList.remove("inactive");
    s2.classList.add("active");
    s1.classList.remove("active");
    s1.classList.add("inactive");
    m2.style.backgroundColor="#9fa7b5";
    m2.style.color="#404f6c";
    m1.style.backgroundColor="#404f6c";
    m1.style.color="#9fa7b5";
});

