$(document).ready(function () {
  const $reviewContainer = $(".customer-review-cards");
  const $thirdCard = $(".customer-review-card").eq(2);
  const cardWidth = $thirdCard.outerWidth(true);
  const containerWidth = $reviewContainer.outerWidth();

  const scrollPosition = Math.round(
    $thirdCard.position().left - containerWidth / 2 + cardWidth / 2
  );
  $reviewContainer.scrollLeft(scrollPosition);

  $(".btn-nav-right").on("click", function () {
    $reviewContainer.animate(
      { scrollLeft: $reviewContainer.scrollLeft() + cardWidth + 24 }, 
      300
    );
  });

  $(".btn-nav-left").on("click", function () {
    $reviewContainer.animate(
      { scrollLeft: $reviewContainer.scrollLeft() - cardWidth - 24 }, 
      300
    );
  });
});
