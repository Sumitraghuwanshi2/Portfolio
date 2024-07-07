import React from 'react'

function Qualification() {
    return (
        <>
        <div style={{display:"flex",justifyContent:'center'}}>
            <div >
                <h1 align="center">Qualification</h1>
                <div className='ex-items' data-aos="zoom-in"
                 data-aos-duration="1000">
                     <div>
                    <h2>B.tech (Computer Science)</h2>
                    <b>Sagar Institute Of Science And Technology </b>
                    </div>
                    <p>2024 <br />BHOPAL</p>
                </div>

                <div className='ex-items' data-aos="zoom-in"
                 data-aos-duration="1000">
                    <div>
                    <h2>HSSCE (MPBSE)</h2>
                    <b>C.L. ARYA PUBLIC HR. SEC. SCHOOL</b>
                    </div>
                    
                    <p>2019 <br />BHOPAL</p>
                    
                </div>
                <div className='ex-items' data-aos="zoom-in"
                 data-aos-duration="1000">
                    <div>
                    <h2>SSC (MPBSE)</h2>
                    <b>DREAM CONVENT HIGH SCHOOL</b>
                    </div>
                    <p>2017 <br /> BHOPAL</p>
                   
                </div>


            </div>
            </div>

        </>
    )
}

export default Qualification;
