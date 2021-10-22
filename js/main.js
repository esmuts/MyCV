/*
  I consulted the following websites for guidance:
  Fading backgrounds – 
  https://css-tricks.com/forums/topic/fade-background-color-with-jquery/
  Animating border lines –
  https://stackoverflow.com/questions/30228269/animating-the-border-in-css
  setTimeout function –
  https://stackoverflow.com/questions/5396119/using-jquery-delay-with-css
  Using hash property to enable smooth scrolling –
  https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
  https://css-tricks.com/snippets/jquery/smooth-scrolling/
  jQuery attribute selectors –
  https://api.jquery.com/category/selectors/attribute-selectors/
*/

$(document).ready(function () {
  // jQuery function animates title header on load.
  $("h1.freelance").css("color", "orange");
  setTimeout(function () {
    $("h1.freelance").css("color", "black");
    $("h1.academic").css("color", "orange");
    setTimeout(function () {
      $("h1.academic").css("color", "black");
      $("h1.coding").css("color", "orange");
      $(".in-training").fadeIn(1200);
      setTimeout(function () {
        $("h1.coding").css("color", "black");
      }, 1200);
    }, 1200);
  }, 1200);
  // jQuery function reveals menu on icon click.
  $(".bi-list").click(function () {
    $(".menu-box").toggleClass("menu-show");
  });
  // jQuery function enables smooth scrolling for menu items, and hides menu
  // on list item click.
  $(".menu-dropdown a").click(function (event) {
    $(".menu-box").toggleClass("menu-show");
    // Prevents instant scroll.
    event.preventDefault();
    let targetTag = this.hash;
    // Animation sets scroll speed to offset position of target tag.
    $("html, body").animate(
      {
        scrollTop: $(targetTag).offset().top,
      },
      800
    );
  });
  // jQuery function enables smooth scrolling for <a> elements with "tag" links
  $("a[rel='tag']").click(function (event) {
    console.log(event);
    event.preventDefault();
    let targetTag = this.hash;
    // Animation sets scroll speed to offset position of target tag.
    $("html, body").animate(
      {
        scrollTop: $(targetTag).offset().top,
      },
      800
    );
  });
});

// jQuery function animates "Work Experience" content when scrolling position
// reaches "Work Experience" title area.
$(window).scroll(function () {
  let targetPos = $("#experience").offset().top;
  if ($(document).scrollTop() > targetPos - 300) {
    $("#border-draw-box1").animate({ width: "0%" }, 1500);
    $("#border-draw-box2").animate({ height: "0%" }, 1500);
  }
});

// Function displays "Work Experience" content and "Close" button.
function showExperience(currentElement) {
  let currentClass = currentElement.className;
  $(".experience-display").animate({ height: "100%" }, 1500);
  $("article." + currentClass).show();
  setTimeout(function () {
    $("button.hide-content").show();
  }, 1500);
}

// Function collapses "Work Experience" content.
function collapseContent() {
  $("button.hide-content").hide();
  $(".experience-display").animate({ height: "0%" }, 700);
  setTimeout(function () {
    $("article").hide();
  }, 600);
}
