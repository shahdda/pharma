// ملف script.js

// مثال على إضافة رسالة تنبيه عند النقر على الرابط
document.querySelectorAll('.link-btn').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // لمنع الانتقال الفوري
        alert('تم النقر على الرابط: ' + this.textContent);
    });
});