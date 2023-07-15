var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productcode"] = document.getElementById("productcode").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("t2id").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productcode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.productname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Quantity;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productcode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productcode;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.price;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('t2id').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productcode").value = '';
    document.getElementById("productname").value = '';
    document.getElementById("Quantity").value = '';
    document.getElementById("price").value = '';
    selectedRow = null;
}