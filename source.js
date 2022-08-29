
fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then(response => {
    response.json().then(data => {
        
        console.log(data);
        
        if (data.data.length > 0) {
        hideLoad();
          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.office + "</td>";
            temp += "<td>" + itemData.position + "</td>";
            temp += "<td>" + itemData.salary + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
    function hideLoad(){
        document.getElementById('loading').style.visibility='hidden';
        document.getElementById('tablecontainer').style.visibility="visible";
    }
  }

)



