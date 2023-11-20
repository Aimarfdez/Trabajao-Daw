document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos .select-container
    var selectContainers = document.querySelectorAll('.select-container');

    //  mostrar las opciones
    function showOptions(selectOptions) {
       selectOptions.style.display = 'block';
    }

    // cerrar las opciones
    function closeOptions(selectOptions) {
       selectOptions.style.display = 'none';
    }

    // Itera sobre cada .select-container
    selectContainers.forEach(function (selectContainer) {
       var selectBox = selectContainer.querySelector('.select-box');
       var selectOptions = selectContainer.querySelector('.select-options');

       //  pasar el ratón 
       selectContainer.addEventListener('mouseover', function () {
          showOptions(selectOptions);
       });

       //  salir del área 
       selectContainer.addEventListener('mouseout', function (event) {
          if (!selectContainer.contains(event.relatedTarget) && !selectOptions.contains(event.relatedTarget)) {
             closeOptions(selectOptions);
          }
       });

       // Cierra las opciones si se hace clic fuera 
       document.addEventListener('click', function (event) {
          // Verifica que el clic no sea en la flecha ni en ninguna subopción
          if (event.target !== selectBox && !selectOptions.contains(event.target)) {
             closeOptions(selectOptions);
          }
       });
    });
 });