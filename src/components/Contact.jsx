import { useForm } from 'react-hook-form';

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    return (
        <div className="heroImageContainer">
            <div className="heroImage contact_BackgroundImage">
                <section className="adjustBackgroundHeight overlay">
                    <div className="heroContact_contentContainer">
                        <div className="contact-flex">
                          <section className="contact-column">
                            <h2 className="titleFont_bgdark addLargeMargin"><b>Schedule a Free Consultation</b></h2>
                          </section>
                          <section className="contact-column">
                          <form 
                          action="/api/?"
                          onSuccess={() => {
                            alert("submission has updated.")}}>
                            <div className="formSection">
                                <label className="titleFont_bgdark formLabel">First Name</label>
                                <input {...register('fname')} />
                            </div>    
                            <div className="formSection">
                                <label className="titleFont_bgdark formLabel">Last Name</label>
                                <input {...register('lname', { required: true })} />{errors.lastName && <p>Last name is required.</p>}
                            </div> 
                            <div className="formSection">
                                <label className="titleFont_bgdark formLabel">Email</label>
                                <input {...register('email')} />
                            </div>  
                            <div className="formSection">
                                <p className="titleFont_bgdark formLabel_question">Which Services Interest You Today?</p>
                                <textarea {...register('comments')} className="form_textArea"cols="70" rows="5"/>
                            </div>  
                            <button type="submit" className="youtube-chnl-btn">Get in Touch</button>
                        
                        </form>
                          </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
  
  export default ContactUs;
