document.getElementById('searchTerms').addEventListener('submit', searchTerm);
document.getElementById('viewAll').addEventListener('click', viewAll);

function searchTerm(e){
    console.log("Search!");
}

function viewAll(){
    console.log("View all!");
    fetch('terms.json')
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        let output = '';
        for (var key in data){
            output += `
            <h1 class="text-center">${key}</h1>
            <table class="table table-hover" id="mytable">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Term</th>
                    <th scope="col">Definition</th>
                    </tr>
                </thead>
                <tbody>
            `
            for (i = 0; i < data[key].length; i++){
                output += `
                    <tr>
                    <th scope="row">${i+1}</th>
                    <td>${data[key][i]['term']}</td>
                    <td>${data[key][i]['definition']}</td>
                    </tr>
                `;
            }
            output += `
                </tbody>
            </table>
            <hr>
            <br>
            `
        }
        
        document.getElementById('outputAll').innerHTML = output;
    })
    .catch((err) => console.log(err));
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
            output += `
            <h1 class="text-center">${key}</h1>
            <table class="table table-hover" id="mytable">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Term</th>
                    <th scope="col">Definition</th>
                    </tr>
                </thead>
                <tbody>
            `
            for (i = 0; i < data[key].length; i++){
                output += `
                    <tr>
                    <th scope="row">${i+1}</th>
                    <td>${data[key][i]['term']}</td>
                    <td>${data[key][i]['definition']}</td>
                    </tr>
                `;
            }
            output += `
                </tbody>
            </table>
            <hr>
            <br>
            `
        }
        
        document.getElementById('outputAll').innerHTML = output;
    })
    .catch((err) => console.log(err));
 })();