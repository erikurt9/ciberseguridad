
$(document).ready(function () {
  
  $('#contactoForm').submit(function (e) {
    e.preventDefault();
    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const feedback = $('#formFeedback');

    if (!nombre || !correo) {
      feedback
        .text('Por favor completa todos los campos.')
        .removeClass('text-success')
        .addClass('text-danger')
        .fadeIn();
      return;
    }

    feedback
      .text('¡Gracias! Pronto nos pondremos en contacto.')
      .removeClass('text-danger')
      .addClass('text-success')
      .fadeIn();

    this.reset();
  });

 
  $('.respuesta').click(function () {
    const texto = $(this).text();
    const mensaje = texto.includes('Eliminar')
      ? '¡Correcto! Esa es la mejor opción.'
      : 'Incorrecto. Nunca abras correos sospechosos.';
    $('.modal-body').append(`<p class="mt-3 fw-bold">${mensaje}</p>`);
    $('.respuesta').prop('disabled', true);
  });

  
  $('#testModal').on('hidden.bs.modal', function () {
    $(this).find('.modal-body p:last-child').remove(); // solo borra el feedback
    $('.respuesta').prop('disabled', false);
  });
});

