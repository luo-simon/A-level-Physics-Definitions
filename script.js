document.getElementById('searchTerms').addEventListener('submit', searchTerm);

function searchTerm(e){
    console.log("Search!");
}

function searchFilter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Runs when document has loaded
(function() {
    console.log("View all!");
    fetch('terms.json')
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        let output = '';
        for (var key in data){
            for (i = 0; i < data[key].length; i++){
                output += `
                    <tr>
                    <td>${key}</td>
                    <td>${data[key][i]['term']}</td>
                    <td>${data[key][i]['definition']}</td>
                    </tr>
                `;
            }
        }
        
        document.getElementById('outputAll').innerHTML = output;
    })
    .catch((err) => console.log(err));
 })();