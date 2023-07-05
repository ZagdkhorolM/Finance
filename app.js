var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдөл өө олно
    console.log("Дүн оруулсан.");
    // 2. Олж авсан өгөгдөлүүдээ санхүүгийн контроллерт хадгална.
    // 3. Олж авсан өгөгдөлүүдээ веб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.witch === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
