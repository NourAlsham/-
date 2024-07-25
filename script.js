let students = {};

function addStudent() {
    try {
        const id = parseInt(document.getElementById('studentId').value);
        const name = document.getElementById('studentName').value;
        const status = document.getElementById('studentStatus').value;

        if (!id || !name) {
            throw new Error('يرجى إدخال معرف الطالب واسم الطالب.');
        }

        if (students[id]) {
            throw new Error('معرف الطالب موجود بالفعل.');
        }

        students[id] = { name: name, status: status };
        document.getElementById('studentId').value = '';
        document.getElementById('studentName').value = '';
        document.getElementById('studentStatus').value = 'مسجل';
        displayStudents();
    } catch (error) {
        alert(error.message);
    }
}

function removeStudent() {
    try {
        const id = parseInt(document.getElementById('removeId').value);

        if (!id) {
            throw new Error('يرجى إدخال معرف الطالب للحذف.');
        }

        if (!students[id]) {
            throw new Error('معرف الطالب غير موجود.');
        }

        delete students[id];
        document.getElementById('removeId').value = '';
        displayStudents();
    } catch (error) {
        alert(error.message);
    }
}

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    for (const id in students) {
        const student = students[id];
        const li = document.createElement('li');
        li.textContent = `معرف الطالب: ${id}, اسم الطالب: ${student.name}, حالة التسجيل: ${student.status}`;
        studentList.appendChild(li);
    }
}
