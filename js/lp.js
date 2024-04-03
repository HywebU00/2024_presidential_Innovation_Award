//條件搜尋列ＪＳ
function conditionaSearcOpen() {
  conditional_searchbtn.addEventListener('click', function () {
    jsSlideToggle(conditional_searchblock, 200);
  });
}
const conditional_searchbtn = document.querySelector('.conditional_searchbtn');
const conditional_searchblock = document.querySelector('.conditional_searchblock');
conditional_searchbtn ? conditionaSearcOpen() : null;
