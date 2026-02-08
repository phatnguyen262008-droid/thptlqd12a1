        document.addEventListener("DOMContentLoaded", function () {
    const firstMenu = document.querySelector('.menu a');
    if (firstMenu) {
        firstMenu.click(); // giả lập click mục đầu tiên
    }
    });
        function filterStudents(input) {
            let filter = input.value.toUpperCase();
            let tr = document.getElementById("student-list").getElementsByTagName("tr");
            for (let i = 0; i < tr.length; i++) {
                let nameColumn = tr[i].getElementsByTagName("td")[1];
                if (nameColumn) {
                    let txtValue = nameColumn.textContent || nameColumn.innerText;
                    tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
                }
            }
        }
                function switchChat(chatKey, element) {
            // 1. Ẩn tất cả các khung chat
            document.querySelectorAll('.chat-pane').forEach(pane => {
                pane.classList.remove('active');
            });

            // 2. Hiện khung chat khớp với key (Cô Tin, PH An, Nhóm Lớp)
            // Lưu ý: Tôi đã đồng bộ lại Logic ID ở đây
            if(chatKey === 'co-tin') document.getElementById('co-tin').classList.add('active');
            if(chatKey === 'ph-an') document.getElementById('chat-ph-an').classList.add('active');
            if(chatKey === 'nhom-lop') document.getElementById('chat-nhom-lop').classList.add('active');

            // 3. Đổi trạng thái Active ở menu bên trái
            document.querySelectorAll('.contact-item').forEach(item => {
                item.classList.remove('active');
            });
            element.classList.add('active');
        }
        function showPage(id, el){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) { target.classList.add('active'); el.classList.add('active'); }
}
    // Hàm chuyển trang
    function showPage(pageId, element) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        element.classList.add('active');
    }

  // ẩn tất cả page
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // hiện page được chọn
  document.getElementById(pageId).classList.add('active');

  // xử lý active menu
  document.querySelectorAll('.menu a').forEach(a => {
    a.classList.remove('active');
  });

  if (el) el.classList.add('active');
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  document.getElementById("darkToggle").checked = isDark;
}

// Khi load trang
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const toggle = document.getElementById("darkToggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }
});