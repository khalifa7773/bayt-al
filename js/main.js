$(function () {

  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-left",
    timeOut: 3000
  };

  $("#menuToggle").on("click", function () {
    $("#navLinks").toggleClass("active");
    $("#navOverlay").toggleClass("active");
    $(this).toggleClass("active");
  });

  $("#navOverlay").on("click", function () {
    $("#navLinks, #navOverlay, #menuToggle").removeClass("active");
  });

  $("#navLinks a").on("click", function () {
    $("#navLinks, #navOverlay, #menuToggle").removeClass("active");
  });

  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $("#navLinks, #navOverlay, #menuToggle").removeClass("active");
    }
  });

  window.openAjaxModal = function (url, modalId) {
    $("#modalContainer").load(url, function () {
      var modal = new bootstrap.Modal(document.getElementById(modalId));
      modal.show();
    });
  };

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    var email = $("#loginEmail").val().trim();
    var password = $("#loginPassword").val().trim();

    if (!email || !password) {
      toastr.error("يرجى تعبئة جميع الحقول");
      return;
    }

    if (!isValidEmail(email)) {
      toastr.error("صيغة البريد الإلكتروني غير صحيحة");
      return;
    }

    toastr.success("تم تسجيل الدخول بنجاح");
    this.reset();
  });

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();

    var name = $("#regName").val().trim();
    var email = $("#regEmail").val().trim();
    var password = $("#regPassword").val().trim();
    var confirm = $("#regConfirm").val().trim();

    if (!name || !email || !password || !confirm) {
      toastr.error("يرجى تعبئة جميع الحقول");
      return;
    }

    if (!isValidEmail(email)) {
      toastr.error("صيغة البريد الإلكتروني غير صحيحة");
      return;
    }

    if (password.length < 6) {
      toastr.error("كلمة المرور يجب ألا تقل عن 6 أحرف");
      return;
    }

    if (password !== confirm) {
      toastr.error("كلمتا المرور غير متطابقتين");
      return;
    }

    toastr.success("تم إنشاء الحساب بنجاح");
    this.reset();
  });

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var name = $("#contactName").val().trim();
    var email = $("#contactEmail").val().trim();
    var message = $("#contactMessage").val().trim();

    if (!name || !email || !message) {
      toastr.error("يرجى تعبئة جميع الحقول");
      return;
    }

    if (!isValidEmail(email)) {
      toastr.error("صيغة البريد الإلكتروني غير صحيحة");
      return;
    }

    toastr.success("تم إرسال رسالتك بنجاح");
    this.reset();
  });

  $(document).on("submit", "#quickContactForm", function (e) {
    e.preventDefault();
    toastr.success("تم إرسال رسالتك بنجاح");
    this.reset();

    var modal = bootstrap.Modal.getInstance(
      document.getElementById("contactModal")
    );

    if (modal) modal.hide();
  });

  $(document).on("click", "#addToCartBtn", function () {
    toastr.success("تمت إضافة المنتج إلى السلة");
  });

});