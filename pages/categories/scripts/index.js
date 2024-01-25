function openModal(index) {
    const modal = document.getElementById(`categoryModal${index}`);   
    modal.style.display = "block";
}

function closeModal(index) {
    const modal = document.getElementById(`categoryModal${index}`);   
    modal.style.display = "none";
}
