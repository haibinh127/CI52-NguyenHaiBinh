let $no = document.getElementById("no");
let $answers = document.getElementById("answers");
$no.addEventListener('mouseenter', function () {
    $answers.classList.toggle('reverse');
});