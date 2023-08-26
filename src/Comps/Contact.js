import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container-fluid d-flex flex-column justify-content-start align-items-center m-0 contact' data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="p-3 fw-strong border-bottom border-light mb-3">Contact me</h2>
            <p>Let's have a quick call..</p>
            <p> Mobile: 8870185210</p>
            <p>Email : rajaprabhusingh@gmail.com</p>
            <div className='mb-3'>
                <a target='_blank' rel="noreferrer" href="https://wa.me/918870185210"><i className="m-2 fs-5 text-success bi bi-whatsapp"></i></a>
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=61550002389405"><i className="m-2 fs-5 text-primary bi bi-facebook"></i></a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/_prabhusingh_/"><i className="m-2 fs-5 text-danger bi bi-instagram"></i></a>
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/prabhusingh-raja-07b91b228/"><i className="m-2 fs-5 text-secondary bi bi-linkedin"></i></a>
                <a target='_blank' rel="noreferrer" href="https://twitter.com/Prabhu19122000?t=TozIwOJSdfGTB8KyNovnsg&s=09"><i className="m-2 fs-5 text-primary bi bi-twitter"></i></a>
            </div>
    </div>
  )
}

export default Contact