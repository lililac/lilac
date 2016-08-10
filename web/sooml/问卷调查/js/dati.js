/**
 * Created by admin on 2016/7/19.
 */


/*     AngularJS 控件  （鸣人：影子分身术！！）   */

angular.module('myapp', []).controller('myaone', function($scope) {
    $scope.myis = [
        {'tit':'你的大明叫啥','my':'满意度','con3':'又像古代的床。因此古代井栏又叫银床，说明井和床有关系，其关系的发生则是由于两者在形状上的相似和功能上的类同。'},
        {'tit':'我好帅','my':'满意度','con3':'一张网页，要经历怎样的过程，才能抵达用户面前？=探寻这里的秘密；体验这里的挑战；成为这里的主人；加入百度，加入网页搜索，你，可以影响世界。'},
        {'tit':'你不帅','my':'满意度','con3':'无惑？惑而不乎吾前师说师说；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师夫庸知其年之先后生于吾乎（9）？是故（10）无（11）贵无贱，无长无少，道之所存师之所存也（12）。'},
        {'tit':'你好美','my':'满意度','con3':'你妹啊'}
    ];
});


       /*  让强大的JQ 来实现你的愿望！！ */
$(function(){


    /*  根据li标签的数量控制 ul2的宽度  */
    $('#t2ul').width(
        function(){
            var i=$('#t2ul li').length;
            return   i*($('#t2ul li').width());   //  如果li标签有 10px 的margin ， 如果不 +1 所得的的宽度不能放下所有的 li 目的是为了让 ul 能够横排放下所有的 li  。最初搭建框架时有margin 后来去掉了，就不用 +1 了；
        }
    );

    $('#t2ul .t2lidiv').width(function(){
        return  $('#t2 .swp').width();
    });

    /*  点击事件  */
    function t2ul(){
        var a= $('#t2ul li').width();  //获取宽度
        var i=0;                        //控制ul  left的变量
        var j=$('#t2ul li').length;     //li标签的数量
        var t2d=$('#t2jt').width();
        var m=null;                     //通过 变量 m 来控制#t2 .swp 的高度
        var lieq=0;                     //当前li标签在ul当中的位置

        var arr=[];                     //储存选项

        var lii=0;
        //在储存选项数组中添加空，目的是用于储存及判断答案。
        for(lii=0;lii<j;lii++){
            arr.push('')
        };


        /*  选项监听  */
        //更改选项

        $('#t2ul .t2lidivs').click(function(){
                var lidiv = $(this).index();                  //获取当前元素所在父级元素的位置
                var ful=$(this).parent().parent().parent();      //获取父级的父级的父级元素 ul
                    //  alert(ful.find('li').length);
                var fli=$(this).parent().parent().index();      //获取父级的父级的元素 li 在ul当中的位置

                var fdv=$(this).parent();                      //获取父级元素 div .t2lidiv

                 arr.splice(fli,1,lidiv-2);                        //点击按钮时 删除 数组中 fli位置的数值，添加为当前选项，也就是答案所在的位置

                fdv.find($('.t2lidivs')).find($('.t2yuan')).removeClass('okx');         //删除所有 选项的（‘okx’）圆点

                $(this).find($('.t2yuan')).addClass('okx');      // 为当前选项加上（class‘okx’）  改变选项圆点。   find()函数获取子元素

                console.log(arr);

                var arri=arr.indexOf('');           //循环储存数组，判断是否有空（‘’），如果有则返回的是第一个‘’所在的数组位置，如果数组当中没有为空的，返回值为 -1

                if(arri==-1){
                        $('#t2 .btn .btnps').css({display: 'block'});
                        $('#t2 .btn div').css({display:'none'});
                        $('#t2jt div').animate({width:'100%'},500);
                }
                console.log(arri);
        }
        );
        // 加载完成时 初始化#t2 .swp 的高度

        function swpw(){
            $('#t2 .swp').height(function(){
                var m= $('#t2ul li').eq(lieq).height();
                return m;
            });
        }
        swpw();


        //按钮控制
        // ⑴切换题目 ，通过左右移动ul的left值实现。
        // ⑵控制进度调，根据当前答题位置控制 #t2jt 当中div的宽度。
        // ⑶根据当前所显示的li标签的高度  时时改变t2当中的 div swp 的高度，保存页面美观
        $('#t2btn1').click(function(){
            i++;
            if(i==1){
                i=0
            };
            m=(-i/j)*t2d;
            $('#t2ul').animate({left:i*a},500);
            $('#t2jt div').animate({width:m},500);

            lieq--;
            if(lieq==-1){
                lieq=0
            }
            swpw();

        });

        $('#t2btn2').click(function(){
            i--;
            if(i==-j){
                i=-(j-1)
            };
            m=(-i/j)*t2d;
            $('#t2ul').animate({left:i*a},500);
            $('#t2jt div').animate({width:m},500);

            lieq++;
            if(lieq==j){
                lieq=j-1;
                 var arri=arr.indexOf('')+1;
                alert('第'+arri+'题未完成');
            }
            swpw();

        });
    }
    t2ul();

});
