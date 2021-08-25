(function main() {
    const search_input_span = document.getElementsByClassName("nav-main__input-span")[0];
    const search_input = document.getElementsByClassName("nav-main__input")[0];

    var body = document.getElementsByTagName("body")[0];

    body.addEventListener("click", event => resete_search());

    function resete_search() {
        if (search_input != document.activeElement) {
            var span = search_input_span.children[0];
            if (document.body.contains(search_input_span)) {
                return;
            }
            var search_div = document.getElementsByClassName("nav-main__search")[0];

            search_div.appendChild(search_input_span);

            if (search_input.value.length > 0) {
                span.textContent = search_input.value;
                search_input.value = "";
            } else if (search_input.value.length <= 0) {
                span.textContent = "Поиск";
                search_input.value = "";
            }
        }
    }


    search_input_span.addEventListener('click', event => clickOnInput(event));

    search_input.addEventListener("click", event => clickOnInput(event));

    function clickOnInput(event) {
        if (document.body.contains(search_input_span)) {
            search_input.value = search_input_span.children[0].innerText;
            setCursore(search_input);
            search_input_span.remove();
        }

    }

    function setCursore(inp) {
        if (inp.setSelectionRange) {
            inp.focus();
            inp.setSelectionRange(inp, inp.value.length);
        }
    }

    var aside_div = document.getElementsByClassName("main-section__profile-section")[0];



}());