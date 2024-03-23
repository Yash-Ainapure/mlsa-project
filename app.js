function toggleSidebar() {
   var sidebar = document.getElementById("sidebar");
   if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
   } else {
      sidebar.style.width = "250px";
   }
}

// Close sidebar when clicked outside
document.addEventListener('click', function (event) {
   var sidebar = document.getElementById("sidebar");
   var sidebarToggle = document.getElementById("navbar-toggle");
   if (event.target !== sidebar && event.target !== sidebarToggle && sidebar.style.width === "250px") {
      sidebar.style.width = "0";
   }
});
