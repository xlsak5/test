 // 선택자 
 const sliderWrap = document.querySelector(".slider__wrap");
 const sliderImg = sliderWrap.querySelector(".slider__img");      //보여지는 영역
 const sliderInner = sliderWrap.querySelector(".slider__inner"); //움직이는 영역
 const slider = sliderWrap.querySelectorAll(".slider");          //개별 영역
 const sliderDot = sliderWrap.querySelector(".slider__dot");     //닷 메뉴
 const sliderBtn = sliderWrap.querySelectorAll(".slider__btn a");//버튼

 let currentIndex = 0;                               //현재 보이는 이미지
 let sliderCount = slider.length;                    //이미지 갯수
 let sliderInterval = 3000;                          //이미지 간격 시간
 let sliderWidth = slider[0].offsetWidth;            //이미지 가로값
 let dotIndex = "";

 function init(){
     //이미지 갯수 만큼 닷메뉴 생성
     slider.forEach(() => dotIndex += "<a href='#' class='dot cli'>이미지</a>");
     sliderDot.innerHTML = dotIndex;

     //첫번째 닷메뉴 활성화 표시
     sliderDot.firstChild.classList.add("active");


     // 닷버튼 클릭
     let dotClick = sliderWrap.querySelectorAll(".cli");
     dotClick.forEach((el, index) => {
         dotClick[index].addEventListener("click", () => {
             gotoSlider(index);
         });
     });
 }
 init();
 
 // 이미지 이동시키기
 function gotoSlider(num){
    // 400ms : 4초
    sliderInner.style.transition = "all 100ms";
    sliderInner.style.transform = "translateX(" + (-sliderWidth*num) +"%)";
    currentIndex = num;

    // 닷 메뉴 활성화 하기
    let dotActive = document.querySelectorAll(".slider__dot .dot");
    dotActive.forEach((active) => { active.classList.remove("active"); });
    dotActive[num].classList.add("active");
 }

 // next + prev 버튼을 클릭
 sliderBtn.forEach((btn, index) => {
     btn.addEventListener("click", () => {
         let prevIndex = (currentIndex+(sliderCount-1)) % sliderCount;
         let nextIndex = (currentIndex+1) % sliderCount;

         if(btn.classList.contains("prev")){
             gotoSlider(prevIndex);
         }
         else {
             gotoSlider(nextIndex);
             console.log("asd");
         }
     });
 });