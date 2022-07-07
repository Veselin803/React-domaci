import React, { Component } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Contact extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_1g9k95s', 'template_55p1zpd', e.target, '1jHIw9PqpSG4oX5-a')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Naša lokacija</strong></h3>
                    </div>
                
                <div className="row">
                    <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.3315624834427!2d20.41227821578046!3d44.774045387247774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6e2ccfbbfeab%3A0x149d432a88bbf72!2z0KDQvtC00LAg0KHQuNC90LXQv9C70LXQutGB!5e0!3m2!1ssr!2srs!4v1657130065106!5m2!1ssr!2srs"  style={{
                        border: '0',
                        width: '100%',
                        height: '315px',
                        frameborder: '0'
                    }} allowFullScreen 
                    />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Kontaktirajte nas</strong></h4>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ime i prezime" name="name"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" name="email"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tema" name="subject"/>
                            </div><br></br>
                            <textarea className="form-control" cols="30" rows="3" placeholder="Kako Vam možemo pomoći?" name="message"/>
                            <br></br>
                            <input type="submit" className="btn btn-outline-primary text-uppercase" value="Pošaljite">
                               
                            </input>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        );
        }
}

export default Contact;