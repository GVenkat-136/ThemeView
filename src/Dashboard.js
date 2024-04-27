import React, { useEffect, useState } from 'react'
import './Dashboard.css'

export default function Dashboard() {
   const [textcolor, setTextcolor] = useState(`#1A1A1B`)
   const [sideBg, setSideBg] = useState(`#fff`)
   const [contentBg, setContentBg] = useState(`#1A1A1B`)
   const [headBg, setHeadbg] = useState('#f8f8f8')
   const [headText, setHeadText] = useState('#1A1A1B')
   const [name, setName] = useState('Satish');
   let usrList = ['Satish', 'Vishnu', 'Vamsee', 'Mohan', 'Dheeraj', 'Narendra', 'Shyam', 'Sony', 'Honey', 'Munni'];
   const Colors = {
      '--BackGround': '#f8f8f8',
      '--textColor': '#1A1A1B',
      '--headBg': '#f8f8f8',
      '--sideBg': '#f8f8f8',
      '--headtext': '#1A1A1B'
   }

   const handelContentBG = (e) => {
      const value = e.target.value
      setContentBg(value)
      document.body.style.setProperty('--BackGround', value);
   }

   const handeltextColor = (e) => {
      const value = e.target.value
      setTextcolor(value)
      document.body.style.setProperty('--textColor', value);
   }

   const handelheadBg = (e) => {
      const value = e.target.value
      setHeadbg(value)
      document.body.style.setProperty('--headBg', value);
   }

   const handelSideBg = (e) => {
      const value = e.target.value
      setSideBg(value)
      document.body.style.setProperty('--sideBg', value);
   }
   const handelheadText = (e) => {
      const value = e.target.value
      setHeadText(value)
      document.body.style.setProperty('--headtext', value);
   }

   const handelSave = (e) => {
      const colors = {
         '--BackGround': contentBg,
         '--textColor': textcolor,
         '--headBg': headBg,
         '--sideBg': sideBg,
         '--headtext': headText
      }
      if (!name) {
         return alert("Name Requires")
      }
      localStorage.setItem(name, JSON.stringify(colors))
      alert('Successfully Saved')
   }

   const handelSelect = (e) => {
      let name = e.target.value
      setName(name)
      const data = JSON.parse(localStorage.getItem(name)) || Colors
      if (data) {
         Object.keys(data).forEach((key) => {
            document.body.style.setProperty(key, data[key]);
         });
      }
   }

   const handelApply = (name) => {
      if (name) {
         const data = JSON.parse(localStorage.getItem(name)) || Colors
         if (data) {
            Object.keys(data).forEach((key) => {
               document.body.style.setProperty(key, data[key]);
            });
         }
      }
   }

   useEffect(() => {
      if (name) {
         handelApply(name)
      }
   }, [name])

   return (
      <div className='container'>
         <div className='wrapper'>
            <div className='Main_header'>
               <div className='content_header'>
                  <div className='Logo'>SMS</div>
                  <div className='color_picker'>
                     <label>NavBar-Text</label>
                     <input type="color" name="favcolor" value={textcolor} onChange={(e) => handeltextColor(e)} />
                  </div>
                  <div className='color_picker'>
                     <label>SideBar-BG</label>
                     <input type="color" name="favcolor" value={sideBg} onChange={(e) => handelSideBg(e)} />
                  </div>
                  <div className='color_picker'>
                     <label>Header-Text</label>
                     <input type="color" name="favcolor" value={headText} onChange={(e) => handelheadText(e)} />
                  </div>
                  <div className='color_picker'>
                     <label>Header-Bg</label>
                     <input type="color" name="favcolor" value={headBg} onChange={(e) => handelheadBg(e)} />
                  </div>
                  <div className='color_picker'>
                     <label>Content-Bg</label>
                     <input type="color" name="favcolor" value={contentBg} onChange={(e) => handelContentBG(e)} />
                  </div>
                  <div className='SaveInputs'>
                     <select name="cars" id="cars" onChange={(e) => handelSelect(e)}>
                        {
                           usrList?.map((name, i) => {
                              return (
                                 <option key={i} selected={i == 0} defaultValue={name}>{name}</option>
                              )
                           })
                        }
                     </select>
                     <input type="button" name="favcolor" defaultValue={"Save Colors"} onClick={() => handelSave()} />
                  </div>
               </div>
            </div>
            <div className='Content_Section'>
               <nav className='sidebar_nav'>
                  <div className='nav_list'>
                     <ul className='Logo_list'>
                        <li>Dashboard</li>
                        <li>Staff</li>
                        <li>Students</li>
                        <li>attendance</li>
                        <li>Files</li>
                        <li>Payments</li>
                     </ul>
                  </div>
               </nav>
               <section className='content'>
                  <div className='content_wrapper'>
                     <div className='main_content'>
                        <div className='dummy_content'>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   )
}
