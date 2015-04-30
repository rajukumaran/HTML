$(function($) {
    var num_cols = 3,
    container = $('.split-list'),
    listItem = 'li',
    listClass = 'sub-list';
    container.each(function() {
        var items_per_col = new Array(),
        items = $(this).find(listItem),
        // min_items_per_col = Math.floor(items.length / num_cols),
        min_items_per_col = num_cols,
        difference = items.length - (min_items_per_col * num_cols);
        for (var i = 0; i < num_cols; i++) {
            if (i < difference) {
                items_per_col[i] = min_items_per_col + 1;
            } else {
                items_per_col[i] = min_items_per_col;
            }
        }
        for (var i = 0; i < num_cols; i++) {
            $(this).append($('<ul ></ul>').addClass(listClass));
            for (var j = 0; j < items_per_col[i]; j++) {
                var pointer = 0;
                for (var k = 0; k < i; k++) {
                    pointer += items_per_col[k];
                }
                $(this).find('.' + listClass).last().append(items[j + pointer]);
            }
        }
    });
});

$(document).ready(
    function(){
        $('#devSubLink1').click(function () {
            $('.subSystem').hide();
            $('#devSub1').fadeIn('slow');
        });
        $('#devSubLink2').click(function () {
            $('.subSystem').hide();
            $('#devSub2').fadeIn('slow');
        });
        $('#devSubLink3').click(function () {
            $('.subSystem').hide();
            $('#devSub3').fadeIn('slow');
        });
        $('#delSubLink1').click(function () {
            $('.subSystem').hide();
            $('#delSub1').fadeIn('slow');
        });
        $('#delSubLink2').click(function () {
            $('.subSystem').hide();
            $('#delSub2').fadeIn('slow');
        });
        $('#delSubLink3').click(function () {
            $('.subSystem').hide();
            $('#delSub3').fadeIn('slow');
        });
           $('#sfSubLink1').click(function () {
            $('.subSystem').hide();
            $('#sfSub1').fadeIn('slow');
        });
        $('#sfSubLink2').click(function () {
            $('.subSystem').hide();
            $('#sfSub2').fadeIn('slow');
        });
        $('#sfSubLink3').click(function () {
            $('.subSystem').hide();
            $('#sfSub3').fadeIn('slow');
        });


        // Inside Page Menu
        $('#inside-devBoxLink').click(function() {
            $('#devInsideMenuDev').fadeIn();
        });
        $('#devMarketing').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysMarketing').fadeIn();
        });
        $('#devCRM').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysCRM').fadeIn();
        });
        $('#devEcomm').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysEcomm').fadeIn();
        });



        $('#inside-delBox').click(function() {
            $('#delInsideMenuDel').fadeIn();
        });
        $('#delSales').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysSales').fadeIn();
        });
        $('#delSupply').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysSupply').fadeIn();
        });


        $('#inside-sfBox').click(function() {
            $('#sfInsideMenuSf').fadeIn();
        });
        $('#sfArea1').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysArea1').fadeIn();
        });
        $('#sfArea2').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysArea2').fadeIn();
        });
        $('#sfArea3').click(function() {
            $('.insideSysItemsList').hide();
            $('#dimSysArea3').fadeIn();
        });



        // Resets
        $('.sysclose').click(function() {
            $('.subSystem').slideUp('fast');
        });
        $('.inside-navBox').click(function () {
            $('.inside-nav').children('div').addClass('inactiveNav');
            $(this).removeClass('inactiveNav');
        });
        $(document).mouseup(function (e) {
            var container = $(".insidePageMenu");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
                $('.inside-navBox').removeClass('inactiveNav');
            }
        });
    });