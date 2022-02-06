!function(e){"use strict";e(function(){e('[data-toggle="offcanvas"]').on("click",function(){e(".sidebar-offcanvas").toggleClass("active")})})}(jQuery),function(e){"use strict";e(document).on("mouseenter mouseleave",".sidebar .nav-item",function(a){var s=e("body"),t=s.hasClass("sidebar-icon-only"),l=s.hasClass("horizontal-menu"),n=s.hasClass("sidebar-fixed"),i=e(this);"ontouchstart"in document.documentElement?(t||l)&&("mouseenter"===a.type?i.addClass("hover-open"):i.removeClass("hover-open")):(t||l)&&(n?"mouseenter"===a.type&&s.removeClass("sidebar-icon-only"):"mouseenter"===a.type?i.addClass("hover-open"):i.removeClass("hover-open"))}),e(".navbar.horizontal-layout .navbar-menu-wrapper .navbar-toggler").on("click",function(){e(".navbar.horizontal-layout").toggleClass("header-toggled")})}(jQuery),function(e){"use strict";e(function(){var a=e("body"),s=(e(".content-wrapper"),e(".container-scroller"),e(".footer"),e(".sidebar"));e(".email-wrapper .mail-list-container .mail-list").on("click",function(){e(".email-wrapper .mail-list-container").addClass("d-none"),e(".email-wrapper .mail-view").addClass("d-block")}),e(".email-wrapper .mail-back-button").on("click",function(){e(".email-wrapper .mail-list-container").removeClass("d-none"),e(".email-wrapper .mail-view").removeClass("d-block")}),e(".aside-toggler").on("click",function(){e(".mail-sidebar").toggleClass("menu-open")}),s.on("show.bs.collapse",".collapse",function(){s.find(".collapse.show").collapse("hide")}),function(){if(!a.hasClass("rtl")){if(e(".settings-panel .tab-content .tab-pane.scroll-wrapper").length){new PerfectScrollbar(".settings-panel .tab-content .tab-pane.scroll-wrapper")}if(e(".chats").length){new PerfectScrollbar(".chats")}if(e(".scroll-container").length){new PerfectScrollbar(".scroll-container")}if(a.hasClass("sidebar-fixed"))new PerfectScrollbar("#sidebar .nav")}}(),e('[data-toggle="minimize"]').on("click",function(){a.hasClass("sidebar-toggle-display")||a.hasClass("sidebar-absolute")?a.toggleClass("sidebar-hidden"):a.toggleClass("sidebar-icon-only")}),e(".form-check label,.form-radio label").append('<i class="input-helper"></i>')})}(jQuery),function(e){"use strict";e(function(){e(".nav-settings").click(function(){e("#theme-settings").removeClass("open"),e("#right-sidebar").toggleClass("open")}),e(".settings-close").click(function(){e("#right-sidebar,#theme-settings").removeClass("open")}),e(".navbar-nav .nav-item.color-setting").on("click",function(){e("#right-sidebar").removeClass("open"),e("#theme-settings").toggleClass("open")});var a="navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink",s=e("body");e("#sidebar-light-theme").on("click",function(){s.removeClass("sidebar-light sidebar-dark"),s.addClass("sidebar-light"),e(".sidebar-bg-options").removeClass("selected"),e(this).addClass("selected")}),e("#sidebar-dark-theme").on("click",function(){s.removeClass("sidebar-light sidebar-dark"),s.addClass("sidebar-dark"),e(".sidebar-bg-options").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.primary").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-primary"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.success").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-success"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.warning").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-warning"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.danger").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-danger"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.pink").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-pink"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.info").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-info"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.dark").on("click",function(){e(".navbar").removeClass(a),e(".navbar").addClass("navbar-dark"),e(".tiles").removeClass("selected"),e(this).addClass("selected")}),e(".tiles.default").on("click",function(){e(".navbar").removeClass(a),e(".tiles").removeClass("selected"),e(this).addClass("selected")})})}(jQuery),function(e){"use strict";e(function(){var a=e(".todo-list"),s=e(".todo-list-input");e(".todo-list-add-btn").on("click",function(t){t.preventDefault();var l=e(this).prevAll(".todo-list-input").val();l&&(a.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>"+l+"<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>"),s.val(""))}),a.on("change",".checkbox",function(){e(this).attr("checked")?e(this).removeAttr("checked"):e(this).attr("checked","checked"),e(this).closest("li").toggleClass("completed")}),a.on("click",".remove",function(){e(this).parent().remove()})})}(jQuery),function(e){"use strict";e(".js-example-basic-single").length&&e(".js-example-basic-single").select2(),e(".js-example-basic-multiple").length&&e(".js-example-basic-multiple").select2()}(jQuery),function(e){"use strict";e("#timepicker-example").length&&e("#timepicker-example").datetimepicker({format:"LT"}),e(".color-picker").length&&e(".color-picker").asColorPicker(),e("#datepicker-popup").length&&e("#datepicker-popup").datepicker({enableOnReadonly:!0,todayHighlight:!0}),e("#inline-datepicker").length&&e("#inline-datepicker").datepicker({enableOnReadonly:!0,todayHighlight:!0}),e(".datepicker-autoclose").length&&e(".datepicker-autoclose").datepicker({autoclose:!0}),e('input[name="date-range"]').length&&e('input[name="date-range"]').daterangepicker(),e('input[name="date-time-range"]').length&&e('input[name="date-time-range"]').daterangepicker({timePicker:!0,timePickerIncrement:30,locale:{format:"MM/DD/YYYY h:mm A"}})}(jQuery);
