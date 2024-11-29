
var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');
let bookmarkContainer =  JSON.parse(localStorage.getItem("sites") || "[]");
bookmarkWrapper = document.getElementById('tableContent')
displayBookmark();

function addBookmark() {
    var site = {
        name: bookmarkName.value,
        URL: bookmarkURL.value,
    }
    if(bookmarkContainer.find(o => o.name === site.name)){
window.alert('already exist');
    }else{
        if(this.isValid(site.URL)){
            bookmarkContainer.push(site);
            localStorage.setItem("sites", JSON.stringify(bookmarkContainer));

        }else{
            window.alert('url is not valid </br> it should contain http or https like https://google.com');

        }

    }
    displayBookmark();

}
function isValid(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
function displayBookmark() {
    var htmlMarkup = "";
    for (i = 0; i < bookmarkContainer.length; i++) {
        htmlMarkup += `
          <tr>
                        <td>${i + 1}</td>
                        <td>${bookmarkContainer[i].name}</td>
                        <td><button type="button" class="btn btn-warning"><a target="_blank" href="${bookmarkContainer[i].URL}"> <i class="fa-regular fa-eye"></i>Visit</a> </button></td>
                        <td><button type="button" class="btn btn-success" onclick="Deletebookmark(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>

                    </tr>`
    }
    bookmarkWrapper.innerHTML=htmlMarkup;

}

function Deletebookmark(index){
    bookmarkContainer.splice(index,1)
    localStorage.setItem("sites", JSON.stringify(bookmarkContainer));

    displayBookmark()

}