var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, desc, val) {
      console.log("Item added...");
    },
  };
})();

var appController = (function (uiController, financeController) {
  var DOM = uiController.getDOMstrings();
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдөл өө олно
    var input = uiController.getInput();
    // 2. Олж авсан өгөгдөлүүдээ санхүүгийн контроллерт хадгална.
    financeController.addItem();
    // 3. Олж авсан өгөгдөлүүдээ веб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      var DOM = uiController.getDOMstrings();
      if (event.keyCode === 13 || event.witch === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("App started...");
    },
  };
})(uiController, financeController);

appController.init();
