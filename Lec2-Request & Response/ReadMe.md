Node.js Request & Response – Revision Notes

Request (req)

* Client se server ko aata hai
* Request ki sari info rakhta hai

Main properties:

* req.url      → kis route pe request aayi
* req.method   → GET / POST / PUT / DELETE
* req.headers  → metadata (browser, content-type, etc.)

Example:
req.url === '/men'
req.method === 'GET'

---

Response (res)

* Server se client ko jata hai
* Isi se output bhejte hain

Main methods:

* res.setHeader() → response ka type set
* res.write()     → response likhna
* res.end()       → response finish (must)

Example:
res.setHeader('Content-Type','text/html')
res.write('<h1>Hello</h1>')
res.end()

---

HTTP Methods (Intent yaad rakho)

GET

* Data fetch / page open
* Data URL me hota hai
  Example: GET /men

POST

* Data server ko bhejna
* Data request body me hota hai
  Example: POST /login

PUT

* Existing data update
  Example: PUT /user/1

DELETE

* Data delete
  Example: DELETE /product/5

---

Basic Routing Pattern

if (req.url === '/men' && req.method === 'GET') {
res.end('Welcome to Men');
}

---

Common Mistakes

* res.end() call na karna
* POST data ko req.url me dhundhna
* req.method check na karna

---

One-line Summary

* req = incoming request
* res = outgoing response
* HTTP methods batate hain request ka kaam
