addEventListener ("load", function(event) {
	event.preventDefault();

const firsth1onpage = document.querySelector("h1");
firsth1onpage.remove();

const firstH1 = document.createElement("h1");
firstH1.append("Webpage Creation Practice?");
document.querySelector("body").append(firstH1);

const p = document.createElement("p");
p.append("HTML tried to stop us from making this webpage and javaScript killed it!");
document.querySelector("body").append(p);

const firstH2 = document.createElement("h2");
firstH2.append("");
document.querySelector("body").append(firstH2);

const img = document.createElement("img");
img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
img.setAttribute("alt", "This is an image of a silly bird!");
img.setAttribute("style", "width:50%")
firstH2.append(img);

const sech2 = this.document.createElement("h2");
sech2.append("Hang up the phone, cause here are some facts");
this.document.querySelector("body").append(sech2);

const ul = this.document.createElement("ul");
this.document.querySelector("body").append(ul);

const lione = this.document.createElement("li");
const litwo = this.document.createElement("li");
lione.append("Hunting only at night, this bird has broken many local hunting laws.")
litwo.append("Even though it has wings, this birdy flies using a hover-board.")

this.document.querySelector("ul").append(lione, litwo);

const thirdH2 = document.createElement("h2");
thirdH2.append("Hey, punk, here's a source");
document.querySelector("body").append(thirdH2);

const links = this.document.createElement("a")
links.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager")
links.append("Wiki")
this.document.querySelector("body").append(links)
})
