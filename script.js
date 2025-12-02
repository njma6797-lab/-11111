document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startSound").play();
});

function loadPage(page) {
    let box = document.getElementById("content");

    if (page === "books") {
        box.innerHTML = `
        <div class="box">
            <h2>📘 كتب تعليم الهكر الأخلاقي</h2>
            <ul>
                <li>Linux Basics for Hackers</li>
                <li>The Hacker Playbook (قانوني)</li>
                <li>Web Security Essentials</li>
                <li>Network Defense Toolkit</li>
            </ul>
        </div>`;
    }

    if (page === "courses") {
        box.innerHTML = `
        <div class="box">
            <h2>🎓 كورسات مجانية</h2>
            <ul>
                <li>TryHackMe</li>
                <li>HackTheBox Academy</li>
                <li>Google CyberSecurity Certificate</li>
            </ul>
        </div>`;
    }

    if (page === "quiz") {
        box.innerHTML = `
        <div class="box">
            <h2>🛡️ اختبار الأمن السيبراني</h2>
            <p>أقوى كلمة مرور تكون:</p>
            <button onclick="alert('صحيح! لازم تكون طويلة ومعقدة')">طويلة ومعقدة</button>
            <button onclick="alert('غلط! الأرقام فقط ضعيفة')">أرقام فقط</button>
            <button onclick="alert('ضعيفة جداً')">الاسم + 123</button>
        </div>`;
    }

    if (page === "sound") {
        box.innerHTML = `
        <div class="box">
            <h2>🎧 مؤثرات صوتية</h2>
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
            </audio>
        </div>`;
    }

    if (page === "network") {
        box.innerHTML = `
        <div class="box">
            <h2>⚠️ حالة الشبكة</h2>
            <p>جاري الفحص…</p>
            <p>نتيجة الاتصال: ${navigator.onLine ? "الشبكة متصلة" : "لا يوجد اتصال"}</p>
        </div>`;
    }

    if (page === "dashboard") {
        box.innerHTML = `
        <div class="box">
            <h2>📊 لوحة التحكم</h2>
            <div class="dashboard-item">عدد الزيارات: 1024</div>
            <div class="dashboard-item">أمان المستخدم: 100%</div>
            <div class="dashboard-item">حالة النظام: مستقر</div>
        </div>`;
    }
}
