/*  $(누구를).뭐뭐할때(실행(){
                $(누구를).보여라()
            }) */

            $('header .more').click(function(){
                $('header .more').toggleClass('on')/*('header .more')에 .클래스만들기('on') */
                $('.brand').fadeToggle/* 보여라 */()
            })