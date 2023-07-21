// delerations

var bookmark =document.getElementById('name')
var siteUrl =document.getElementById('url')
var tbody= document.getElementById('tbody')
var myData=[]
/**************************************************************************************** */
if(localStorage.getItem('products') !=null){
   
     myData = JSON.parse(localStorage.getItem('products'))
     display(myData)

}


function clear(){
    bookmark.value=''
    siteUrl.value=''
}
function display(array){
     var trs=''
    for(var i=0 ;i<array.length;i++){
          trs += `<tr> <td>${i+1}</td>
          <td>${array[i].name}</td>
          <td><a class='visit ' href='${array[i].url}' target=blank><i class="fa-solid fa-eye"></i> visit</a></td>
          <td><button class='delete ' onclick='Delete(${i})'><i class="fa-solid fa-trash"></i> Delete</button></td>
       
          </tr>`
    }
    tbody.innerHTML=trs
    
}
function isUrlValid(str) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
        '((\\d{1,3}\\.){3}\\d{1,3}))' + 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
        '(\\?[;&a-z\\d%_.~+=-]*)?' + 
        '(\\#[-a-z\\d_]*)?$', 
      'i'
    );
    return pattern.test(str);
   }
function add(){
    if(isUrlValid(url.value)){
        application={
            name:bookmark.value,
            url:siteUrl.value
        }
        myData.push(application)
        localStorage.setItem('products',JSON.stringify(myData))
        display(JSON.parse(localStorage.getItem('products')))
    
        
    
        clear()
    }else{swal(`Site Name or Url is not valid, Please follow the rules below :

    Site name must contain at least 3 characters
    Site URL must be a valid one`)
       
    }
    

}

function Delete(index){
    myData.splice(index,1)
    localStorage.setItem('products',JSON.stringify(myData))
    display(myData)
}


