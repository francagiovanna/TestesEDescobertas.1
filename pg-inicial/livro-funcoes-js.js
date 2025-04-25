function toggleMenu(menuId) {
    // Fecha todos os menus abertos
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(menu => {
      if (menu.id !== menuId) {
           menu.classList.add('oculto');
          }
        });
      
    // Alterna o menu clicado
    const menu = document.getElementById(menuId);
    menu.classList.toggle('oculto');
      }
      