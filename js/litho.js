;(function($){

    var litho = {
        init: function(){
            this.heaerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        heaerFn:function(){



              var lithoNav = {
                sub1:[
                  {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agenc"]},
                  {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                  {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                  {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                  ],
                sub2:[
                  {sub:"About",subsub:["About me","About us","Our story","Who we are"]},
                  {sub:"Services",subsub:["Our services","What we offer","Our process"]},
                  {sub:"Contact",subsub:["Contact simple","Contact classic","Contact modern"]},
                  {sub:"Additional pages",subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                  ],
                sub3:[
                  {sub:"Portfolio classic",subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                  {sub:"Portfolio boxed",subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                  {sub:"Portfolio colorful",subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                  {sub:"Portfolio bordered",subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                  {sub:"Portfolio overlay",subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                  {sub:"Portfolio switch image",subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                  {sub:"Portfolio other",subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                  {sub:"Single project page",subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                ],
                sub4:[
                  {sub:["Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                  {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                  {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                  {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                ],

                sub5:[
                  {
                    sub:"Header and menu",
                    subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                    subsubsub:[
                      {subsubsub:["Hamburger menu","Hamburger menu modern","Hamburger menu half"]},
                      {subsubsub:["Left menu classic","Left menu modern"]},
                      {subsubsub:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"]},
                      {subsubsub:["Classic","Modern","Full screen"]},
                    ]
                  },
                  {
                    sub:"Footer",
                    subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                  },
                  {
                    sub:"Page title",
                    subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                  },
                  {
                    sub:"Modal popup",
                    subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                  },
                  {
                    sub:"Icon packs",
                    subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                  },
                  {sub:"Animations"},
                ],

                sub6:[
                  {sub:"Blog grid"},
                  {sub:"Blog masonry"},
                  {sub:"Blog classic"},
                  {sub:"Blog simple"},
                  {sub:"Blog side image"},
                  {sub:"Blog metro"},
                  {sub:"Blog overlay image"},
                  {sub:"Blog modern"},
                  {sub:"Blog clean"},
                  {sub:"Blog widget"},
                  {sub:"Blog standard"},
                  {sub:"Post layout",subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                  {sub:"Post types",subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]},
                ],
                sub7:[
                  {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product"]},
                  {sub:["Utility pages","Shopping cart","Checkout","Login / Register"]},
                  {sub:["menu-banner-01.jpg"]},
                  {sub:["menu-banner-02.jpg"]},
                ]
              }


              


              var $col1 = $('#nav .col1');
              var txt = "";

                // 서브 1 HOME
                for(var j in lithoNav.sub1){
                  for(var i in lithoNav.sub1[j].sub){
                    if(i == 0){
                      txt = "<dt>"+lithoNav.sub1[j].sub[0]+"</dt>";
                    }
                    else{
                      txt += "<dt></dt><dd><a herf='#'>"+lithoNav.sub1[j].sub[i]+"</a></dd>";
                    }
                  }
                  $col1.eq(j).html(txt);
                  txt = "";
                }

                //서브 2
                var $sub2Btn = $('.sub2 .sub-btn');
                var $sub2Sub = $('.sub2 .subsub');
                for(var i in lithoNav.sub2){
                  txt += lithoNav.sub2[i].sub+"<i class='fas fa-angle-right'></i>";
                  $sub2Btn.eq(i).html(txt);
                  txt = "";
                  for(var j in lithoNav.sub2[i].subsub){
                    txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>";
                    
                  }
                  $sub2Sub.eq(i).html(txt);
                  txt = "";
                }

                //서브 3 
                var $sub3Btn = $('.sub3 .sub-btn')
                var $sub3Sub = $('.sub3 .subsub')
                for(var i in lithoNav.sub3){
                  txt += lithoNav.sub3[i].sub+"<i class='fas fa-angle-right'></i>";
                  $sub3Btn.eq(i).html(txt);
                  txt='';
                  for(var j in lithoNav.sub3[i].subsub){
                    txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                  }
                  $sub3Sub.eq(i).html(txt);
                  txt='';
                }

                //서브 4
                var $sub4Sub = $('.sub4 .subsub');
                for(var i in lithoNav.sub4){
                  for(var j in lithoNav.sub4[i].sub){
                    if(j == 0){
                      txt += "<dt>"+lithoNav.sub4[i].sub[j]+"</dt>"
                    }
                    else{
                      txt += "<dd><a href='#'><i class='icon'></i>"+lithoNav.sub4[i].sub[j]+"</a></dd>";
                    }
                  }
                  $sub4Sub.eq(i).html(txt)
                  txt = '';
                }

                //서브5
                var $sub5Btn = $('.sub5 .sub-btn');
                var $sub5Menu = $('.sub5 .sub-menu');
                
                      
                for(var i in lithoNav.sub5){
                    if( i == 5 ){
                        txt += lithoNav.sub5[i].sub
                    }else{
                        txt += lithoNav.sub5[i].sub + "<i class='fas fa-angle-right'></i>";
                    }
                    $sub5Btn.eq(i).html(txt);
                    txt = '';
                }
                for(var i in lithoNav.sub5){
                  for(var j in lithoNav.sub5[i].subsub){
                      if(i==0 && j>8){
                        txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[i].subsub[j] + "<i class='fas fa-angle-right'></i></a></li>";
                      }else{
                        txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[i].subsub[j] + "</a></li>";
                      }                       
                  }
                  $sub5Menu.eq(i).html(txt);
                  txt = '';
                }
                

                for(var i in lithoNav.sub5[0].subsubsub){
                  i = parseInt(i);
                  j = 9;
                  j = j + i;
                  txt = $('.sub5-sub1>div>ul>li').eq(j).html(); // 열번째내용 가져오기

                  txt += "<div class='sub-sub-sub sub5-sub1-sub"+j+1+"'>"
                  txt += "<div class='sub-sub-sub-gap'>"
                  txt += "    <ul>"
                  for(var k in lithoNav.sub5[0].subsubsub[i].subsubsub){
                    txt += "<li><a href='#'>"+lithoNav.sub5[0].subsubsub[i].subsubsub[k]+"</a></li>"
                  }
                  txt += "    </ul>"
                  txt += "</div>"
                  txt += "</div>"
                  $('.sub5-sub1>div>ul>li').eq(j).html(txt);
                  txt = '';
                }
              
                //서브 6
                var sub6Btn = $('.sub6 .sub-btn')
                var sub6Menu = $('.sub6 .sub-menu')

                for(var i in lithoNav.sub6){
                  if(i >10){
                    txt += lithoNav.sub6[i].sub+ "<i class='fas fa-angle-right'></i>";
                  } else {
                    txt += lithoNav.sub6[i].sub;
                  }
                  sub6Btn.eq(i).html(txt);
                  txt='';
                }
                //서브서브 12번째
                for(var i in lithoNav.sub6[11].subsub){
                  txt +="<li><a href='#'>"+lithoNav.sub6[11].subsub[i]+"</a></li>";
                }
                sub6Menu.eq(0).html(txt);
                txt='';
                //서브서브 13번째
                for(var i in lithoNav.sub6[12].subsub){
                  txt +="<li><a href='#'>"+lithoNav.sub6[12].subsub[i]+"</a></li>";
                }
                sub6Menu.eq(1).html(txt);
                txt='';

                
                //서브 7
                var sub7Menu = $('.sub7 .sub-menu');
                // var sub7Img = $('.sub7 .sub-img')

                for(var i in lithoNav.sub7){
                  for(var j in lithoNav.sub7[i].sub){
                    if(j==0&&i<2){
                      txt += "<dt>"+lithoNav.sub7[i].sub[j]+"</dt>";
                    }else if(i<2){
                      txt += "<dd><a href='#'>"+lithoNav.sub7[i].sub[j]+"</a></dd>";
                    }
                  }
                }
                sub7Menu.eq(0).html(txt);
                txt='';

                // for(i=0;i<2;i++){
                //   txt += "<a href='#' title='Banner'><img src='./img/"+lithoNav.sub7[i+2].sub+"' alt='banner image'></a>";
                //   sub7Img.eq(i).html(txt);

                //   txt='';
                // }

                // attr : 속성 값 불러오기
                var $sub7Img = $('.sub7 img');


                for(i=0 ; i<=1;i++){
                  txt = $sub7Img.eq(i).attr('src');
                  txt += lithoNav.sub7[i+2].sub[0];
                  $sub7Img.eq(i).attr('src',txt);
                  txt = '';
                }

                //네비게이션
                //메인버튼(메뉴) - 1 Depth
                //서브메뉴 - 2 Depth
                var $mainBtn =  $('.main-btn');
                var $sub =  $('.sub');
                var $navUlLi =  $('#nav>ul>li');

                //1Depth 이벤트
                //메인메뉴에 마우스 오버시 해당 서브메뉴 보여라
                $mainBtn.on({
                  mouseenter:function(){
                    $subSubSub.stop().hide();
                    $subSub.stop().hide();
                    $(this).next().stop().show(); // 2Depth
                  }
                });

                //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당 서브메뉴 숨겨라
                $navUlLi.on({
                  mouseleave:function(){
                    $sub.stop().hide();
                  }
                });  

                //2Depth 이벤트
                //서브-서브 메뉴 - 3 Depth
                // 서브 메뉴 버튼에 마우스 오버스
                var $subBtn = $('.sub-btn');
                var $subSub = $('.sub-sub');

                $subBtn.on({
                  mouseenter:function(){
                    $subSub.stop().hide();
                    $(this).next().stop().show(); //3 Depth 보여라
                  }
                });

                $navUlLi.on({
                  mouseleave:function(){
                    $subSub.stop().hide();
                  }
                });

                //3Depth 이벤트
                //서브-서브-서브 메뉴 - 4Depth 보여라
                var $subSubBtn = $('.sub-sub-btn')
                var $subSubSub = $('.sub-sub-sub')

                $subSubBtn.on({
                  mouseenter:function(){
                    $subSubSub.stop().hide();
                    $(this).next().stop().show();
                  }
                });

                $subSub.on({
                  mouseleave:function(){
                    $subSubSub.stop().hide();
                  }
                });

              


        },
        section1Fn:function(){
          var $slide   = $('#section1 .slide'); 
          var $window  = $(window);            
          var $winW    = $(window).width();    
          var $winH    = $(window).height();   
          var $nextBtn = $('#section1 .next-btn');
          var $prevBtn = $('#section1 .prev-btn');
          var $pageBtn = $('#section1 .page-btn');
          var cnt      = 0;
          var $slideWrap= $('#section1 .slide-wrap');
          var $slideView= $('#section1 .slide-view');
          var $section1 = $('#section1')
          var n         = $('#section1 .slide').length-2; // 3


              function resizeFn(){
                $winW    = $(window).width();
                $winH    = $(window).height();
                $slide.css({width:$winW});
                // 가로형 모드 반응형
                if(window.orientation == 0){
                  console.log('orientation == 0');
                }
                else if(window.orientation == 90){
                  console.log('orientation == 90');
                }
                else if(window.orientation == 180){
                  console.log('orientation == 180');
                }
                else if(window.orientation == -90){
                  console.log('orientation == -90');
                }

                // 세로형 모드 반응형

                $section1.css({width:$winW, height:$winH});
                $slideWrap.stop().animate({left:-$winW*cnt},0)
              }
              resizeFn();

              $window.resize(function(){
                resizeFn();
              });

              function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt},600,'easeInOutExpo',function(){
                  if(cnt>n-1){cnt=n-3;}
                  if(cnt<n-3){cnt=n-1;}
                  $slideWrap.stop().animate({left:-$winW*cnt},0,'easeInOutExpo')
                });
                pageBtnColorEventFn();
              }
              
              function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
              }
              
              function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
              }
              
              $nextBtn.on({
                click:function(){
                  if(!$slideWrap.is(':animated')){
                    nextSlideCountFn();
                  }
                }
              })
              
              $prevBtn.on({
                click:function(){
                  if(!$slideWrap.is(':animated')){
                  prevSlideCountFn();
                  }
                }
              })

              function pageBtnColorEventFn(){
                var z = cnt;
                if(z>2){
                  z=0;
                }
                $pageBtn.removeClass('addPage')
                $pageBtn.eq(z).addClass('addPage')
              }
              pageBtnColorEventFn();

              $pageBtn.each(function(idx){
                $(this).on({
                  click:function(){
                    cnt = idx;
                    mainSlideFn();
                  }
                })
              });

              $slideWrap.swipe({ // 오른쪽세어 왼쪽으로 터치
                swipeLeft:function(){
                  if(!$slideWrap.is(':animated')){
                    nextSlideCountFn()
                  }
                },
                swipeRight:function(){ // 왼쪽에서 오른쪽으로 터치
                  if(!$slideWrap.is(':animated')){
                    prevSlideCountFn()
                  }
                }
              });

              // setInterval(nextSlideCountFn, 3000);
              


              

        },
        section2Fn:function(){
            
        },
        section3Fn:function(){
            var $slideWrap  = $('#section3 .slide-wrap');
            var $nextBtn    = $('#section3 .next-btn');
            var $prevBtn    = $('#section3 .prev-btn');
            var cnt         = 0;
            var $slide      = $('#section3 .slide');
            var setId       = null;
            var n           = $('#section3 .slide').length-(4+4)-1; // 4개(0,1,2,3)
            console.log(n);


            function mainSlideFn(){
              $slideWrap.stop().animate({left:cnt*-390},600,function(){
                if(cnt>n){cnt=0}
                if(cnt<0){cnt=n}
                $slideWrap.stop().animate({left:cnt*-390},0)
              })
            }

            function nextCountFn(){
              cnt++;
              mainSlideFn();
            }
            function prevCountFn(){
              cnt--;
              mainSlideFn();
            }

            $nextBtn.on({
              click:function(){
                timerFn()
                if(!$slideWrap.is(':animated')){
                  nextCountFn()
                }
              }
            })
            $prevBtn.on({
              click:function(){
                timerFn()
                if(!$slideWrap.is(':animated')){
                  prevCountFn()
                }
              }
            })

            $slideWrap.swipe({ 
              swipeLeft:function(){
                timerFn()
                if(!$slideWrap.is(':animated')){
                  nextCountFn()
                }
              },
              swipeRight:function(){
                timerFn()
                if(!$slideWrap.is(':animated')){
                  prevCountFn()
                }
              }
            });

            $slide.on({
              mouseenter:function(){
                $slide.removeClass('on');
                $(this).addClass('on');
              }
            })
            $slide.on({
              mouseleave:function(){
                $slide.removeClass('on');
              }
            })
            function autoPlay(){
              setId = setInterval(nextCountFn,3000);
            }autoPlay()

            // 타이머 함수
            // (클릭 or 터치)이벤트가 발생하면 애니메이션 일시중지
            // 4초간 이벤트( 클릭 or 터치 )가 없으면
            // 다음 슬라이드 곧바로 실행
            // 자동 타이머 실행 autoPlay()
            var t=0;
            var setId2 = null;
            function timerFn(){
              clearInterval(setId)
              clearInterval(setId2)
              t=0;
              setId2 = setInterval(function(){
                t++
                if(t>=5){
                  t=0;
                  clearInterval(setId2);
                  nextCountFn();
                  setId = setInterval(nextCountFn,3000);
                }
              },1000)
            }
            



        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
            
        },
        section6Fn:function(){
            
        },
        section7Fn:function(){
            
        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        }
    } //객체 끝


    litho.init();

})(jQuery);