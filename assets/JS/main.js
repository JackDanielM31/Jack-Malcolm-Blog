function injectHeader() {
    fetch("components/header.html")
      .then(headerObject => headerObject.text())
      .then(headerHTML => {
        document.getElementById("header").innerHTML = headerHTML;
        });
}

function injectFooter() {
    fetch("components/footer.html")
      .then(footerObject => footerObject.text())
      .then(footerHTML => {
        document.getElementById("footer").innerHTML = footerHTML;
        });
}

if (document.getElementById("header")) {
    injectHeader();
}

if (document.getElementById("footer")) {
    injectFooter();
}