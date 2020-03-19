var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/laoliveira');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.onreadystatechange === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}