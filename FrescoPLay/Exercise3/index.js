function runList(){
    //Type your code here.
    var node = document.createElement('option');
    var txt = document.getElementById('txtbox').value;
    var textnode = document.createTextNode(txt);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
    // console.log(document.getElementById('list').options);
}


