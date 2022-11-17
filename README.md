# tpa-5
---
## TPA - 5 Documentation End point
---
### 1. End Point untuk register user menggunakan method POST
>https://localhost:3000/Auth/register
```
// contoh pengisiannya :
{

  "username" : "cek register",
  "password" : "password123"
}
```

### 2. End Point untuk login user menggunakan method POST
>http://localhost:3000/Auth/login
```
// Jika login menggunakan username dan password yang telah terdaftar maka akan mendapatkan jwt token. Berikut adalah contoh jwt token yang didapat ketika login
{
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNlayByZWdpc3RlciIsImlhdCI6MTY2ODY3NTIxNH0.UPs88zRr_fDKs4XZqIaxrbGXg8FK75SGJNDIboqQHXk
}
```
### 3. End Point untuk membuat todo menggunakan method POST
>http://localhost:3000/todo/createTodo <br>
sebelum membuat todo, token yang telah kita dapatkan saat login tadi di copy, kemudian pada pindah bagian **Headers**, ketikkan **Authorization** dan masukkan pada value diisi ``bearer`` dan tempel token yang telah kita dapatkan saat login tadi
```
{
  "judulTodo" : "contoh membuat todo",
  "detailTodo" : "ini adalah isi todo"
}

// ketika berhasil, maka akan muncul pesan sebagai berikut :
{
  "todo": "contoh membuat todo",
  "detail": "ini adalah isi todo",
  "_id": "6375fae063b78a7cdecb56a9",
  "__v": 0
}
id tersebut adalah id todo yang berhasil kita buat
```
### 4. End point untuk menampilkan todo berdasarkan ID menggunakan method GET
>http://localhost:3000/todo/getTodo/:id
```
// Pada end point setelah /getTodo/ , inputkan id todo yang telah kita buat tadi dan akan muncul pesan sebagai berikut :
{
  "_id": "6375fae063b78a7cdecb56a9",
  "todo": "contoh membuat todo",
  "detail": "ini adalah isi todo",
  "__v": 0
}
```

### 5. End Point untuk mengupdate todo menggunakan method PUT
>http://localhost:3000/todo/updateTodo/:id <br>
sama seperti membuat todo, jika ingin mengupdate todo kita pergi kebagian header dan aktifkan **Authorization** dan masukkan ``bearer`` dan token user yang login tadi, dan pada bagian body kita ketikkan seperti ini :
```
{
  "judul" : "contoh mengupdate todo",
  "detail" : "ini adalah isi todo yang telah diupdate"
}

// jika berhasil, maka akan muncul tampilan :
{
  "acknowledged": true,
  "modifiedCount": 0,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### 6. End Point untuk menghapus todo berdasarkan Id menggunakan method DELETE
>http://localhost:3000/todo/deleteTodo/:id <br>
masukkan id todo yang telah kita buat pada akhir link end point, jika berhasil akan muncul pesan sebagai berikut :
```
{
  "_id": "6375fae063b78a7cdecb56a9",
  "todo": "contoh membuat todo",
  "detail": "ini adalah isi todo",
  "__v": 0
}
```
