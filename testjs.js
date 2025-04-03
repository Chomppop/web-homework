// ฟังก์ชันที่ใช้เมื่อคลิกปุ่ม "Submit Test"
function testFunction() {
    // ดึงค่าจาก input fields
    const input = document.getElementById('testInput').value;
    const number = document.getElementById('testNumber').value;
    
    // ดึงค่าจากตัวเลือกที่เลือก (checkbox)
    const interests = document.querySelectorAll('input[name="testInterest"]:checked');
    let selectedInterests = [];
    interests.forEach(function(interest) {
        selectedInterests.push(interest.value);
    });

    // แสดงผลข้อมูลที่ได้
    document.getElementById('message').textContent = 
        `Input: ${input}, Number: ${number}, Selected Interests: ${selectedInterests.join(', ')}`;
}

// ฟังก์ชันเพื่อทดสอบส่งข้อมูลไปยังเซิร์ฟเวอร์ (ใช้ axios)
function sendDataToServer() {
    const data = {
        input: document.getElementById('testInput').value,
        number: document.getElementById('testNumber').value,
        interests: Array.from(document.querySelectorAll('input[name="testInterest"]:checked'))
            .map(input => input.value),
    };

    // ใช้ axios ส่งข้อมูล
    axios.post('https://example.com/api/test', data)
        .then(response => {
            console.log("Data sent successfully", response);
            document.getElementById('message').textContent = 'ข้อมูลถูกส่งแล้ว!';
        })
        .catch(error => {
            console.error("Error sending data", error);
            document.getElementById('message').textContent = 'การส่งข้อมูลล้มเหลว!';
        });
}
