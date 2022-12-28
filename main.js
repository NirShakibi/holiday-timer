var purim = new Date("Mar 6, 2023 00:00:00").getTime();
var passover = new Date("April 5, 2023 00:00:00").getTime();
var shavuot = new Date("May 25, 2023 00:00:00").getTime();
var bday = new Date("Feb 26, 2023 00:00:00").getTime();

var puriminterval = setInterval(function () {
  var purimnow = new Date().getTime();
  var purimdistance = purim - purimnow;

  var purimdays = Math.floor(purimdistance / (1000 * 60 * 60 * 24));
  var purimhours = Math.floor(
    (purimdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var purimminutes = Math.floor(
    (purimdistance % (1000 * 60 * 60)) / (1000 * 60)
  );
  var purimseconds = Math.floor((purimdistance % (1000 * 60)) / 1000);

  document.getElementById("purim").innerHTML =
    purimdays +
    "d " +
    purimhours +
    "h " +
    purimminutes +
    "m " +
    purimseconds +
    "s ";

  if (purimdistance < 0) {
    clearInterval(puriminterval);
    document.getElementById("purim").innerHTML = "Purim has started!";
  }
}, 0);

var passoverinterval = setInterval(function () {
  var passovernow = new Date().getTime();
  var passoverdistance = passover - passovernow;

  var passoverdays = Math.floor(passoverdistance / (1000 * 60 * 60 * 24));
  var passoverhours = Math.floor(
    (passoverdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var passoverminutes = Math.floor(
    (passoverdistance % (1000 * 60 * 60)) / (1000 * 60)
  );
  var passoverseconds = Math.floor((passoverdistance % (1000 * 60)) / 1000);

  document.getElementById("passover").innerHTML =
    passoverdays +
    "d " +
    passoverhours +
    "h " +
    passoverminutes +
    "m " +
    passoverseconds +
    "s ";

  if (passoverdistance < 0) {
    clearInterval(passoverinterval);
    document.getElementById("passover").innerHTML = "Passover has started!";
  }
});

var shavuotinterval = setInterval(function () {
  var shavuotnow = new Date().getTime();
  var shavuotdistance = shavuot - shavuotnow;

  var shavuotdays = Math.floor(shavuotdistance / (1000 * 60 * 60 * 24));
  var shavuothours = Math.floor(
    (shavuotdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var shavuotminutes = Math.floor(
    (shavuotdistance % (1000 * 60 * 60)) / (1000 * 60)
  );
  var shavuotseconds = Math.floor((shavuotdistance % (1000 * 60)) / 1000);

  document.getElementById("shavuot").innerHTML =
    shavuotdays +
    "d " +
    shavuothours +
    "h " +
    shavuotminutes +
    "m " +
    shavuotseconds +
    "s ";

  if (shavuotdistance < 0) {
    clearInterval(shavuotinterval);
    document.getElementById("shavuot").innerHTML = "Shavuot has started!";
  }
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

var bdayinterval = setInterval(function () {
  var bdaynow = new Date().getTime();
  var bdaydistance = bday - bdaynow;

  var bdaydays = Math.floor(bdaydistance / (1000 * 60 * 60 * 24));
  var bdayhours = Math.floor(
    (bdaydistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var bdayminutes = Math.floor((bdaydistance % (1000 * 60 * 60)) / (1000 * 60));
  var bdayseconds = Math.floor((bdaydistance % (1000 * 60)) / 1000);

  document.getElementById("bday").innerHTML =
    bdaydays +
    "d " +
    bdayhours +
    "h " +
    bdayminutes +
    "m " +
    bdayseconds +
    "s ";

  if (bdaydistance < 0) {
    clearInterval(bdayinterval);
    document.getElementById("bday").innerHTML = "My Birthday has started!";
  }
});

var purimmoney = 400 + "ILS";
var shlomiagenow = new Date("Feb 26, 2041 00:00:00").getTime();
