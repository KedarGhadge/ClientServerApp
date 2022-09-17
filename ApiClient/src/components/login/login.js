import ko from "knockout";
import loginTemplate from "text!./login.html";

class MyLogin {
  constructor(route) {
    var self = this;
    this.message = ko.observable("Welcome to MySite!");

    self.doChangeTxt = function () {
      $.ajax({
        type: "POST",
        url: "./home/login",
        //data: ko.toJSON(new LoginEn(this.userName(), this.password(), this.selectedCustomer().CustomerID)),

        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
          if (data) {
            //cu.session.customer(self.selectedCustomer());
            $("#toptitle").text(data);
          } else $("#toptitle").text("No Data");
        },
        error: function () {
          console.log("login Failed!!");
        },
      });
      // $("#toptitle").text("New word");
    };
  }
}

export default { viewModel: MyLogin, template: loginTemplate };
