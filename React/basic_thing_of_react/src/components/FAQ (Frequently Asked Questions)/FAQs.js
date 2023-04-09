import React, { useState } from 'react'
import { faqData } from "./data"
import Faq from "./faq"

export default function FAQs() {
    const [faqdata, setfaqdata] = useState(faqData);
    return (
        <div>
            <br /><br />
            <hr /><hr />
            <div className='faqmain'  >

                <h3 style={{textAlign:"center"}} >FAQs(Frequently asked Questions)</h3>

                {faqdata.map(faq =>
                    <Faq key={faq.id}  {...faq} />
                )}
            </div>

        </div>
    )
}
