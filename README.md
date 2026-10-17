# GitHub Actions and GitHub Pages Lab

ภูริพัฒน์ ตานน้อย — รหัสนิสิต 67160230

- Repository: https://github.com/67160230-byte/webdev-actions-lab
- Website: https://67160230-byte.github.io/webdev-actions-lab/
- Workflow: https://github.com/67160230-byte/webdev-actions-lab/actions

เว็บไซต์ Static ประกอบด้วย About Me, Skills และ Contact รองรับมือถือ มีปุ่ม Say Hello และปุ่มสลับโหมดมืด/สว่าง

## การทำงานของ Workflow

เมื่อ push โค้ดไปที่ main ระบบจะเริ่ม Workflow โดยอัตโนมัติ หรือกด Run workflow เพื่อเริ่มเองก็ได้ Job deploy จะดึงโค้ด ตรวจสอบว่ามี index.html, style.css และ script.js จากนั้นตั้งค่า Pages อัปโหลดไฟล์เป็น Artifact และนำเว็บขึ้น GitHub Pages หากขั้นตอนตรวจสอบไม่ผ่านจะหยุดก่อนเผยแพร่

## คำถามท้ายแลป

1. **GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?**
   Actions เป็นระบบรันงานอัตโนมัติ เช่น ตรวจสอบโค้ดและ deploy ส่วน Pages เป็นบริการโฮสต์เว็บไซต์ Static ให้คนเข้าชมผ่าน URL ทั้งสองจึงทำงานร่วมกันได้

2. **เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?**
   main ใช้เก็บโค้ดรุ่นที่ต้องการเผยแพร่ เมื่อ push ไปที่ main จึงให้ระบบนำรุ่นนั้นขึ้นเว็บโดยอัตโนมัติ และไม่ deploy ทุกครั้งที่แก้ branch อื่น

3. **ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่ เพราะเหตุใด?**
   ไม่เปลี่ยน เพราะการแก้ไขยังอยู่ในเครื่อง GitHub ยังไม่ได้รับโค้ดใหม่ และยังไม่มีเหตุการณ์ push มาเริ่ม Workflow ต้อง commit แล้ว push ก่อน

4. **เหตุใดโปรเจกต์ PHP + MySQL จึงไม่สามารถนำไปรันบน GitHub Pages ได้โดยตรง?**
   Pages ให้บริการไฟล์ Static และไม่มี PHP runtime หรือ MySQL server โค้ด JavaScript ฝั่งเบราว์เซอร์ทำงานได้ แต่ PHP และฐานข้อมูลต้องอยู่บนบริการ backend ที่รองรับ

5. **อธิบายขั้นตอนการค้นหาสาเหตุ เมื่อ Workflow มีสถานะ Failed**
   เปิดแท็บ Actions เลือกรอบที่ล้มเหลว เปิด job และ step ที่เป็นสีแดง อ่านข้อความ error ใน logs แล้วตรวจสอบสาเหตุ เช่น ตำแหน่งไฟล์ รูปแบบ YAML สิทธิ์ permissions หรือ Settings > Pages จากนั้นแก้ไข commit และ push ใหม่ แล้วตรวจสอบว่ารอบใหม่สำเร็จและเว็บเปิดได้
